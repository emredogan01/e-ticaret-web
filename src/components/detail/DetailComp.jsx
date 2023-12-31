import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const DetailComp = ({productDetail}) => {

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(0);

    const decrement = ()=>{
        if(quantity<1) return;
        setQuantity(quantity - 1)
    }

    const increment = ()=>{
        if(quantity < productDetail.rating.count) setQuantity(quantity + 1)
    }

    const addBasket= ()=>{
        dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, quantity: quantity, price: productDetail?.price}))
    }



  return (
    <div className='flex gap-10'>
        <img className='w-[700px] h-[600px] object-cover' src={productDetail?.image} alt="" />
        <div className=''>
            <div className='text-4xl font-bold'>{productDetail.title}</div>
            <div className='my-2 text-2xl'>{productDetail.description}</div>
            <div className='my-2 text-xl text-red-500'>Rating: {productDetail.rating?.rate}</div>
            <div className='my-2 text-xl text-red-500'>Count: {productDetail.rating?.count}</div>
            <div className='text-5xl font-bold'>Price: {productDetail.price}<span className='text-sm'>TL</span></div>
            <div className='flex items-center gap-5 my-7'>
                <div onClick={decrement} className='text-5xl font-bold cursor-pointer'>-</div>
                <input className='w-14 text-center text-4xl font-bold' type="text" value={quantity}/>
                <div onClick={increment} className='text-5xl font-bold cursor-pointer'>+</div>
            </div>
            <div onClick={addBasket} className='border w-[200px] h-16 flex items-center justify-center text-2xl rounded-md bg-gray-500 cursor-pointer my-4'>Sepete Ekle</div>
        </div>
    </div>
  )
}

export default DetailComp