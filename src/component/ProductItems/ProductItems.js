import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { productView } from "../../store/selector";
import { deleteProductRequest, getAllProductRequest } from "../../store/reducer/productSlice";

function ProductItems() {
    // const products = props.listProduct
    const products = useSelector(productView)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    // const getAllProduct = props.getAllProduct

    useEffect(() => {
        dispatch(getAllProductRequest())
    }, [dispatch])

    const handleEdit = (e) => {
        const id = e.target.dataset.index;
        navigate(`/product/${id}/edit`);
    };

    const handleDelete = (e) => {
        const id = e.target.dataset.index;
        const confirm = window.confirm("Do you want to delete this product ?");
        if (confirm) {
            dispatch(deleteProductRequest(id))
            // props.deleteProduct(id)
        }
    };

    return (
        <>
            {products && products.map((item, index) => (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.amount}</td>
                    <td>
                        <button
                            type="button"
                            data-index={item.id}
                            className="btn btn-primary"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            data-index={item.id}
                            className="btn btn-danger"
                            style={{ marginLeft: 12 }}
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         listProduct: state.products
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getAllProduct: () => dispatch(getAllProductRequest()),
//         deleteProduct: (id) => dispatch(deleteProductRequest(id))
//     }
// }

export default ProductItems
