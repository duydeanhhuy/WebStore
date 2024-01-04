import { useState } from 'react'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import './TypeProductPage.scss'
import ReactPaginate from 'react-paginate'
const TypeProductPage = () => {
  const [pageCount, setPageCount] = useState(5)
  const handlePageClick = () => {
  }
  return (
    <div className='typeproductpage-container'>
      <div style={{width: '2%'}}></div>
      <div className='navbar'>
        <NavBarComponent/>
      </div>
      <div className='list-container'>
        <div className='list-product'>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
        </div>
        <ReactPaginate
          nextLabel='next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel='< previous'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          breakLabel='...'
          breakClassName='page-item'
          breakLinkClassName='page-link'
          containerClassName='pagination'
          activeClassName='active'
          renderOnZeroPageCount={null} />
      </div>
    </div>
  )
}
export default TypeProductPage
