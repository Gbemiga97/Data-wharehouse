import { navigationData } from "../data"


const NavMobile = () => {
  return (
    <nav>
        <ul className="flex flex-col px-6 py-8 gap-y-4">
            {
                navigationData.map(({name, href}, i) => (
                    <li key={i}>
                        <a 
                        className="text-white"
                        href={href}>{name}</a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default NavMobile