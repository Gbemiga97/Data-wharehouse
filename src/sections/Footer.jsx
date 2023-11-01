import { images } from "../assets"
import { copyrightData, footerData } from "../data"

const Footer = () => {

  const {logo, address, email, phone, list1, list2, socialList} = footerData
 

  return (
    <footer data-aos='fade-up'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row text-center lg:text-left
        gap-y-12">

          <div className="w-[45%] mx-auto flex flex-col items-center lg:items-start">
            <a className="mb-[4rem]" href="">
              <img src={logo} alt="logo" />
            </a>
            <p className="max-w-[260px] mb-5 text-primary font-bold">
              {address}</p>
            <p className="italic font-light">
              {email}</p>
            <p className="italic font-light">
              {phone}</p>
          </div>

          <div className="flex flex-1 flex-col gap-y-14 lg:flex-row justify-between">
          <div>
          <h5 className="font-extrabold text-[1.2rem] text-primary mb-8">
            About
          </h5>
            <ul className="flex flex-col gap-y-4">
              {
                list1.map(({name, href}, i) => (
                  <li key={i}>
                    <a 
                    className="text-primary"
                    href={href}>{name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        

          <div>
          <h5 className="font-extrabold text-[1.2rem] text-primary mb-8">
            Help
          </h5>
            <ul className="flex flex-col gap-y-4">
              {
                list2.map(({name, href}, i) => (
                  <li key={i}>
                    <a 
                    className="text-primary"
                    href={href}>{name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          
          <div>
          <h5 className="font-extrabold text-[1.2rem] text-primary mb-8">
            Social Media
          </h5>
            <ul className="flex  gap-x-4 justify-center ">
              {
                socialList.map(({icon, href}, i) => (
                  <li
                  className="w-12 h-12 bg-primary/10 flex justify-center items-center
                  rounded-full hover:bg-accent-secondary transition duration-300 ease-in-out cursor-pointer"
                  key={i}>
                    <a 
                    className="text-white text-xl hover:text-white"
                    href={href}>{icon}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          </div>

        </div>
      </div>
      
      <div className="container mx-auto gap-6 text-center md:text-left my-24 flex flex-col-reverse  md:flex-row md:justify-between items-center">
        <small className="max-w-[18rem] text-sm font-light italic ">
        © Datawarehouse™, {new Date().getFullYear()}. All rights reserved.
        Company Registration Number: 21479524.
          </small>
        <div>
         <img src={images.ChatIcon} alt="icon" />
        </div>
      </div>
    </footer>
  )
}

export default Footer