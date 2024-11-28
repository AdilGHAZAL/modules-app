import React from 'react';
import { Link } from 'react-router-dom';

interface Module {
  id: number;
  title: string;
  description: string;
}

interface ModuleItemProps {
  module: Module;
}

const ModuleItem: React.FC<ModuleItemProps> = ({ module }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow">
      <Link to={`/modules/${module.id}`} className="hover:underline">
        <h2 className="text-xl font-semibold">{module.title}</h2>
        <p className="text-gray-600">{module.description}</p>
      </Link>
    </div>
  );
};

export default ModuleItem;
