import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import OrderPage from '../pages/OrderPage/OrderPage'
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage'
import ProductPage from '../pages/ProductPage/ProductPage'
import SingInPage from '../pages/SignInPage/SignInPage'
import SignUpPage from '../pages/SingUpPage/SignUpPage'
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage'

export const routes = [
  {
    page: HomePage,
    path: '/',
    isShowHeader: true
  },
  {
    page: OrderPage,
    path: '/order',
    isShowHeader: true
  },
  {
    page: ProductPage,
    path: '/product',
    isShowHeader: true
  },
  {
    page: SingInPage,
    path: `/signin`,
    isShowHeader: false
  },
  {
    page: SignUpPage,
    path: `/signup`,
    isShowHeader: false
  },
  {
    page: ProductDetailsPage,
    path: `/productDetails`,
    isShowHeader: true
  },
  {
    page: TypeProductPage,
    path: `/type`,
    isShowHeader: true
  },
  {
    page: NotFoundPage,
    path: '*',
    isShowHeader: false
  }
]
