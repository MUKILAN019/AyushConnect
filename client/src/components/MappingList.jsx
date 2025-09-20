import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';


const MappingList = ({ mappings, onSelect }) => {
  return (
    <div className="grid gap-4 mb-8">
      {mappings.map((mapping) => (
        <div
          key={mapping.id}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all cursor-pointer"
          onClick={() => onSelect(mapping)}
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center space-x-3">
              <h3 className="text-lg font-semibold text-blue-600">{mapping.namasteCode}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                mapping.system === 'Siddha' ? 'bg-green-100 text-green-800' :
                mapping.system === 'Unani' ? 'bg-purple-100 text-purple-800' :
                'bg-orange-100 text-orange-800'
              }`}>
                {mapping.system}
              </span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              mapping.icd11Mappings[0].equivalence === 'equivalent' ? 'bg-green-100 text-green-800' : 
              mapping.icd11Mappings[0].equivalence === 'broader' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {mapping.icd11Mappings[0].equivalence}
            </span>
          </div>
            <p className='text-gray-700 mb-4'>{mapping.Tamil_term}</p>
            <p className="text-gray-700 mb-4">{mapping.description}</p>
            <p className='text-gray-700 mb-4'>{mapping.sub_description}</p>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>ICD-11:</span>
            <ArrowRight size={16} />
            <span className="font-medium">{mapping.icd11Mappings[0].code}</span>
            <span className="text-gray-500">({mapping.icd11Mappings[0].display})</span>
            {mapping.icd11Mappings[0].equivalence === 'equivalent' && <CheckCircle size={16} className="text-green-500" />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MappingList;