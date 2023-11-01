import { TestimonialsSlide } from "../components"


const Testimonials = () => {

  return (
    <section className="relative">
      <div className="container mx-auto">
        <div 
        data-aos='fade-up' data-aos-offset='300'
        className="bg-accent-primary min-h-[800px] rounded-[50px]">
          <div className="flex flex-col justify-center px-2 xl:px-0 h-[800px]">
            <h2 className="h2 text-white text-center mb-[80px] ">
              Testimonials</h2>

              <TestimonialsSlide />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials