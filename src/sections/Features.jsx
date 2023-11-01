import { BsArrowRight } from "react-icons/bs"
import { featuresData } from "../data"


const Features = () => {
  const {title, subtitle, list} = featuresData

  return (
    <section className="my-[70px] xl:my-[150px]">
      <div className="container mx-auto">

          <div className="text-center">
            <h2 
            data-aos='fade-down' data-aos-delay='100'
            className="h2 mb-6 xl:mb-12">
              { title }</h2>
            <p 
            data-aos='fade-down' data-aos-delay='200'
            className="lead max-w-[584px] mx-auto mb-16 xl:mb-24">
              {subtitle}</p>
          </div>


          <div className="grid gap-[50px] md:grid-cols-2">
            {
              list.map(({image, title, bgImage, description, linkText, delay}, i) => (
                <article 
               data-aos='zoom-in' data-aos-offset='100' data-aos-delay={delay}
                className="w-full max-w-[530px] h-[358px] relative flex flex-col items-center
                justify-center xl:flex-row xl:justify-start mx-auto"
                key={i}>
                  <div className="hidden lg:flex absolute top-0 right-0  -z-10">
                    <img src={bgImage} alt={title} />
                  </div>

                  <div
                  data-aos='zoom-in-right' data-aos-delay={delay}
                  
                   className="max-w-[120px] xl:mr-7 xl:max-w-[232px]">
                    <img src={image} alt={title} />
                  </div>

                  <div className="max-w-[220px]">
                    <h3 className="h3 mb-4">
                      {title}</h3>
                    <p className="font-light italic mb-4">
                      {description}</p>

                    <div className="flex items-center gap-x-2 group">
                      <a 
                      className="text-primary font-bold"
                      href="">{linkText}</a>
                      <BsArrowRight 
                      className="text-xl text-accent-primary transition-all group-hover:ml-[5px]"
                      />
                    </div>
                  </div>
                </article>
              ))
            }
          </div>
        
      </div>
    </section>
  )
}

export default Features