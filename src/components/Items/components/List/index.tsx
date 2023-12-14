import { useContext } from "react";
import { Product } from "../.."
import BasketContext from "../../../../context/basket-context"
import { priceFormatter } from "../../../../utils";

interface ListProps {
  items: Product[];
  hidden: string;
  openModal: (product: Product) => void;
}

export function List({ items, hidden, openModal }: ListProps) {
  const context = useContext(BasketContext)
  const { basketProducts } = context

  function getQuantity(product: Product) {
    const index = basketProducts.findIndex(item => item.id === product.id)

    if (index !== -1) return basketProducts[index].quantity
  }

  return (
    <div className={hidden}>
      {items.map((item: Product) => {
        const quantity = getQuantity(item)

        return (
          <div
            key={item.id}
            className="py-4 flex gap-4 cursor-pointer justify-between"
            onClick={() => openModal(item)}
          >
            <div>
              <h3 className="font-roboto font-medium text-base text-gray-870 flex items-center">
                {quantity && (
                  <span
                    className="bg-brown-300 text-white text-sm font-medium px-1.5 rounded-md mr-2"
                  >
                    {quantity}
                  </span>
                )}

                {item.name}
              </h3>
              <p className="food-description font-roboto font-light text-base text-gray-550 overflow-hidden whitespace-nowrap text-ellipsis">
                {item.description}
              </p>
              <span className="font-roboto font-medium text-base text-gray-550">{priceFormatter(item.price)}</span>
            </div>

            {item?.images?.length > 0 && <img className="food-image h-21" src={item.images[0].image} alt="Item image" />}
          </div>
        )
      })}
    </div>
  )
}