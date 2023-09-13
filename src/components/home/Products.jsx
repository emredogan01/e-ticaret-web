import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productSlice';
import Loading from '../Loading';
import Product from './Product';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { getCategoryProducts } from '../../redux/productSlice';


const Products = ({category, sort}) => {
  const dispatch = useDispatch();

  const { products, productStatus } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;
  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  console.log(sort)

  useEffect(() => {
    if(category){
        dispatch(getCategoryProducts(category))
    }else{
        dispatch(getProducts());
    }
  }, [dispatch, category]);

  return (
    <div>
      {productStatus === 'loading' ? (
        <Loading />
      ) : (
        <>
          <div className='flex flex-wrap'>
            {currentItems?.sort((a,b)=>sort == "inc" ? a.price-b.price : sort == "dec" ? b.price-a.price : null).map((product, i) => (
              <Product key={i} product={product} />
            ))}
          </div>

          <ReactPaginate
            className='paginate'
            breakLabel='...'
            nextLabel='>'
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel='<'
            initialPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default Products;
