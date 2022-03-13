import { Link } from "react-router-dom"
import ProductItem from "../../component/ProductItem/ProductItem"
function ProductsPage() {
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to={'/product/add'}>
                <button type="button" className="btn btn-primary">Add product</button>
             </Link>
            <ProductItem />
        </div>
    )
}

export default ProductsPage