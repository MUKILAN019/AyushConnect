const mockNamasteData = {
  siddha: [
    {
      id: 'SD001',
      namasteCode: 'SD001',
      description: 'Azhal Keel Vayu (Rheumatoid Arthritis)',
      system: 'Siddha',
      icd11Mappings: [
        {
          code: 'FA20.0',
          display: 'Rheumatoid arthritis',
          equivalence: 'equivalent',
        },
      ],
    },
    {
      id: 'SD002',
      namasteCode: 'SD002',
      description: 'Kalladaippu (Kidney Stone)',
      system: 'Siddha',
      icd11Mappings: [
        {
          code: 'GC80',
          display: 'Calculus of kidney',
          equivalence: 'equivalent',
        },
      ],
    },
    {
      id: 'SD003',
      namasteCode: 'SD003',
      description: 'Mega Noi (Skin Disease)',
      system: 'Siddha',
      icd11Mappings: [
        {
          code: 'EK90',
          display: 'Other specified diseases of the skin',
          equivalence: 'broader',
        },
      ],
    },
  ],
  unani: [
    {
      id: 'UN001',
      namasteCode: 'UN001',
      description: 'Waja-ul-Mafasil (Joint Pain)',
      system: 'Unani',
      icd11Mappings: [
        {
          code: 'FB56',
          display: 'Joint pain',
          equivalence: 'equivalent',
        },
      ],
    },
    {
      id: 'UN002',
      namasteCode: 'UN002',
      description: 'Sauda (Melancholia)',
      system: 'Unani',
      icd11Mappings: [
        {
          code: '6A70',
          display: 'Major depressive disorder',
          equivalence: 'narrower',
        },
      ],
    },
    {
      id: 'UN003',
      namasteCode: 'UN003',
      description: 'Zeequn Nafas (Dyspnea)',
      system: 'Unani',
      icd11Mappings: [
        {
          code: 'MD90.0',
          display: 'Dyspnoea',
          equivalence: 'equivalent',
        },
      ],
    },
  ],
  ayurveda: [
    {
      id: 'AY001',
      namasteCode: 'AY001',
      description: 'Amavata (Rheumatoid Arthritis)',
      system: 'Ayurveda',
      icd11Mappings: [
        {
          code: 'FA20.0',
          display: 'Rheumatoid arthritis',
          equivalence: 'equivalent',
        },
      ],
    },
    {
      id: 'AY002',
      namasteCode: 'AY002',
      description: 'Prameha (Diabetes Mellitus)',
      system: 'Ayurveda',
      icd11Mappings: [
        {
          code: '5A11',
          display: 'Type 1 diabetes mellitus',
          equivalence: 'broader',
        },
      ],
    },
    {
      id: 'AY003',
      namasteCode: 'AY003',
      description: 'Hridroga (Heart Disease)',
      system: 'Ayurveda',
      icd11Mappings: [
        {
          code: 'BD10',
          display: 'Heart disease',
          equivalence: 'broader',
        },
      ],
    },
    {
      id: 'AY004',
      namasteCode: 'AY004',
      description: 'Jwara (Fever)',
      system: 'Ayurveda',
      icd11Mappings: [
        {
          code: 'MG40',
          display: 'Fever of other and unspecified cause',
          equivalence: 'equivalent',
        },
      ],
    },
    {
      id: 'AY005',
      namasteCode: 'AY005',
      description: 'Kasa (Cough)',
      system: 'Ayurveda',
      icd11Mappings: [
        {
          code: 'CA23',
          display: 'Chronic cough',
          equivalence: 'narrower',
        },
      ],
    },
  ],
};

export { mockNamasteData };
