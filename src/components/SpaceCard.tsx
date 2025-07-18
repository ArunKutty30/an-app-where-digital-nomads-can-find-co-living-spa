import { Star, Wifi, Coffee, Users } from 'lucide-react';
import type { ColivingSpace } from '../types';

interface SpaceCardProps {
  space: ColivingSpace;
}

export default function SpaceCard({ space }: SpaceCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <img
          src={space.imageUrl}
          alt={space.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm font-medium">
          ${space.price}/{space.currency}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{space.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{space.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{space.city}, {space.country}</p>
        
        <div className="flex gap-3 mb-4">
          {space.amenities.includes('wifi') && (
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Wifi className="h-4 w-4" />
              <span>Fast Wifi</span>
            </div>
          )}
          {space.amenities.includes('coworking') && (
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Coffee className="h-4 w-4" />
              <span>Coworking</span>
            </div>
          )}
          {space.amenities.includes('community') && (
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              <span>Community</span>
            </div>
          )}
        </div>

        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}