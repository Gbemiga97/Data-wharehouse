import { aboutData } from "../data"


const About = () => {
  const {image, title, subtitle} = aboutData

  return (
    <section 
    data-aos='fade-up' data-aos-offset='150'
    className="my-[2.8rem] xl:mt-[100px]">
      <div className="container mx-auto">
        <div className="bg-accent-secondary/[15%] rounded-[50px]
        min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row
        xl:items-center xl:text-left xl:gap-x-[60px] xl:pb-0">

          <div
          data-aos='zoom-in-left'
          className="flex-1">
            <img src={image} alt="avatar" />
          </div>

          <div className="flex-1 xl:pr-12">
            <h2
            data-aos='fade-up' data-aos-delay='300'
            className="h2 mb-10">
              {title}</h2>
            <p 
            data-aos='fade-up' data-aos-delay='400'
            className="max-w-[474px] mx-auto xl:mx-0">
              {subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About