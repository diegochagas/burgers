import { OptionProps } from '../..';

interface SelectProps {
  items: OptionProps[];
  activeOption: string;
  setActiveOption: (option: string) => void;
}

export function Select({ items, activeOption, setActiveOption }: SelectProps) {
  return (
    <div className="flex pt-5 pl-6 pb-4 gap-3 self-stretch">
      {items.map(storie => {
        const isActive = activeOption === storie.name
        return (
          <div
            className={`flex flex-col items-center cursor-pointer border-b-2 ${isActive ? 'border-brown-300' : 'border-transparent'}`}
            key={storie.name}
            onClick={() => setActiveOption(storie.name)}>
            <div
              className={`bg-white p-0.5 rounded-full border-2 ${isActive ? 'border-brown-300' : 'border-transparent'}`}
            >
              <img className="rounded-full " src={storie.image} alt="" />
            </div>

            <span className={`text-gray-870 font-roboto ${isActive ? 'font-bold' : ''} text-base mt-4 mb-2`}>{storie.name}</span>
          </div>
        )
      })}
    </div>
  )
}