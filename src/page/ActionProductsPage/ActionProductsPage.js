import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addProductRequest, updateProductRequest, getProductUpdateRequest } from '../../action/action'
import { itemProductSelector } from "../../store/selector";

function ActionProductsPage(props) {
    // const product = props.product
    let product = useSelector(itemProductSelector)
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [amount, setAmount] = useState("");
    const navigate = useNavigate();
    let params = useParams();

    const handleAddProduct = (e) => {
        const value = {
            name,
            price,
            amount,
        };
        e.preventDefault();
        if (params.id) {
            dispatch(updateProductRequest(params.id, value))
            // props.updateProduct(params.id, value)
        } else {
            dispatch(addProductRequest(value))
            // props.addProduct(value)
        }
        navigate(-1);
    };

    const handleInput = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value);
        } else if (e.target.name === "price") {
            setPrice(e.target.value);
        } else {
            setAmount(e.target.value);
        }
    };

    // const showProductUpdate = (id) => {
    //     props.getProductById(id)
    // }

    useEffect(() => {
        if (params.id) {
            dispatch(getProductUpdateRequest(params.id))
        }
    }, []);

    useEffect(() => {
        setName(product.name);
        setAmount(product.amount);
        setPrice(product.price);
    }, [product]);

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form onSubmit={handleAddProduct}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        value={name || ''}
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Input name product"
                        onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="text"
                        value={price || ''}
                        name="price"
                        className="form-control"
                        placeholder="Input price product"
                        onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="text"
                        value={amount || ''}
                        name="amount"
                        className="form-control"
                        placeholder="Input amount product"
                        onChange={handleInput}
                    />
                </div>
                <button className="btn btn-primary">
                    {params.id ? 'Edit Product' : 'Add Product'}
                </button>
            </form>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         product: state.itemProduct
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addProduct: (product) => dispatch(addProductRequest(product)),
//         updateProduct: (id, product) => dispatch(updateProductRequest(id, product)),
//         getProductById: (id) => dispatch(getProductUpdateRequest(id)),
//     }
// }

export default ActionProductsPage
