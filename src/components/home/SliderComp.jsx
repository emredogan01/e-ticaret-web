import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {

    const settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>
         <Slider {...settings}>
          <div className='!flex items-center bg-gray-100 px-6'>
            <div className=''>
                <div className='text-7xl font-bold'>En Kaliteli Ayakkabıların Adresi</div>
                <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse reiciendis veritatis quibusdam velit minus dolorem perferendis, sunt delectus culpa molestias dignissimos error soluta tempore nemo vel sint repellendus similique?</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] flex h-16 items-center justify-center bg-gray-500'>İncele</div>
            </div>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ae64253b-2b83-4d9d-ab16-d7dbb99dbb70/air-force-1-lv8-ayakkab%C4%B1s%C4%B1-vXKF0h.png" />
          </div>
          <div className='!flex items-center bg-gray-100 px-6'>
          <div className=''>
                <div className='text-7xl font-bold'>En Kaliteli Ayakkabıların Adresi</div>
                <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse reiciendis veritatis quibusdam velit minus dolorem perferendis, sunt delectus culpa molestias dignissimos error soluta tempore nemo vel sint repellendus similique?</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] flex h-16 items-center justify-center bg-gray-500'>İncele</div>
            </div>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0d73b182-cc0f-440d-b408-26e40f332709/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-1hqfHl.png" />
          </div>
          </Slider>
    </div>
  )
}

export default SliderComp