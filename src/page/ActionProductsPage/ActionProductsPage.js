import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux"
import { addProductRequest, updateProductRequest, getProductUpdateRequest } from '../../action/action'

function ActionProductsPage(props) {
    const product = props.product
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
            props.updateProduct(params.id, value)
        } else {
            props.addProduct(value)
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

    // const getProductById = (id) => {
    //     callApi("get", `/${params.id}`, null).then((response) => {
    //         setName(response.name);
    //         setAmount(response.amount);
    //         setPrice(response.price);
    //     });
    // };

    const showProductUpdate = (id) => {
        props.getProductById(id)
        console.log(product);
    }
    useEffect(() => {
        if (params.id) {
            showProductUpdate(params.id)
        }
    }, []);

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form onSubmit={handleAddProduct}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        value={name}
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
                        value={price}
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
                        value={amount}
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

const mapStateToProps = (state) => {
    return {
        product: state.itemProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) => dispatch(addProductRequest(product)),
        updateProduct: (id, product) => dispatch(updateProductRequest(id, product)),
        getProductById: (id) => dispatch(getProductUpdateRequest(id)),
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ActionProductsPage)
