import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_CONNECT } from "../../constant/constant";
import { callApi } from "../../store/connect";

function ProductItems() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(URL_CONNECT + '/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            signal
        }).then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(err => {

            })
        return () => {
            controller.abort()
        };
    }, []);

    const handleEdit = (e) => {
        const id = e.target.dataset.index;
        navigate(`/product/${id}/edit`);
    };

    const handleDelete = (e) => {
        const id = e.target.dataset.index;
        const confirm = window.confirm("Do you want to delete this product ?");
        if (confirm) {
            callApi('DELETE', `/${id}`, null).then(res => {
                let newProducts = products.filter(item => item.id !== res.id)
                setProducts(newProducts)
            })
        }
    };

    return (
        <>
            {products && products.map((item) => (
                <tr key={item.id}>
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

export default ProductItems;
