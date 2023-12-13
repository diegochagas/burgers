import { Modal } from "../Modal";
import './styles.css'
import itemImage from '../../assets/image.jpg'
import { useState } from "react";
import { Icon } from "../Icon";

interface Meat {
  quantity: number;
  value: number;
}

interface ProductDetailsProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export function ProductDetails({ isModalOpen, closeModal }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState<number>(1)
  const isDisabled = quantity <= 0
  const meats: Meat[] = [
    { quantity: 1, value: 33 },
    { quantity: 2, value: 35 },
    { quantity: 3, value: 37 },
  ]

  function removeItem() {
    if (!isDisabled) setQuantity(prev => prev - 1)
  }

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className="bg-white">
        <img className="h-80" src={itemImage} alt="" />

        <div className="m-4">
          <h2 className="font-roboto font-bold text-2xl mt-0 mb-2 text-gray-870">
            Smash Brooks
          </h2>
          <p className="m-0 text-gray-550">This is the content of the modal.</p>
        </div>

        <div className="py-4 px-6 bg-gray-70 flex flex-col">
          <strong className="font-roboto text-gray-550 text-base">Choose your size</strong>
          <span className="font-roboto text-gray-560 text-base">Select 1 option</span>
        </div>

        {meats.map((item, index) => (
          <label className="py-4 px-6 flex justify-between items-center cursor-pointer" key={item.value}>
            <div className="font-roboto flex flex-col">
              
            <strong>{index} meat</strong>
              <span>R$33,00</span>
            </div>
            <input className="input-radio" type="radio" name="meat" value={item.value} />
          </label>
        ))}
      </div>

      <div className="bg-gray-70 flex flex-col items-center gap-2.5 self-stretch pt-2 pb-6 px-6">
        <div className="flex items-center gap-4">
          <button
            className={`
              rounded-full
              ${isDisabled ? 'bg-gray-280' : 'bg-brown-300'}
              ${isDisabled ? 'cursor-not-allowed' : ''}
            `}
            onClick={removeItem}
          >
            <Icon type="minus" color={isDisabled ? '#5f5f5f' : 'white' } size={33} />
          </button>
          <span className="text-gray-870 font-semibold text-2xl">{quantity}</span>
          <button className="bg-brown-300 rounded-full" onClick={() => setQuantity(prev => prev + 1)}>
            <Icon type="plus" color="white" size={33} />
          </button>
        </div>

        <button
          className={`
            flex h-12 py-1 px-6 justify-center items-center gap-2 self-stretch rounded-2.5 text-white
            ${isDisabled ? 'bg-gray-280' : 'bg-brown-300'}
            ${isDisabled ? 'cursor-not-allowed' : ''}
          `}
        >
          <span>Add to Order</span>
          <span>•</span>
          <span>$11.75</span>
        </button>
      </div>
    </Modal>
  )
}