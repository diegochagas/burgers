import { Menu } from './components/Menu'
import './App.css'
import background from './assets/header.jpg'
import { Search } from './components/Search'
import { Items } from './components/Items'

function App() {
  
  return (
    <>
      <Menu />

      <div className="relative top-13">
        <div className="flex justify-center bg-brown-900">
          <img className="h-37 object-cover" src={background} alt="background image of an hamburger" />
        </div>
        
        <div className="flex flex-col items-center bg-gray-250">
          <div className="max-w-5xl w-full">
            <Search />

            <Items />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
