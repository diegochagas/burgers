import { Icon } from "../Icon"

interface SearchProps {
  value: string;
  setValue: (value: string) => void;
}

export function Search({ value, setValue }: SearchProps) {
  return (
    <div className="flex items-center rounded-lg border border-solid border-gray-350 bg-white my-1.5">
      <div className="flex gap-2.5 items-start py-2.5 px-3">
        <Icon type="search" />
      </div>

      <input
        className="flex items-start text-base pt-3.3 pr-3 pb-2.7 w-full outline-none text-gray-850 rounded-lg"
        type="text"
        placeholder="Search menu items"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  )
}