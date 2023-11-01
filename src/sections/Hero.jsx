
import { heroData } from "../data"


const Hero = () => {

    const { title, subtitle, btnText, image, } = heroData

  return (
    <section className="lg:h-[900px] py-12">
        <div className="container mx-auto h-full relative">
            <div className="flex flex-col xl:flex-row items-center h-full md:py-24 ">

                <div className="text-center xl:text-left xl:absolut ">
                    <h1 
                    data-aos='fade-down' data-aos-delay='400'
                    className="h1 xl:max-w-[700px] mb-6 xl:mb-12">
                        {title}</h1>
                        <p 
                         data-aos='fade-down' data-aos-delay='500'
                        className="lead xl:max-w-[380px] mb-6 lg:mb-12">
                            {subtitle}
                        </p>
                        <button
                         data-aos='fade-down' data-aos-delay='600'
                        className="btn btn-primary mb-8 xl:mb-0">
                            {btnText}
                        </button>
                </div>

                <div
                data-aos='fade-up' data-aos-offset='100'
                 className="xl:absolute xl:-right-12 xl:bottom-16">
                    <img 
                    src={image} alt="hero" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero