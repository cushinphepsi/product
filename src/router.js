
import HomePage from './page/HomePage/HomePage'
import ProductsPage from './page/ProductsPage/ProductsPage'
import NotFoundPage from './page/NotFoundPage/NotFoundPage'
import ActionProductsPage from './page/ActionProductsPage/ActionProductsPage'

const router = [
    {
        path:'/',
        element: <HomePage/>
    },
    {
        path:'/products',
        element: <ProductsPage/>
    },
    {
        path:'',
        element: <NotFoundPage/>
    },
    {
        path:'/product/add',
        element: <ActionProductsPage/>
    },
    {
        path:'/product/:id/edit',
        element: <ActionProductsPage/>
    },
]

export default router