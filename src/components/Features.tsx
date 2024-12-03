import React from 'react';
import { Code, Layout, Zap } from 'lucide-react';

export function Features() {
  return (
    <div className="py-12 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to build amazing projects
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Code className="h-8 w-8 text-indigo-600" />}
              title="Modern Development"
              description="Built with React, TypeScript, and Tailwind CSS for a modern development experience."
            />
            <FeatureCard
              icon={<Layout className="h-8 w-8 text-indigo-600" />}
              title="Responsive Design"
              description="Fully responsive layouts that work beautifully on any device or screen size."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-indigo-600" />}
              title="Fast Performance"
              description="Optimized for performance with modern build tools and best practices."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-center text-gray-600">{description}</p>
    </div>
  );
}