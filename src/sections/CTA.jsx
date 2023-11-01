import { BsArrowRight } from "react-icons/bs"
import { ctaData } from "../data"


const CTA = () => {
    const {title, subtitle, btnText1, btnText2} = ctaData


  return (
    <section 
    data-aos='fade-up' 
    className="my-[75px] xl:my-[150px] border-t-2">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row justify-between items-center">

                <div className="py-12 xl:py-24 text-center xl:text-left">
                    <h2
                    data-aos='fade-up' 
                    data-aos-delay='300'  
                    
                    className="h2 mb-5">
                        {title}</h2>
                    <p
                    data-aos='fade-up'    
                    className="lead">
                        {subtitle}</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-y-4 gap-x-[1.8rem]">
                    <button
                     data-aos='fade-up'  data-aos-delay='300'
                    className="btn btn-secondary">
                        {btnText1} 
                        </button>
                    <button 
                    data-aos='fade-up' data-aos-delay='400' 
                    className="btn btn-quaternary flex items-center gap-x-[20px] group">
                        {btnText2} <BsArrowRight 
                        className="text-2xl text-accent-primary transition group-hover:text-white" />
                        </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CTA