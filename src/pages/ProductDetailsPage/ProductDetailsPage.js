import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponents'

const ProductDetailsPage = () => {
  return (
    <div>
      <div className='title-list' style={{'background': '#e0dcdc','height': '30px','fontSize': '11px','display': 'flex','padding': '5px','paddingLeft': '30px'}}>
        <a style={{'textDecoration': 'none','marginLeft': '85px'}} href='/'>Trang chủ</a>
      </div>
      <div style={{'background': '#e0dcdc','width': '100vw','height': '100vh'}}>
        <ProductDetailsComponent/>
      </div>
    </div>
  )
}
export default ProductDetailsPage
