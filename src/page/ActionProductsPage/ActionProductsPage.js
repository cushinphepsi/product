import { useContext, useEffect, useState } from "react"
import { ContextProduct } from "../../store/Context"
import { addProduct, editProduct } from "../../store/action/action"
import { useNavigate, useParams } from "react-router-dom"
import { callApi } from "../../store/connect"

function ActionProductsPage() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [amount, setAmount] = useState('')
    const { dispatch } = useContext(ContextProduct)
    const navigate = useNavigate()
    let params = useParams()

    const handleAddProduct = (e) => {
        const value = {
            name,
            price,
            amount
        }
        e.preventDefault()
        if (params.id) {
            value.id = params.id
            dispatch(editProduct(value))
        } else {
            dispatch(addProduct(value))
        }
        navigate(-1)
    }

    const handleInput = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
        } else if (e.target.name === 'price') {
            setPrice(e.target.value)
        } else {
            setAmount(e.target.value)
        }
    }

    const getProductById = (id) => {
        callApi('get', `/${params.id}`, null)
        .then(response => {
            setName(response.name)
            setAmount(response.amount)
            setPrice(response.price)
        })
    }

    useEffect(() => {
        if (params.id) {
            getProductById(params.id)
        }
    }, [])
    
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

            <form onSubmit={handleAddProduct}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        value={name}
                        type="text"
                        name='name'
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
                        name='price'
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
                        name='amount'
                        className="form-control"
                        placeholder="Input amount product"
                        onChange={handleInput}
                    />
                </div>
                <button className="btn btn-primary" >Add Product</button>
            </form>

        </div>
    )
}

export default ActionProductsPage