import { useState } from "react"
import { Icon } from "../Icon"
import './styles.css'

export function Menu() {
  const items = ['Menu', 'Entrar', 'Contato']
  const [active, setActive] = useState<string>(items[0])
  const [toggleClass, setToggleClass] = useState('toggle-hide')

  function handleMenu() {
    if (!toggleClass) setToggleClass('toggle-hide')
    else setToggleClass('')
  }

  return (
    <nav className="bg-brown-300 flex justify-center fixed w-full h-13 z-10">
      <button className="menu-icon absolute right-4 top-3.5" onClick={handleMenu}>
        <Icon type="menu" color="white" />
      </button>
      <div className={`menu-items flex justify-center uppercase text-white font-roboto font-regular w-full ${toggleClass}`}>
        {items.map((item: string) => (
          <div
            key={item}
            className={`flex flex-1 justify-center max-w-xxs text-xl items-center h-full border-b-4 ${active === item ? 'border-white' : 'border-transparent'} cursor-pointer`}
            onClick={() => setActive(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  )
}