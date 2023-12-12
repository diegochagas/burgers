import { useState } from "react"

export function Menu() {
  const items = ['Menu', 'Entrar', 'Contato']
  const [active, setActive] = useState<string>(items[0])

  return (
    <nav className="bg-brown-300 flex justify-center fixed w-full h-13">
      <div className="flex justify-center uppercase text-white font-roboto font-regular w-full">
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