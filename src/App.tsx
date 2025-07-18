import Navbar from './components/Navbar';
import Filter from './components/Filter';
import SpaceCard from './components/SpaceCard';
import { spaces } from './data/spaces';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find your perfect co-living space
          </h1>
          <p className="text-xl text-gray-600">
            Join a community of digital nomads in beautiful locations worldwide
          </p>
        </div>

        <Filter />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {spaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      </main>
    </div>
  );
}