import { Routes, Route } from 'react-router-dom';

import router from './router'
import Menu from './component/Menu/Menu'

function App() {
    return (
        <div>
            <Menu />
            <div className="container">
                <div className="row">
                    <Routes>
                        {router.map((item, index) => (
                            <Route key={index} path={item.path} element={item.element}>
                            </Route>
                        ))}
                    </Routes>

                </div>
            </div>
        </div>
    );
}

export default App;
