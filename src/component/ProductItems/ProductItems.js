import { useContext, useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getAllProduct, deleteProduct } from "../../store/action/action"
import { callApi } from "../../store/connect"
import { ContextProduct } from "../../store/Context"

function ProductItems() {

    const {products, dispatch} = useContext(ContextProduct)
    const navigate = useNavigate()

    useLayoutEffect(() => {
            callApi('GET', '/', null)
            .then(res => {
                dispatch(getAllProduct(res))
            })
        
    }, [dispatch])

    const handleEdit = (e) => {
        const id = e.target.dataset.index
        navigate(`/product/${id}/edit`)
    }

    const handleDelete = (e) => {
        const id = e.target.dataset.index
        const confirm = window.confirm('Do you want to delete this product ?')
        if(confirm)
            dispatch(deleteProduct(id))
    }

    return (
        <>
            {products.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.amount}</td>
                    <td>
                        <button type="button" data-index = {item.id} className="btn btn-primary" onClick={handleEdit}>Edit</button>
                        <button type="button" data-index = {item.id} className="btn btn-danger" style={{ marginLeft: 12 }} onClick={handleDelete}>Delete</button>
                    </td>
                </tr>
            ))}
        </>
    )
}

export default ProductItems