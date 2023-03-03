import { useRoutes } from 'react-router-dom'

import Product from '~/pages/Product/Product'
import Login from '~/pages/Login/Login'
import Register from '~/pages/Register/Register'
import RegisterLayout from '~/layouts/RegisterLayout/RegisterLayout'

const useRouterElement = () => {
    const routerElement = useRoutes([
        {
            path: '/',
            element: <Product />
        },
        {
            path: '/login',
            element: (
                <RegisterLayout>
                    <Login />
                </RegisterLayout>
            )
        },
        {
            path: '/register',
            element: (
                <RegisterLayout>
                    <Register />
                </RegisterLayout>
            )
        }
    ])

    return routerElement
}

export default useRouterElement
