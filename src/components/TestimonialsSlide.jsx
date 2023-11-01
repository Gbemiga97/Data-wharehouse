import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import '../slider.css'
import {Pagination} from 'swiper/modules'
import { testimonialsData } from "../data"

const TestimonialsSlide = () => {
  return (
    <Swiper 
    slidesPerView={'auto'} 
    centeredSlides={true} 
    spaceBetween={20}
    pagination={{
      clickable: true,
    }} 
    modules={[Pagination]}
    className="mySwiper"
    >
      {
        testimonialsData.map(({image, name, web, message, delay}, i) => (
          <SwiperSlide 
          className="bg-white rounded-[20px] border border-accent-primary
          xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px]
          flex items-start gap-x-[1.8rem] shadow-xl "
          key={i}>
              <img src={image} alt="" />
              <div>
                <h5 className="text-lg text-primary font-bold">
                  {name}</h5>
                <p className="mb-4 font-semibold text-accent-primary ">
                  {web}</p>
                <p className="max-w-[340px]">
                  {message}</p>
                </div>         
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default TestimonialsSlide