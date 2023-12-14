import { Basket } from "./components/Basket"
import { Select } from "./components/Select"
import { useEffect, useState } from "react"
import { Icon } from "../Icon"
import { ProductDetails } from "../ProductDetails"
import './styles.css'
import { URL_REQUEST, api } from "../../lib/axios"
import BasketContext from '../../context/basket-context'
import { List } from "./components/List"

export interface ModifierItem {
  id: string;
  name: string;
  price: number;
}

export interface Modifier {
  id: string;
  name: string;
  price: number;
  items: ModifierItem[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  images: Array<{ id: string, image: string }>;
  quantity: number;
  description?: string;
  image?: string;
  modifiers?: Modifier[];
  modifierItem?: ModifierItem;
}

export interface Section {
  id: string;
  name: string;
  images: Array<{ id: number; image: string; }>;
  items: Product[];
  description?: string;
  image?: string;
}

interface ItemsProps {
  search: string;
}

export function Items({ search }: ItemsProps) {
  const [menu, setMenu] = useState<Section[]>([])
  const [total, setTotal] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [activeOption, setActiveOption] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const [basketProducts, setBasketProducts] = useState<Product[]>([])

  useEffect(() => {
    async function getMenu() {
      const data = await api.get(URL_REQUEST.MENU)

      if (data?.data?.sections?.length) {
        const newSections = data?.data?.sections.map((section: Section) => {
          const items = section.items.map((item: Product) => {
            return { ...item, image: item?.images?.[0].image }
          })
          
          return { ...section, image: section?.images[0].image, items }
        })

        setMenu(newSections)

        if (newSections?.length) setActiveOption(newSections[0].name)
      }
    }

    getMenu()
  }, [])

  useEffect(() => {
    if (basketProducts.length > 0) {
      const sum = basketProducts.reduce((accumulator, product) => {
        return accumulator + (product.price * (product?.quantity || 0))
      }, 0)
      
      setTotal(sum)
    }
  }, [basketProducts])

  function addProductToBasket(item: Product, selectedModifier?: ModifierItem) {
    const index = basketProducts.findIndex(product => product.id === item.id)

    if (index !== -1) {
      const updatedBasketProducts = basketProducts
      const updatedProduct = { ...basketProducts[index], modifierItem: selectedModifier }
      updatedBasketProducts[index] = updatedProduct

      setBasketProducts(updatedBasketProducts)
    } else {
      setBasketProducts(prev => {
        const newProduct = { ...item, modifierItem: selectedModifier }
        const updatedBasketProducts = [...prev, newProduct]

        return updatedBasketProducts
      })
    }

    closeModal()
  }

  function openModal(item: Product) {
    const product = basketProducts.find(product => product.id === item.id)
     
    setSelectedProduct({ ...item, quantity: (product?.quantity || item.quantity || 1) })

    setIsModalOpen(true)
  }

  function closeModal() {
    setSelectedProduct(undefined)

    setIsModalOpen(false)
  }

  function toggleOption(option: string) {
    if (activeOption === option) setActiveOption('')
    else setActiveOption(option)
  }

  // function removeProductFromBasket(productId: string) {
  //   setBasketProducts(prev => prev.filter(product => product.id !== productId))
  // }
  function filteredItems(items: Product[]) {
    if (!search) return items
    
    return items?.filter(item => item.name.toLocaleLowerCase().includes(search) ||
      item.description?.toLocaleLowerCase()?.includes(search)
    )
  }

  return (
    <BasketContext.Provider value={{ basketProducts, setBasketProducts, total, setTotal, subTotal, setSubTotal }}>
      {selectedProduct && (
        <ProductDetails
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          product={selectedProduct}
          addProductToBasket={addProductToBasket}
        />
      )}

      <div className="bg-gray-70 flex gap-6 py-8 px-10 w-full max-md:flex-wrap">
        <div className="bg-white shadow-lg w-full">
          {menu?.length > 0 && <Select sections={menu} activeOption={activeOption} setActiveOption={setActiveOption} />}

          {menu?.length > 0 && (
            <div className="mx-4">
              {menu.map((option: Section) => (
                <section id={option.id} key={option.id}>
                  <h2
                    className="mt-8 mb-3 font-roboto font-medium text-2xl text-gray-870 flex justify-between cursor-pointer"
                    onClick={() => toggleOption(option.name)}
                  >
                    <span>{option.name}</span>

                    <Icon
                      className={`transform transition-transform ${activeOption !== option.name ? 'rotate-180' : ''}`}
                      type="arrow"
                    />
                  </h2>

                  {option?.items?.length > 0 && (
                    <List
                      items={filteredItems(option.items)}
                      hidden={option.name !== activeOption ? 'hidden' : ''}
                      openModal={openModal}
                    />
                  )}
                </section>
              ))}
            </div>
          )}
        </div >

        <Basket />
      </div >
    </BasketContext.Provider>
  )
}