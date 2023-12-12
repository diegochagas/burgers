import { Checkout } from "./components/Checkout"
import { Select } from "./components/Select"
import food from '../../assets/food.jpg'
import { useState } from "react";

export interface OptionProps {
  name: string;
  image: string;
}

export function Items() {
  const items: OptionProps[] = [
    { name: 'Burgers', image: food },
    { name: 'Drinks', image: food },
    { name: 'Desserts', image: food },
  ]
  const [activeOption, setActiveOption] = useState<string>(items[0].name)

  return (
    <div className="bg-gray-70 flex gap-6 py-8 px-10">
      <div className="bg-white shadow-lg">
        <Select items={items} activeOption={activeOption} setActiveOption={setActiveOption} />

        <div>
          <section id={items[0].name}>
            <h2>{items[0].name}</h2>

            <div className={`${items[0].name !== activeOption ? 'hidden' : ''}`}>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index}>Burger {index}</div>
              ))}
            </div>
          </section>

          <section id={items[1].name}>
            <h2>{items[1].name}</h2>

            <div className={`${items[1].name !== activeOption ? 'hidden' : ''}`}>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index}>Drink  {index}</div>
              ))}
            </div>
          </section>

          <section id={items[2].name}>
            <h2>{items[2].name}</h2>

            <div className={`${items[2].name !== activeOption ? 'hidden' : ''}`}>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index}>Dessert {index}</div>
              ))}
            </div>
          </section>
        </div>
      </div >

      <Checkout />
    </div >
  )
}