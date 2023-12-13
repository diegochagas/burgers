import { Basket } from "./components/Basket"
import { Select } from "./components/Select"
import food from '../../assets/food.jpg'
import itemImage from '../../assets/image.jpg'
import { useState } from "react"
import { Icon } from "../Icon"
import { ProductDetails } from "../ProductDetails"
import './styles.css'
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ProductDetails isModalOpen={isModalOpen} closeModal={closeModal} />

      <div className="bg-gray-70 flex gap-6 py-8 px-10 w-full max-md:flex-wrap">
        <div className="bg-white shadow-lg w-full">
          <Select items={items} activeOption={activeOption} setActiveOption={setActiveOption} />

          <div className="mx-4">
            {items.map(item => (
              <section id={item.name} key={item.name}>
                <h2 className="mt-8 mb-3 font-roboto font-medium text-2xl text-gray-870 flex justify-between">
                  <span>{item.name}</span>

                  <Icon className={`transform transition-transform ${activeOption !== item.name ? 'rotate-180' : ''}`} type="arrow" />
                </h2>

                <div className={`${item.name !== activeOption ? 'hidden' : ''}`}>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="py-4 flex gap-4 cursor-pointer justify-between" onClick={() => openModal()}>
                      <div>
                        <h3 className="font-roboto font-medium text-base text-gray-870">Burger {index}</h3>
                        <p className="food-description font-roboto font-light text-base text-gray-550 overflow-hidden whitespace-nowrap text-ellipsis">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sapiente? Incidunt natus accusantium voluptas dignissimos provident deserunt, eaque aperiam voluptatibus nostrum neque labore architecto quasi nam, maiores dolores autem laudantium?
                        </p>
                        <span className="font-roboto font-medium text-base text-gray-550">R$33,00</span>
                      </div>
                      <img className="food-image h-21" src={itemImage} alt="Item image" />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div >

        <Basket />
      </div >
    </>
  )
}