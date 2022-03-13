import ProductItems from "../ProductItems/ProductItems"
function ProductItem() {
    return (

        <div className="panel panel-info">
            <div className="panel-heading">List Product current</div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductItems />
                </tbody>
            </table>
        </div>
    )
}

export default ProductItem