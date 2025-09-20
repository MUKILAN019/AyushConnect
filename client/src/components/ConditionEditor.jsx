import React, { useState } from 'react';
import { Plus } from 'lucide-react';


const ConditionEditor = ({ mapping }) => {
  const [relationship, setRelationship] = useState(mapping?.icd11Mappings[0]?.equivalence || 'equivalent');
  const [fhirJson, setFhirJson] = useState('');

  const generateFhirJson = () => {
    const systemMap = {
      'Siddha': 'http://namaste.health/siddha',
      'Unani': 'http://namaste.health/unani', 
      'Ayurveda': 'http://namaste.health/ayurveda'
    };
    
    const json = {
      resourceType: 'Condition',
      code: {
        coding: [
          {
            system: systemMap[mapping.system] || 'http://namaste.health',
            code: mapping.namasteCode,
            display: mapping.description,
          },
          {
            system: 'http://id.who.int/icd11/mms',
            code: mapping.icd11Mappings[0].code,
            display: mapping.icd11Mappings[0].display,
          },
        ],
      },
      extension: [
        {
          url: 'http://hl7.org/fhir/StructureDefinition/condition-dueTo',
          valueCodeableConcept: {
            coding: [{
              system: 'http://terminology.hl7.org/CodeSystem/conceptmap-equivalence',
              code: relationship
            }],
          },
        },
        {
          url: 'http://namaste.health/traditional-system',
          valueString: mapping.system
        }
      ],
      meta: {
        profile: ['http://namaste.health/StructureDefinition/TraditionalMedicineCondition']
      }
    };
    setFhirJson(JSON.stringify(json, null, 2));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-blue-600">FHIR Condition Editor</h2>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          mapping.system === 'Siddha' ? 'bg-green-100 text-green-800' :
          mapping.system === 'Unani' ? 'bg-purple-100 text-purple-800' :
          'bg-orange-100 text-orange-800'
        }`}>
          {mapping.system} → ICD-11
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mapping Relationship</label>
          <select
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="equivalent">Equivalent</option>
            <option value="broader">Broader</option>
            <option value="narrower">Narrower</option>
            <option value="relatedto">Related To</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={generateFhirJson}
            className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            <Plus size={16} />
            <span>Generate FHIR JSON</span>
          </button>
        </div>
      </div>
      
      {/* Mapping Summary */}
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h3 className="font-medium text-gray-800 mb-2">Mapping Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Traditional Code:</span>
            <div className="font-medium">{mapping.namasteCode} ({mapping.system})</div>
            <div className="text-gray-600">{mapping.description}</div>
          </div>
          <div>
            <span className="text-gray-600">ICD-11 Code:</span>
            <div className="font-medium">{mapping.icd11Mappings[0].code}</div>
            <div className="text-gray-600">{mapping.icd11Mappings[0].display}</div>
          </div>
        </div>
      </div>
      
      {fhirJson && (
        <div>
          <h3 className="font-medium text-gray-800 mb-2">Generated FHIR Condition Resource</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm max-h-96 border">
            {fhirJson}
          </pre>
        </div>
      )}
      <p className="text-sm text-gray-600 mt-2">
        Live preview of the FHIR Condition resource with traditional medicine extensions.
      </p>
    </div>
  );
};

export default ConditionEditor;