import { Sliders } from 'lucide-react';

export default function Filter() {
  return (
    <div className="flex items-center gap-4 py-4 overflow-x-auto">
      <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 bg-white">
        <Sliders className="h-4 w-4" />
        <span>Filters</span>
      </button>
      
      {['Price Range', 'Amenities', 'Room Type', 'Length of Stay'].map((filter) => (
        <button
          key={filter}
          className="px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 bg-white whitespace-nowrap"
        >
          {filter}
        </button>
      ))}
    </div>
  );
}