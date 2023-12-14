import { Menu } from './components/Menu'
import './App.css'
import { Search } from './components/Search'
import { Items } from './components/Items'
import { useEffect, useState } from 'react'
import { URL_REQUEST, api } from './lib/axios'

function App() {
  const [banner, setBanner] = useState<string | undefined>()
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function getBanner() {
      const data = await api.get(URL_REQUEST.DETAILS)

      setBanner(data?.data?.webSettings?.bannerImage)
    }

    getBanner()
  }, [setBanner])
  
  return (
    <>
      <Menu />

      <div className="relative top-13">
        <div className="flex justify-center bg-brown-900">
          <img className="h-37 object-cover" src={banner} alt="background image of an hamburger" />
        </div>
        
        <div className="flex flex-col items-center bg-gray-250">
          <div className="max-w-5xl w-full">
            <Search value={search} setValue={setSearch} />

            <Items search={search.toLocaleLowerCase()} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
