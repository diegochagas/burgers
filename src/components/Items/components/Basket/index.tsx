import { Icon } from "../../../Icon";

interface ItemProps {
  name: string;
  quantity: number;
  total: number;
  description?: string;
}


export function Basket() {
  const items: ItemProps[] = [
    { name: 'Caipirinha', quantity: 1, total: 13 },
    { name: 'Smash Brooks', quantity: 1, total: 13, description: 'Com 2 carnes' },
  ]

  return (
    <div className="bg-white shadow-lg w-full max-w-xs h-full">
      <div className="bg-gray-70 py-4 px-6">
        <h2 className="font-roboto font-medium text-gray-550 text-2xl">Carrinho</h2>
      </div>

      {items.length > 0 ? (
        <div>
          {items.map(item => (
            <div className="my-2 mx-4 font-roboto" key={item.name}>
              <p className="flex justify-between text-base m-0 p-0 text-gray-870">
                <span>{item.name}</span>
                <strong>R${item.total}</strong>
              </p>
              {item.description && (
                <p className="my-1 text-base mx-0 text-gray-560">
                  {item.description}
                </p>
              )}
              <div className="flex gap-1 p-2">
                <button className="bg-brown-300 rounded-full h-5 w-5 flex justify-center items-center">
                  <Icon type="minus" size={20} color="white" />
                </button>
                {item.quantity}
                <button className="bg-brown-300 rounded-full h-5 w-5 flex justify-center items-center">
                  <Icon type="plus" size={20} color="white" />
                </button>
              </div>
            </div>
          ))}

          <div className="bg-gray-70 p-4">
            <p className="m-4 flex justify-between text-gray-870 text-base">
              <span>Sub total</span>
              <strong>R$22.50</strong>  
            </p>

            <hr className="bg-gray-280" />
            
            <p className="m-4 flex justify-between text-2xl text-gray-870">
              <span>Total:</span>
              <strong>R$22.50</strong>  
            </p>

            <button
              className="flex h-12 py-1 px-6 justify-center items-center gap-2 self-stretch rounded-2.5 text-white bg-brown-300 w-full"
            >
              Checkout now
            </button>
          </div>
        </div>
      ) : (
        <p className="p-6 font-roboto text-base text-gray-550 font-regular">Seu carrinho está vazio</p>
      )}
    </div>
  )
}