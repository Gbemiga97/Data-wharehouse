import { navigationData } from "../data"


const Nav = () => {
  return (
    <nav>
        <ul className="flex gap-x-8 ">
            {
                navigationData.map(({name, href}, i) => (
                    <li key={i}>
                        <a href={href}>{name}</a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Nav