import { Modal } from "../Modal";
import './styles.css'
import { useContext, useEffect, useState } from "react";
import { Icon } from "../Icon";
import { priceFormatter } from "../../utils";
import { ModifierItem, Product } from "../Items";
import BasketContext from "../../context/basket-context";

interface ProductDetailsProps {
  isModalOpen: boolean;
  closeModal: () => void;
  product: Product;
  addProductToBasket: (product: Product, selectedModifier?: ModifierItem) => void;
}

export function ProductDetails({ isModalOpen, closeModal, product, addProductToBasket }: ProductDetailsProps) {
  const context = useContext(BasketContext)
  const { basketProducts, setBasketProducts } = context
  const [selectedModifier, setSelectedModifier] = useState<ModifierItem>()

  useEffect(() => {
    if (product?.modifiers) setSelectedModifier(product.modifiers[0].items[0])
  }, [product])

  function renderPrice(product: Product) {
    const price = (product?.modifierItem?.price || product.price)
    const total = price * (product?.quantity || 0)

    return priceFormatter(total)
  }

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

  console.log(product.quantity)

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className="bg-white max-w-lg">
        {product?.image && <img className="h-80 w-full" src={product.image} alt="" />}

        <div className="p-4">
          <h2 className="font-roboto font-bold text-2xl mt-0 mb-2 text-gray-870">
            {product.name}
          </h2>
          <p className="m-0 text-gray-550">{product.description}</p>
        </div>

        {product?.modifiers && product.modifiers.map((modifier, index) => (
          <div key={modifier.id}>
            <div className="py-4 px-6 bg-gray-70 flex flex-col">
              <strong className="font-roboto text-gray-550 text-base">{modifier.name}</strong>
              <span className="font-roboto text-gray-560 text-base">Select 1 option</span>
            </div>

            {modifier.items.map(item => (
              <label className="py-4 px-6 flex justify-between items-center cursor-pointer" key={item.id}>
                <div className="font-roboto flex flex-col">
                  <strong>{item.name}</strong>
                  <span>{priceFormatter(item.price)}</span>
                </div>

                <input
                  className="input-radio"
                  type="radio"
                  name="meat"
                  defaultChecked={index === 0}
                  value={item.price}
                  onClick={() => setSelectedModifier(item)}
                />
              </label>
            ))}
          </div>
        ))}
      </div>

      <div className="bg-gray-70 flex flex-col items-center gap-2.5 self-stretch pt-2 pb-6 px-6">
        <div className="flex items-center gap-4">
          <button
            className={`
              rounded-full
              ${product.quantity < 1 ? 'bg-gray-280' : 'bg-brown-300'}
              ${product.quantity < 1 ? 'cursor-not-allowed' : ''}
            `}
            onClick={removeItem}
          >
            <Icon type="minus" color={product.quantity < 1 ? '#5f5f5f' : 'white'} size={33} />
          </button>
          <span className="text-gray-870 font-semibold text-2xl">{product.quantity}</span>
          <button
            className={`
              rounded-full
              ${product.quantity >= 9 ? 'bg-gray-280' : 'bg-brown-300'}
              ${product.quantity >= 9 ? 'cursor-not-allowed' : ''}
            `}
            onClick={addItem}
          >
            <Icon type="plus" color="white" size={33} />
          </button>
        </div>

        <button
          className="flex h-12 py-1 px-6 justify-center items-center gap-2 self-stretch rounded-2.5 text-white bg-brown-300"
          onClick={() => addProductToBasket(product, selectedModifier)}
        >
          <span>Add to Order</span>
          <span>•</span>
          <span>{renderPrice(product)}</span>
        </button>
      </div>
    </Modal>
  )
}