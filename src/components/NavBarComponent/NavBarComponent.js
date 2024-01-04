import './NavBarComponent.scss'
const NavBarComponent = () => {
  const renderType = (type, options) => {
    switch (type) {
      case 'text':
        return options.map((options, index) => {
          return (
            <li key={index}>
              {options}
            </li>
          )
        })
      case 'price':
        return options.map((options, index) => {
          return (
            <li key={index}>
              {options}
            </li>
          )
        })
    }
  }
  return (
    <div className='table-container'>
      <div className='Label'>
        Label
      </div>
      <div className='options-product'>
        {renderType('text', ['Tủ lạnh', 'TV', 'Máy giặt'])}
      </div>
      <div className='priceRange'>
        <div className='title-price-range'>
          Giá
        </div>
        <div className='Range'>
          {renderType('price', ['dưới 40.000.000', 'trên 50.000.000'])}
        </div>
      </div>
    </div>
  )
}
export default NavBarComponent
