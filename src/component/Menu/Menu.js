import { NavLink } from 'react-router-dom';
function Menu() {
    const activeStyle = {
        backgroundColor: '#eee'
    };
    return (
        <div className="navbar navbar-default">
            <NavLink className="navbar-brand" to="/d">ProductsManager</NavLink >
            <ul className="nav navbar-nav">
                <li>
                    <NavLink
                        to="/" 
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        HomePage
                    </NavLink >
                </li>
                <li>
                    <NavLink
                        to="/products"
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        List Product
                    </NavLink >
                </li>
            </ul>
        </div>
    )
}

export default Menu