import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SearchProduct.scss';
import { searchProduct, sortProduct } from '../../store/reducer/filterProductSlice';

function SearchProduct() {

    const [inputSearch, setInputSearch] = useState('')
    const dispatch = useDispatch()
    const handleSearch = () => {
        dispatch(searchProduct(inputSearch))
    }

    const handleSort = (e) => {
        const option = e.target.value
        dispatch(sortProduct(option))
    }

    return (
        <div className="search-container">
            <input
                type="text"
                className="form-control"
                value={inputSearch}
                placeholder="Enter the name product to be search"
                onChange={(e) => setInputSearch(e.target.value)}
            />
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleSearch}
            >
                Search
            </button>

            <select
                className="form-control"
                onChange={handleSort}
                defaultValue={""}
            >
                <option value="" disabled hidden>Choose a sort type</option>
                <option value="name">Sort By Name</option>
                <option value="price">Sort By Price</option>
            </select>

        </div>
    )
}

export default SearchProduct