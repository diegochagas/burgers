import { useContext } from "react";
import { Product } from "../../..";
import { priceFormatter } from "../../../../../utils";
import { Icon } from "../../../../Icon";
import BasketContext from "../../../../../context/basket-context";

interface BasketProductProps {
  product: Product;
}

export function BasketProduct({ product }: BasketProductProps) {
  const context = useContext(BasketContext)
  const { basketProducts, setBasketProducts } = context

  function updateQuantity(quantity: number) {
    const index = basketProducts.findIndex(item => item.id === product.id)

    const updatedProduct = product
    updatedProduct.quantity = quantity

    const updatedBasketProducts = basketProducts
    updatedBasketProducts[index] = updatedProduct
    setBasketProducts(updatedBasketProducts)
  }

  function addItem() {
    if (product.quantity < 9) updateQuantity(product.quantity + 1)
  }
  
  function removeItem() {
    if (product.quantity > 1) updateQuantity(product.quantity - 1)
  }

  function renderPrice(product: Product) {
    const price = (product?.modifierItem?.price || product.price)
    const total = price * (product?.quantity || 0)

    return priceFormatter(total)
  }

  return (
    <div className="my-2 mx-4 font-roboto" key={product.name}>
      <p className="flex justify-between text-base m-0 p-0 text-gray-870">
        <span>{product.name}</span>
        <strong>{renderPrice(product)}</strong>
      </p>
      {product.modifierItem && (
        <p className="my-1 text-base mx-0 text-gray-560">
          {product.modifierItem.name}
        </p>
      )}
      <div className="flex gap-1 p-2">
        <button
          className="bg-brown-300 rounded-full h-5 w-5 flex justify-center items-center"
          onClick={removeItem}
        >
          <Icon type="minus" size={20} color="white" />
        </button>
        
        <span className="mx-1">{product.quantity}</span>
        
        <button
          className="bg-brown-300 rounded-full h-5 w-5 flex justify-center items-center"
          onClick={addItem}
        >
          <Icon type="plus" size={20} color="white" />
        </button>
      </div>
    </div>
  )
}