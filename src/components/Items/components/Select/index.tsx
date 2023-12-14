import { Section } from "../..";

interface SelectProps {
  sections: Section[];
  activeOption: string;
  setActiveOption: (option: string) => void;
}

export function Select({ sections, activeOption, setActiveOption }: SelectProps) {
  return (
    <div className="flex pt-5 pl-4 pb-6 gap-3 self-stretch">
      {sections.map(section => {
        const isActive = activeOption === section.name
        return (
          <div
            className={`flex flex-col items-center cursor-pointer border-b-2 ${isActive ? 'border-brown-300' : 'border-transparent'}`}
            key={section.name}
            onClick={() => setActiveOption(section.name)}>
            <div
              className={`bg-white p-0.5 rounded-full border-2 ${isActive ? 'border-brown-300' : 'border-transparent'}`}
            >
              <img className="rounded-full h-17 w-17 object-cover" src={section.image} alt="" />
            </div>

            <span className={`text-gray-870 font-roboto ${isActive ? 'font-bold' : ''} text-base mt-4 mb-2`}>{section.name}</span>
          </div>
        )
      })}
    </div>
  )
}