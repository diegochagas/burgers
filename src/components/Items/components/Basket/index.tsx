import { BasketProduct } from './Product'
import { priceFormatter } from '../../../../utils'
import { useContext } from 'react'
import BasketContext from '../../../../context/basket-context'

export function Basket() {
  const context = useContext(BasketContext)
  const { basketProducts, total, subTotal } = context

  return (
    <div className="bg-white shadow-lg w-full max-w-xs h-full">
      <div className="bg-gray-70 py-4 px-6">
        <h2 className="font-roboto font-medium text-gray-550 text-2xl">Carrinho</h2>
      </div>

      {basketProducts?.length > 0 ? (
        <>
          {basketProducts.map(product => <BasketProduct key={product.id} product={product} />)}

          <div className="bg-gray-70 p-4">
            <p className="m-4 flex justify-between text-gray-870 text-base">
              <span>Sub total</span>
              <strong>{priceFormatter(subTotal)}</strong>  
            </p>

            <hr className="bg-gray-280" />
            
            <p className="m-4 flex justify-between text-2xl text-gray-870">
              <span>Total:</span>
              <strong>{priceFormatter(total)}</strong>  
            </p>

            <button
              className="flex h-12 py-1 px-6 justify-center items-center gap-2 self-stretch rounded-2.5 text-white bg-brown-300 w-full"
            >
              Checkout now
            </button>
          </div>
        </>
      ) : (
        <p className="p-6 font-roboto text-base text-gray-550 font-regular">Seu carrinho está vazio</p>
      )}
    </div>
  )
}