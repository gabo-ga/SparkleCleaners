'use client';

import { CheckCircle2 } from 'lucide-react';
import BookNowButton from '../booknowButton';
import type { Service } from '../../types/index.d.ts';

interface ServiceCardProps {
  services: Service;
}

export default function ServiceCard({ services }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">
        {services.title}
      </h3>
      <p className="text-gray-600 mb-6">
        {services.description}
      </p>
      
      {/* Features Section */}
      <div className="space-y-3 mb-6">
        <h4 className="text-lg font-semibold text-gray-700">Features:</h4>
        {services.features?.map((features) => (
          <div key={features} className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-600">{features}</span>
          </div>
        ))}
      </div>

      {/* Options Section */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-700 mb-3">Available Options:</h4>
        <div className="flex flex-wrap gap-2">
          {services.options?.map((options) => (
            <span 
              key={options}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
            >
              {options}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <BookNowButton variant='quote' />
      </div>
    </div>
  );
}