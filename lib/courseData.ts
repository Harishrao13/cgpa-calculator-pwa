interface Course {
  deptCode: string;
  courseCode: string;
  courseTitle: string;
  courseCredits: number;
  cdcList: string[];
  delList: string[];
}

const coursesData: Course[] = [
  {
    'deptCode': 'AN',
    'courseCode': 'F311',
    'courseTitle': 'Principles of Aerodynamics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'AN',
    'courseCode': 'F312',
    'courseTitle': 'Aircraft Propulsion',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'AN',
    'courseCode': 'F313',
    'courseTitle': 'Flight Mechanics and Controls',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'AN',
    'courseCode': 'F314',
    'courseTitle': 'Introduction to Flight',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'AN',
    'courseCode': 'F315',
    'courseTitle': 'Aircraft Structures',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F110',
    'courseTitle': 'Biology laboratory',
    'courseCredits': 1,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F111',
    'courseTitle': 'General Biology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F201',
    'courseTitle': 'Introductory Biology',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F211',
    'courseTitle': 'Biological Chemistry',
    'courseCredits': 3,
    'cdcList': ['B1'],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F212',
    'courseTitle': 'Microbiology',
    'courseCredits': 4,
    'cdcList': ['B1'],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F213',
    'courseTitle': 'Cell Biology',
    'courseCredits': 3,
    'cdcList': ['B1'],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F214',
    'courseTitle': ' Integrated Biology',
    'courseCredits': 3,
    'cdcList': ['B1'],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F215',
    'courseTitle': 'Biophysics',
    'courseCredits': 3,
    'cdcList': ['B1'],
    'delList': ['B5']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F216',
    'courseTitle': 'Water,Sanitation and Solid Waste Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F217',
    'courseTitle': 'Laboratory for Water,Sanitation and Solid waste Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F231',
    'courseTitle': 'Biology Project Laboratory',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F241',
    'courseTitle': 'Ecology and Environmental Sciences',
    'courseCredits': 3,
    'cdcList': ['B1'],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F242',
    'courseTitle': 'Introduction to Bioinformatics',
    'courseCredits': 3,
    'cdcList': ['B1'],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F243',
    'courseTitle': 'Genetics',
    'courseCredits': 3,
    'cdcList': ['B1'],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F244',
    'courseTitle': 'Instrumental Methods of Analysis',
    'courseCredits': 4,
    'cdcList': ['B1'],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F311',
    'courseTitle': 'Recombinant DNA Technology',
    'courseCredits': 3,
    'cdcList': ['B1'],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F312',
    'courseTitle': 'Plant Physiology',
    'courseCredits': 3,
    'cdcList': ['B1'],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F313',
    'courseTitle': 'Animal Physiology',
    'courseCredits': 3,
    'cdcList': ['B1'],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F314',
    'courseTitle': 'Conservation Biology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F315',
    'courseTitle': 'Applied Nutrition and Nutraceutisuitable case-studies',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F341',
    'courseTitle': 'Developmental Biology',
    'courseCredits': 3,
    'cdcList': ['B1'],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F342',
    'courseTitle': 'Immunology',
    'courseCredits': 3,
    'cdcList': ['B1'],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F352',
    'courseTitle': 'Cell and Tissue Culture Technology',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F411',
    'courseTitle': 'Laboratory',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F413',
    'courseTitle': 'Molecular Biology of Cell',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F417',
    'courseTitle': 'Biomolecular Modelling',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F418',
    'courseTitle': 'Genetic Engineering Techniques',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F419',
    'courseTitle': 'Molecular Evolution',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F421',
    'courseTitle': 'Enzymology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F431',
    'courseTitle': 'Reproductive Physiology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F441',
    'courseTitle': 'Biochemical Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F451',
    'courseTitle': 'Bioprocess Technology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'F491',
    'courseTitle': 'Special Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G512',
    'courseTitle': 'Molecular Mechanism of Gene Expression',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G513',
    'courseTitle': 'Microbial and Fermentation Technology',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G515',
    'courseTitle': 'Stem Cell and Regenerative Biology',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G522',
    'courseTitle': 'Interferon Technology',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G523',
    'courseTitle': 'Advanced and Applied Microbiology',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G524',
    'courseTitle': 'Animal Cell Technology',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G525',
    'courseTitle': 'Environmental Biotechnology & Waste Management',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G526',
    'courseTitle': 'Cancer Biology',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G544',
    'courseTitle': 'Bioremediation and Biometallurgy',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G545',
    'courseTitle': 'Molecular Parasitology and Vector Biology',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G561',
    'courseTitle': 'Advances in Recombinant DNA Technology',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G570',
    'courseTitle': 'Recent Developments in Biology',
    'courseCredits': 1,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G612',
    'courseTitle': 'Human Genetics',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G631',
    'courseTitle': 'Membrane and Liposome Technology',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G632',
    'courseTitle': 'Transgenic Technology',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G642',
    'courseTitle': 'Experimental Techniques',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G643',
    'courseTitle': 'Plant Biotechnology',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G651',
    'courseTitle': 'Protein and Enzyme Bioengineering',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G661',
    'courseTitle': 'Gene Toxicology',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIO',
    'courseCode': 'G671',
    'courseTitle': 'Bioconversion Technology',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F211',
    'courseTitle': 'Biological Chemistry',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F212',
    'courseTitle': 'Microbiology',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F213',
    'courseTitle': 'Cell Biology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F215',
    'courseTitle': 'Biophysics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F241',
    'courseTitle': 'Genetic Engineering Techniques',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F242',
    'courseTitle': 'Introduction to Bioinformatics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F243',
    'courseTitle': 'Genetics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F244',
    'courseTitle': 'Instrumental Methods of Analysis',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F245',
    'courseTitle': 'Introduction to Environmental Biotechnology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F311',
    'courseTitle': 'Recombinant DNA Technology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F314',
    'courseTitle': 'Industrial Microbiology and Bio process Engineering',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F342',
    'courseTitle': 'Immunology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F343',
    'courseTitle': 'Experiments in Biotechnology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F344',
    'courseTitle': 'Downstream Processing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F345',
    'courseTitle': 'Proteomics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F346',
    'courseTitle': 'Genomics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F347',
    'courseTitle': 'Immunotechnology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F352',
    'courseTitle': 'Cell and Tissue Culture  Technology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F413',
    'courseTitle': 'Molecular Biology of the Cell',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F416',
    'courseTitle': 'Introduction to Pharmaceutical Biotechnology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F417',
    'courseTitle': 'Biomolecular Modeling',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F420',
    'courseTitle': 'Introduction to Plant Biotechnology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F422',
    'courseTitle': 'Nanobiotechnology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F423',
    'courseTitle': 'Drug design and delivery',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BIOT',
    'courseCode': 'F424',
    'courseTitle': 'Food Biotechnology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F110',
    'courseTitle': 'Engineering Graphics',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F111',
    'courseTitle': 'Thermodynamics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F112',
    'courseTitle': 'Technical Report Writing',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F113',
    'courseTitle': 'General Mathematics I',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F114',
    'courseTitle': 'General Mathematics II',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F201',
    'courseTitle': 'Material Science and Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F211',
    'courseTitle': 'Introduction to IPR',
    'courseCredits': 1,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F212',
    'courseTitle': 'Introduction to Human Rights',
    'courseCredits': 1,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F213',
    'courseTitle': 'Introduction to Environmental Studies',
    'courseCredits': 1,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F214',
    'courseTitle': 'Science, Technology and Modernity',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F215',
    'courseTitle':
        'Applications of Bio-Medical Instrumentation Techniques in Healthcare',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F217',
    'courseTitle': 'Environment, Development and Climate Change',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F218',
    'courseTitle': 'General Mathematics III',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F219',
    'courseTitle': 'Process Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F221',
    'courseTitle': 'Practice School I',
    'courseCredits': 5,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F225',
    'courseTitle': 'Environmental Studies',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F226',
    'courseTitle': 'Soft Skills for Professionals',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F231',
    'courseTitle': 'Practice School I',
    'courseCredits': 5,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F232',
    'courseTitle': 'Foundations of Data Structures and Algorithms',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F241',
    'courseTitle': 'Practice School I',
    'courseCredits': 5,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F311',
    'courseTitle': 'Image Processing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F312',
    'courseTitle': 'Neural Networks and Fuzzy Logic',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7', 'A3', 'A8']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F313',
    'courseTitle':
        'Multicriterion Decision Making in Engineering and Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F314',
    'courseTitle': 'Game Theory and Its Application',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3', 'B4']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F315',
    'courseTitle': 'Introduction to Cognitive Neuroscience',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F316',
    'courseTitle': 'Nonlinear Dynamics and Chaos',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F317',
    'courseTitle': 'Theoretical Neuroscience',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F319',
    'courseTitle': 'Negotiation Skills and Techniques',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F320',
    'courseTitle': 'Managerial Skills',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F321',
    'courseTitle': 'Legal and Economic Environment of Business',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F322',
    'courseTitle': 'Venture Team Development and  Organization',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F323',
    'courseTitle': 'Venture Finance',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F324',
    'courseTitle': 'Strategy for Entrepreneurs',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F325',
    'courseTitle': 'New Product and Service Design',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F326',
    'courseTitle': 'Design Thinking for Innovation & Entrepreneurship',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F327',
    'courseTitle': 'AI for Robotics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F331',
    'courseTitle': 'Quantum Information and Computation',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7', 'B5']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F333',
    'courseTitle': 'Project on Organisational Aspects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F334',
    'courseTitle': 'Project on Organisational Aspects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F343',
    'courseTitle': 'Fuzzy Logic and Applications',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7', 'B4']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F345',
    'courseTitle': 'Information Law and Cyber Law',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F351',
    'courseTitle': 'Nonlinear Dynamics and Chaos',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F364',
    'courseTitle': 'Human Computer Interaction',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F372',
    'courseTitle': 'Data Communications and Networks',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F381',
    'courseTitle': 'TIC Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F382',
    'courseTitle': 'Reading Course',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F383',
    'courseTitle': 'TIC Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F385',
    'courseTitle': 'Introduction to Gender Studies',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F386',
    'courseTitle': 'Quantum Information and Computation',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F398',
    'courseTitle': 'Creative Multimedia',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F399',
    'courseTitle': 'Humanistic Theories of  Science and Technology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F407',
    'courseTitle': 'Selected Readings',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F412',
    'courseTitle': 'Practice School II',
    'courseCredits': 20,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F413',
    'courseTitle': 'Practice School II',
    'courseCredits': 20,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F414',
    'courseTitle': 'Introduction to Bioinformatics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F415',
    'courseTitle': 'Introduction to MEMS',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['AA', 'A4', 'A1', 'A3', 'A8']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F416',
    'courseTitle': 'Introduction to Nanoscience',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1', 'B5']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F417',
    'courseTitle': 'Microfluidics and Its Application',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1', 'B5']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F418',
    'courseTitle': 'Introduction to Biomedical Engineering',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F419',
    'courseTitle': 'Management of Cross-cultural Engineering Teams',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F421',
    'courseTitle': ' Thesis',
    'courseCredits': 16,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F422',
    'courseTitle': ' Thesis',
    'courseCredits': 16,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F423',
    'courseTitle': ' Thesis',
    'courseCredits': 9,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F424',
    'courseTitle': ' Thesis',
    'courseCredits': 9,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F427',
    'courseTitle': 'Digital Marketing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F428',
    'courseTitle': 'Essentials of Strategic Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F429',
    'courseTitle': 'Nanotechnology for Renewable Energy and Environment',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F430',
    'courseTitle': 'Renewable Energy Laboratory',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F431',
    'courseTitle': 'Flexible Manufacturing Systems',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F433',
    'courseTitle': 'Supply Chain Analytics',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F437',
    'courseTitle': 'Technical Communication',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F441',
    'courseTitle': 'Robotics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F442',
    'courseTitle': 'Remote Sensing and Image Processing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F444',
    'courseTitle': 'Artificial Intelligence',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F445',
    'courseTitle': 'Neural Networks and Applications',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F446',
    'courseTitle': 'Pattern Recognition',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F447',
    'courseTitle': 'Multimedia Computing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F448',
    'courseTitle': 'Retail Management Systems',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F449',
    'courseTitle': 'Financial Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F452',
    'courseTitle': 'Blockchain Technology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F454',
    'courseTitle': 'Bio inspired Intel Algorithms and Applications',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F461',
    'courseTitle': 'Software Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F462',
    'courseTitle': 'Renewable Energy',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F463',
    'courseTitle': 'Cryptography',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A7', 'B4']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F464',
    'courseTitle': 'Machine Learning',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F465',
    'courseTitle': 'Enterprise Computing',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F466',
    'courseTitle': 'Service Oriented Computing',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F467',
    'courseTitle': 'Bioethics and Biosafety',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F468',
    'courseTitle': 'New Venture Creation',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F469',
    'courseTitle': 'Financing Infrastructure Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F482',
    'courseTitle': 'Creating and Leading Entrepreneurial Organizations',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F488',
    'courseTitle': 'Services Management Systems',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F489',
    'courseTitle': 'Enterprise Resource Planning',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F493',
    'courseTitle': 'Business Analysis and Valuation',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'BITS',
    'courseCode': 'F494',
    'courseTitle': 'Environmental Impact Assessment',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F211',
    'courseTitle': 'Mechanics of Solids',
    'courseCredits': 3,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F212',
    'courseTitle': 'Transport Phenomena',
    'courseCredits': 3,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F213',
    'courseTitle': 'Surveying',
    'courseCredits': 4,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': ' F214',
    'courseTitle': ' Construction Materials',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F230',
    'courseTitle': ' Civil Engineering Materials',
    'courseCredits': 4,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F231',
    'courseTitle': 'Fluid Mechanics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F241',
    'courseTitle': 'Analysis of Structures',
    'courseCredits': 3,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F242',
    'courseTitle': 'Construction Planning and Technology',
    'courseCredits': 3,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F243',
    'courseTitle': 'Soil Mechanics',
    'courseCredits': 4,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F244',
    'courseTitle': 'Highway Engineering',
    'courseCredits': 4,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F311',
    'courseTitle': 'Design of Concrete Structures',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F312',
    'courseTitle': 'Hydraulics Engineering',
    'courseCredits': 4,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F313',
    'courseTitle': 'Foundation Engineering',
    'courseCredits': 3,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F320',
    'courseTitle': 'Design of Reinforced Concrete Structures',
    'courseCredits': 3,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F321',
    'courseTitle': 'Engineering Hydrology',
    'courseCredits': 3,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F323',
    'courseTitle': 'Introduction  to Environmental Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F324',
    'courseTitle': 'Numerical Analysis',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F325',
    'courseTitle': 'Fundamentals of Rock Mechanics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F341',
    'courseTitle': 'Hydrology & Water Resources Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F342',
    'courseTitle': 'Water & Waste Water Treatment',
    'courseCredits': 3,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F343',
    'courseTitle': 'Design of Steel Structures',
    'courseCredits': 3,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F345',
    'courseTitle': 'Computational Geomechanics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F411',
    'courseTitle': 'Operation Research for Engineers',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F412',
    'courseTitle': 'Disaster Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F413',
    'courseTitle': 'Advanced Structural Design',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F414',
    'courseTitle': 'Introduction to Environmental Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F415',
    'courseTitle': 'Design of Prestressed Concrete Structure',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F416',
    'courseTitle': 'Computer Applications in Civil Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F417',
    'courseTitle':
        'Applications of Artificial Intelligence in Civil Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F419',
    'courseTitle': 'Geotechnical Earthquake Engineering and Machine Foundation',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F420',
    'courseTitle': 'Introduction to Bridge Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F421',
    'courseTitle': 'Analysis and Design of FRP  Reinforced Concrete Structures',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F422',
    'courseTitle': 'Urban Hydrology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F423',
    'courseTitle': 'Green Buildings and Energy Conservation',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F425',
    'courseTitle': 'Airport, Railways and Waterways',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F426',
    'courseTitle': 'Geosynthetics and  Reinforced Soil Structure',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F427',
    'courseTitle': 'System Modeling and Analysis',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F428',
    'courseTitle': 'Earthquake Resistant Design and Construction',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F429',
    'courseTitle': 'Design of Foundation Systems',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F430',
    'courseTitle': 'Design of Advanced Concrete Structures',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F431',
    'courseTitle': 'Principles of Geographical Information Systems',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F432',
    'courseTitle': 'Structural Dynamics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F433',
    'courseTitle': 'Remote Sensing and Image Processing',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F434',
    'courseTitle': 'Environmental Impact Assessment',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F435',
    'courseTitle': 'Introduction to Finite Element Methods',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CE',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F211',
    'courseTitle': 'Chemical Process Calculations',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F212',
    'courseTitle': 'Fluid Mechanics',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F213',
    'courseTitle': 'Chemical Engineering Thermodynamics',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F214',
    'courseTitle': 'Engineering Chemistry',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F241',
    'courseTitle': 'Heat Transfer',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F242',
    'courseTitle': 'Numerical Methods for Chemical Engineers',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F243',
    'courseTitle': 'Material Science and Engineering',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F244',
    'courseTitle': 'Separation Processes I',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F311',
    'courseTitle': 'Kinetics and Reactor Design',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F312',
    'courseTitle': 'Chemical Engineering Lab I',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F313',
    'courseTitle': 'Separation Processes II',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F314',
    'courseTitle': 'Process Design Principles I',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F341',
    'courseTitle': 'Chemical Engineering Laboratory II',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F342',
    'courseTitle': 'Process Dynamics and Control',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F343',
    'courseTitle': 'Process Design Principles II',
    'courseCredits': 3,
    'cdcList': ['A1'],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F411',
    'courseTitle': 'Environmental Pollution Control',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F412',
    'courseTitle': 'Process Equipment Design',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F413',
    'courseTitle': 'Process Plant Safety',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F414',
    'courseTitle': 'Transport Phenomena',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F415',
    'courseTitle': 'Molecular and Statistical Thermodynamics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F416',
    'courseTitle': 'Process Plant Design Project I',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F417',
    'courseTitle': 'Process Plant Design Project II',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F418',
    'courseTitle': 'Modelling and Simulation in Chemical Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F419',
    'courseTitle': 'Chemical Process Technology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F421',
    'courseTitle': 'Bio-chemical Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F422',
    'courseTitle': 'Petroleum Refining Technology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F423',
    'courseTitle': 'Membrane Science and Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F424',
    'courseTitle': 'Rheology of complex fluids',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F433',
    'courseTitle': 'Corrosion Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F471',
    'courseTitle': 'Advanced Process Control',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F497',
    'courseTitle': 'Atomic and Molecular Simulations',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'F498',
    'courseTitle': 'Colloids and Interface Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G511',
    'courseTitle': 'Fluidization Engineering',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G512',
    'courseTitle': 'Petroleum Refining and Petrochemicals',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G513',
    'courseTitle': 'Environmental Management Systems',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G522',
    'courseTitle': 'Polymer Technology',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G523',
    'courseTitle': 'Mathematical Methods in Chemical Engineering',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G524',
    'courseTitle': 'Introduction to Multiphase flow',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G526',
    'courseTitle': 'Nuclear Engineering',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G526',
    'courseTitle': 'Nuclear Engineering',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G526',
    'courseTitle': 'Nuclear Engineering',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G527',
    'courseTitle': 'Energy Conservation and Management',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G528',
    'courseTitle': 'Introduction to Nanoscience & Technology',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G529',
    'courseTitle': 'Pulp & Paper Technology',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G532',
    'courseTitle': 'Alternate Energy Resources',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G533',
    'courseTitle': 'Petroleum Product Characterization',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G551',
    'courseTitle': 'Advanced Separation Technology',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G552',
    'courseTitle': 'Advanced Transport Phenomena',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G554',
    'courseTitle': 'Computational Fluid Dynamics',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G556',
    'courseTitle': 'Electrochemical Engineering',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G557',
    'courseTitle': 'Energy Systems Engineering',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G558',
    'courseTitle': 'Chemical Process Optimization',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G568',
    'courseTitle': 'Modeling and Simulation in Petroleum Refining',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G613',
    'courseTitle': 'Advanced Mass Transfer',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G614',
    'courseTitle': 'Advanced Heat Transfer',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G616',
    'courseTitle': 'Petroleum Reservoir Engineering',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G617',
    'courseTitle': 'Petroleum Refinery Engineering',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G618',
    'courseTitle': 'Petroleum Downstream Processing',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G619',
    'courseTitle': 'Process Intensification',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G620',
    'courseTitle': 'Energy Integration Analysis',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G622',
    'courseTitle': 'Advanced Chemical Engineering Thermodynamics',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHE',
    'courseCode': 'G641',
    'courseTitle': 'Reaction Engineering',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A1']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F110',
    'courseTitle': 'Chemistry Laboratory',
    'courseCredits': 1,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F111',
    'courseTitle': 'General Chemistry',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F211',
    'courseTitle': 'Physical Chemistry I',
    'courseCredits': 3,
    'cdcList': ['B2'],
    'delList': []
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F212',
    'courseTitle': 'Organic Chemistry I',
    'courseCredits': 3,
    'cdcList': ['B2'],
    'delList': ['B1']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F213',
    'courseTitle': 'Physical Chemistry II',
    'courseCredits': 3,
    'cdcList': ['B2'],
    'delList': ['B1']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F214',
    'courseTitle': 'Inorganic Chemistry I',
    'courseCredits': 3,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F223',
    'courseTitle': 'Colloid and Surface Chemistry',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F241',
    'courseTitle': 'Inorganic Chemistry II',
    'courseCredits': 3,
    'cdcList': ['B2'],
    'delList': []
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F242',
    'courseTitle': 'Chemical Experimentation I',
    'courseCredits': 3,
    'cdcList': ['B2'],
    'delList': []
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F243',
    'courseTitle': 'Organic Chemistry II',
    'courseCredits': 3,
    'cdcList': ['B2'],
    'delList': []
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F244',
    'courseTitle': 'Physical Chemistry III',
    'courseCredits': 3,
    'cdcList': ['B2'],
    'delList': []
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B1']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F311',
    'courseTitle': 'Organic Chemistry III',
    'courseCredits': 3,
    'cdcList': ['B2'],
    'delList': []
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F312',
    'courseTitle': 'Physical Chemistry IV',
    'courseCredits': 3,
    'cdcList': ['B2'],
    'delList': []
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F313',
    'courseTitle': 'Instrumental Methods of Analysis',
    'courseCredits': 4,
    'cdcList': ['B2'],
    'delList': []
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F320',
    'courseTitle': 'Introductory Computational Chemistry Laboratory',
    'courseCredits': 2,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F323',
    'courseTitle': 'Biophysical Chemistry',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F324',
    'courseTitle': 'Numerical Methods in Chemistry',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F325',
    'courseTitle': 'Polymer Chemistry',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A1', 'B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F326',
    'courseTitle': 'Solid State Chemistry',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F327',
    'courseTitle': 'Electrochemistry: Fundamentals and Applications',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F328',
    'courseTitle': 'Supramolecular Chemistry',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F329',
    'courseTitle': 'Analytical Chemistry',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F330',
    'courseTitle': 'Photophysical Chemistry',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F333',
    'courseTitle': 'Chemistry of Materials',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F334',
    'courseTitle': 'Magnetic Resonance',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F335',
    'courseTitle': 'Organic Chemistry and Drug Design',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F336',
    'courseTitle': 'Nanochemistry',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F337',
    'courseTitle': 'Green Chemistry and Catalysis',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F341',
    'courseTitle': 'Chemical Experimentation II',
    'courseCredits': 4,
    'cdcList': ['A2'],
    'delList': []
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F342',
    'courseTitle': 'Organic Chemistry IV',
    'courseCredits': 3,
    'cdcList': ['B2'],
    'delList': []
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F343',
    'courseTitle': 'Inorganic Chemistry III',
    'courseCredits': 3,
    'cdcList': ['B2'],
    'delList': []
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F412',
    'courseTitle': 'Photochemistry and Laser Spectroscopy',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F413',
    'courseTitle': 'Electron Correlation in Atoms and Molecules',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F414',
    'courseTitle': 'Bio and Chemical Sensors',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F415',
    'courseTitle': 'Frontiers in Organic Synthesis',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F422',
    'courseTitle': 'Statistical Thermodynamics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F430',
    'courseTitle': 'Atmospheric Chemistry',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F431',
    'courseTitle': 'Sustainable Chemistry using Renewables',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CHEM',
    'courseCode': 'G521',
    'courseTitle': 'Environmental Chemistry',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['B2']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F111',
    'courseTitle': 'Computer Programming',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F211',
    'courseTitle': 'Data Structures & Algorithms',
    'courseCredits': 4,
    'cdcList': ['A7'],
    'delList': ['B4']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F212',
    'courseTitle': 'Database Systems',
    'courseCredits': 4,
    'cdcList': ['A7'],
    'delList': []
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F213',
    'courseTitle': 'Object Oriented Programming',
    'courseCredits': 4,
    'cdcList': ['A7'],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F214',
    'courseTitle': 'Logic in Computer Science',
    'courseCredits': 3,
    'cdcList': ['A7'],
    'delList': []
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F215',
    'courseTitle': 'Digital Design',
    'courseCredits': 4,
    'cdcList': ['A7'],
    'delList': []
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F222',
    'courseTitle': 'Discrete structures for Computer Science',
    'courseCredits': 3,
    'cdcList': ['A7'],
    'delList': []
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F241',
    'courseTitle': 'Microprocessors & Interfacing',
    'courseCredits': 4,
    'cdcList': ['A7'],
    'delList': []
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F301',
    'courseTitle': 'Principles of Programming Languages',
    'courseCredits': 2,
    'cdcList': ['A7'],
    'delList': []
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F303',
    'courseTitle': 'Computer Networks',
    'courseCredits': 4,
    'cdcList': ['A7'],
    'delList': []
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F314',
    'courseTitle': 'Software Development for Portable Devices',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F315',
    'courseTitle': 'Information and Communication Tech and Dev',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F317',
    'courseTitle': 'Reinforcement Learning',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F320',
    'courseTitle': ' Foundations of Data Science',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F342',
    'courseTitle': 'Computer Architecture',
    'courseCredits': 4,
    'cdcList': ['A7'],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F351',
    'courseTitle': 'Theory of Computation',
    'courseCredits': 3,
    'cdcList': ['A7'],
    'delList': []
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F363',
    'courseTitle': 'Compiler Construction',
    'courseCredits': 3,
    'cdcList': ['A7'],
    'delList': []
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F364',
    'courseTitle': 'Design and Analysis of Algorithms',
    'courseCredits': 3,
    'cdcList': ['A7'],
    'delList': ['B4']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F372',
    'courseTitle': 'Operating Systems',
    'courseCredits': 3,
    'cdcList': ['A7'],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F401',
    'courseTitle': 'Multimedia Computing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F402',
    'courseTitle': 'Computational Geometry',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F404',
    'courseTitle': 'Computer Crime and Forensics',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F406',
    'courseTitle': 'Ethical Hacking',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F407',
    'courseTitle': 'Artificial Intelligence',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F413',
    'courseTitle': 'Internetworking Technologies',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F415',
    'courseTitle': 'Data Mining',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F422',
    'courseTitle': 'Parallel Computing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F424',
    'courseTitle': 'Software for Embedded Systems',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F425',
    'courseTitle': 'Deep Learning',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F426',
    'courseTitle': 'Graph Mining',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F429',
    'courseTitle': 'Natural Language Processing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F437',
    'courseTitle': 'Generative AI',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F441',
    'courseTitle': 'Selected Topics from Computer Science',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F444',
    'courseTitle': 'Real – Time Systems',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F446',
    'courseTitle': 'Data Storage Technologies and Networks',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F451',
    'courseTitle': 'Combinatorial Mathematics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A3', 'A8']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F468',
    'courseTitle': 'Information Security Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F469',
    'courseTitle': 'Information Retrieval',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'FG513',
    'courseTitle': 'Network Security',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'FG527',
    'courseTitle': 'Cloud Computing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'G553',
    'courseTitle': 'Reconfigurable Computing',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'CS',
    'courseCode': 'G557',
    'courseTitle': 'Distributed Computing',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F211',
    'courseTitle': 'Electrical Machines',
    'courseCredits': 4,
    'cdcList': ['AA'],
    'delList': []
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F212',
    'courseTitle': 'Electromagnetic Theory',
    'courseCredits': 3,
    'cdcList': ['AA'],
    'delList': []
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F214',
    'courseTitle': 'Electronic Devices',
    'courseCredits': 3,
    'cdcList': ['AA'],
    'delList': []
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F215',
    'courseTitle': 'Digital Design',
    'courseCredits': 4,
    'cdcList': ['AA'],
    'delList': []
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F241',
    'courseTitle': 'Microprocessors and interfacing',
    'courseCredits': 4,
    'cdcList': ['AA'],
    'delList': []
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F242',
    'courseTitle': 'Control Systems',
    'courseCredits': 3,
    'cdcList': ['AA', 'A4'],
    'delList': []
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F243',
    'courseTitle': 'Signals and Systems',
    'courseCredits': 3,
    'cdcList': ['AA'],
    'delList': []
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F244',
    'courseTitle': 'Microelectronic Circuits',
    'courseCredits': 3,
    'cdcList': ['AA'],
    'delList': []
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA']
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F311',
    'courseTitle': 'Communication Systems',
    'courseCredits': 4,
    'cdcList': ['AA'],
    'delList': []
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F312',
    'courseTitle': 'EM Fields and Microwave Engineering Laboratory',
    'courseCredits': 1,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F314',
    'courseTitle': 'Electromagnetic Fields and Microwave Engineering',
    'courseCredits': 3,
    'cdcList': ['AA'],
    'delList': ['A8']
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F341',
    'courseTitle': 'Analog Electronics',
    'courseCredits': 4,
    'cdcList': ['AA'],
    'delList': []
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F343',
    'courseTitle': 'Communication Networks',
    'courseCredits': 3,
    'cdcList': ['AA'],
    'delList': ['A3']
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F344',
    'courseTitle': 'Information Theory and Coding',
    'courseCredits': 3,
    'cdcList': ['AA'],
    'delList': []
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA']
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA']
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA']
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA']
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F414',
    'courseTitle': 'Telecommunication Switching Systems and Networks',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA']
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F416',
    'courseTitle': 'Digital Communication',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA']
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F418',
    'courseTitle': 'Modern Communication Technologies',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA']
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F431',
    'courseTitle': 'Mobile Telecommunication Networks	',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA']
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F434',
    'courseTitle': 'Digital Signal Processing',
    'courseCredits': 4,
    'cdcList': ['AA'],
    'delList': []
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F472',
    'courseTitle': 'Satellite Communication',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA']
  },
  {
    'deptCode': 'ECE',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F211',
    'courseTitle': 'Principles of Economics',
    'courseCredits': 3,
    'cdcList': ['B3'],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F212',
    'courseTitle': 'Fundamentals of Finance and Accounts',
    'courseCredits': 3,
    'cdcList': ['B3'],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F213',
    'courseTitle': 'Mathematical & Statistical Methods',
    'courseCredits': 3,
    'cdcList': ['B3'],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F214',
    'courseTitle': 'Economic Environment of Business',
    'courseCredits': 3,
    'cdcList': ['B3'],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F241',
    'courseTitle': 'Econometric Methods',
    'courseCredits': 3,
    'cdcList': ['B3'],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F242',
    'courseTitle': 'Microeconomics',
    'courseCredits': 3,
    'cdcList': ['B3'],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F243',
    'courseTitle': 'Macroeconomics',
    'courseCredits': 3,
    'cdcList': ['B3'],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F244',
    'courseTitle': 'Economics of Growth and Development',
    'courseCredits': 3,
    'cdcList': ['B3'],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F311',
    'courseTitle': 'International Economics',
    'courseCredits': 3,
    'cdcList': ['B3'],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F312',
    'courseTitle': 'Money, Banking and Financial Markets',
    'courseCredits': 3,
    'cdcList': ['B3'],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F313',
    'courseTitle': 'Issues in Economic Development',
    'courseCredits': 3,
    'cdcList': ['B3'],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F314',
    'courseTitle': 'Industrial Economics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F315',
    'courseTitle': 'Financial Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F341',
    'courseTitle': 'Public Finance Theory and Policy',
    'courseCredits': 3,
    'cdcList': ['B3'],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F342',
    'courseTitle': 'Applied Econometrics',
    'courseCredits': 3,
    'cdcList': ['B3'],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F343',
    'courseTitle': 'Economic Analysis of Public Policy',
    'courseCredits': 3,
    'cdcList': ['B3'],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F344',
    'courseTitle': 'Models in Operations Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F345',
    'courseTitle': 'Behavioral Economics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F351',
    'courseTitle': 'Indian Economic Development',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F352',
    'courseTitle': 'Management of Banks and Financial Institutions',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F353',
    'courseTitle': 'Energy Economics and Policy',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F354',
    'courseTitle': 'Derivatives and Risk Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F355',
    'courseTitle': 'Business Analysis and Valuation',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F356',
    'courseTitle': 'Strategic Financial Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F357',
    'courseTitle': 'Management Control System',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F411',
    'courseTitle': 'Project Appraisal',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4', 'B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F412',
    'courseTitle': 'Security Analysis and Portfolio Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F413',
    'courseTitle': 'Financial Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F414',
    'courseTitle': 'Creating and Leading Entrepreneurial Organizations',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F415',
    'courseTitle': 'New Venture Creation',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F416',
    'courseTitle': 'Regional Economics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F418',
    'courseTitle': 'Quantitative Analysis of International Trade',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F422',
    'courseTitle': 'Functions and Working of Stock Exchanges',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F434',
    'courseTitle': 'International Business',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F435',
    'courseTitle': 'Marketing Research',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F471',
    'courseTitle': 'Resources and Environmental Economics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'ECON',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F111',
    'courseTitle': 'Electrical Sciences',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F211',
    'courseTitle': 'Electrical Machines',
    'courseCredits': 4,
    'cdcList': ['A3'],
    'delList': []
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F212',
    'courseTitle': 'Electromagnetic Theory',
    'courseCredits': 3,
    'cdcList': ['A3'],
    'delList': []
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F214',
    'courseTitle': 'Electronic Devices',
    'courseCredits': 3,
    'cdcList': ['A3'],
    'delList': []
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F215',
    'courseTitle': 'Digital Design',
    'courseCredits': 4,
    'cdcList': ['A3'],
    'delList': []
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F241',
    'courseTitle': 'Microprocessors and Interfacing',
    'courseCredits': 4,
    'cdcList': ['A3'],
    'delList': []
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F242',
    'courseTitle': 'Control Systems',
    'courseCredits': 3,
    'cdcList': ['A3'],
    'delList': ['A4']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F243',
    'courseTitle': 'Signals & Systems',
    'courseCredits': 3,
    'cdcList': ['A3'],
    'delList': []
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F244',
    'courseTitle': 'Microelectronic Circuits',
    'courseCredits': 3,
    'cdcList': ['A3'],
    'delList': []
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F245',
    'courseTitle': 'Control System Laboratory',
    'courseCredits': 1,
    'cdcList': ['A3'],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F246',
    'courseTitle': 'Electrical and Electronic Circuits Laboratory',
    'courseCredits': 2,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F311',
    'courseTitle': 'Communication Systems',
    'courseCredits': 4,
    'cdcList': ['A3'],
    'delList': ['A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F312',
    'courseTitle': 'Power Systems',
    'courseCredits': 3,
    'cdcList': ['A3'],
    'delList': []
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F313',
    'courseTitle': 'Analog & Digital VLSI Design',
    'courseCredits': 3,
    'cdcList': ['A3'],
    'delList': ['AA']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F341',
    'courseTitle': 'Analog Electronics',
    'courseCredits': 4,
    'cdcList': ['A3'],
    'delList': []
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F342',
    'courseTitle': 'Power Electronics',
    'courseCredits': 4,
    'cdcList': ['A3'],
    'delList': []
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F345',
    'courseTitle': 'Power Apparatus & Networks',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F346',
    'courseTitle': 'Data Communication Networks',
    'courseCredits': 2,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F347',
    'courseTitle': 'Communication Networks Laboratory',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F348',
    'courseTitle': 'FPGA Based System Design Laboratory',
    'courseCredits': 2,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A8', 'AA']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A8', 'AA']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A8', 'AA']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A8', 'AA']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F411',
    'courseTitle': 'Internet of Things (IoT)',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F414',
    'courseTitle': 'Telecommunication Switching Systems & Networks',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A3']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F416',
    'courseTitle': 'Digital Communication',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A3']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F417',
    'courseTitle': 'Computer Based Control Systems',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F418',
    'courseTitle': 'Modern Communication Technologies',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A3']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F422',
    'courseTitle': 'Modern Control Systems',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F425',
    'courseTitle': 'Power System Analysis and Control',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A3']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F426',
    'courseTitle': 'Fiber Optics & Optoelectronics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8', 'B5']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F427',
    'courseTitle': 'Electric Power Utilization and Illumination',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F431',
    'courseTitle': 'Mobile Telecommunication Networks',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F432',
    'courseTitle': 'Medical Instrumentation',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A3']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F433',
    'courseTitle': 'Electromagnetic Fields & Waves',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F434',
    'courseTitle': 'Digital Signal Processing',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F435',
    'courseTitle': 'Digital Image Processing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F436',
    'courseTitle': 'Electromagnetic Compatibility',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F462',
    'courseTitle': 'Advanced Power Systems',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A3']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F472',
    'courseTitle': 'Satellite Communication',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F473',
    'courseTitle': 'Wind Electrical Systems',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A3']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F474',
    'courseTitle': 'Antenna Theory and Design',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F475',
    'courseTitle': 'Special Electrical Machines',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F476',
    'courseTitle': 'Switchgear and Protection',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F477',
    'courseTitle': 'Modeling of Field-Effect NanoDevices',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F478',
    'courseTitle': ' Power Systems Laboratory',
    'courseCredits': 2,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A8', 'AA']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'G512',
    'courseTitle': 'Embedded System Design',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'G513',
    'courseTitle': 'Machine Learning For Elec Engg',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'EEE',
    'courseCode': 'G626',
    'courseTitle': 'Hardware Software Co-Design',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['AA', 'A3', 'A8']
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F212',
    'courseTitle': 'Fundamentals of Finance and Accounts',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F213',
    'courseTitle': 'Mathematical and Statistical Methods',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F214',
    'courseTitle': 'Economic Environment of Business',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F242',
    'courseTitle': 'Introduction to Financial Mathematics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F243',
    'courseTitle': 'Functions and Working of Stock Exchanges',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F244',
    'courseTitle': 'Indian Financial System',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F311',
    'courseTitle': 'Derivatives & Risk Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F312',
    'courseTitle': 'Fundamental of Taxation & Audit',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F313',
    'courseTitle': 'Security Analysis and Portfolio Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F314',
    'courseTitle': 'Investment Banking and Financial Services',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F315',
    'courseTitle': 'Financial Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F341',
    'courseTitle': 'International Financial Markets and Services',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F342',
    'courseTitle': 'Project Finance',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F414',
    'courseTitle': 'Financial Risk Analytics and Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'FIN',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B3']
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F211',
    'courseTitle': 'Modern Political Concepts',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F212',
    'courseTitle': 'Environment, Development & Climate Change',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F213',
    'courseTitle': 'Development Theories',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F221',
    'courseTitle': 'Business Communication',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F222',
    'courseTitle': 'Language Lab Practice',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F223',
    'courseTitle': 'Introduction to Mass Communication',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F224',
    'courseTitle': 'Print and Audio-Visual Advertising',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F231',
    'courseTitle': 'Dynamics of Social Change',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F232',
    'courseTitle': 'Introductory Psychology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F233',
    'courseTitle': 'Public Policy',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F234',
    'courseTitle': 'Development Economics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F241',
    'courseTitle': 'Creative Writing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F242',
    'courseTitle': 'Cultural Studies',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F243',
    'courseTitle': 'Current Affairs',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F244',
    'courseTitle': 'Reporting and Writing for Media',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F245',
    'courseTitle': 'Effective Public Speaking',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F311',
    'courseTitle': 'Introduction to Conflict Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F312',
    'courseTitle': 'Applied Philosophy',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F313',
    'courseTitle': 'Marxian Thoughts',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F321',
    'courseTitle': 'Mass Media Content & Design',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F322',
    'courseTitle': 'Critical Analysis of Literature and Cinema',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F325',
    'courseTitle': 'Journalism',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F326',
    'courseTitle': 'Creative Thinking',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F327',
    'courseTitle': 'Selected Reading',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F331',
    'courseTitle': 'Techniques in Social Research',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F332',
    'courseTitle': 'Contemporary India',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F333',
    'courseTitle': 'Public Administration',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F334',
    'courseTitle': 'Global Business, Technology and Knowledge Sharing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F342',
    'courseTitle': 'Computer Mediated Communication',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F343',
    'courseTitle': 'Short Film and Video Production',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F344',
    'courseTitle': 'Copywriting',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'GS',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F221',
    'courseTitle': 'Readings from Drama',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F222',
    'courseTitle': 'Linguistics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F223',
    'courseTitle': 'Appreciation of Indian Music',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F226',
    'courseTitle': 'Postmodernism',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F227',
    'courseTitle': 'Cross Cultural Skills',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F228',
    'courseTitle': 'Phonetics and Spoken English',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F229',
    'courseTitle': 'Introduction to Western Music',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F232',
    'courseTitle': 'Introduction to Development Studies',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F233',
    'courseTitle': 'Main Trends in Indian History',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F234',
    'courseTitle': 'Main Currents of Modern History',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F235',
    'courseTitle': 'Introductory Philosophy',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F236',
    'courseTitle': 'Symbolic Logic',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F237',
    'courseTitle': 'Contemporary Indian English Fiction',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F238',
    'courseTitle': 'Sports and Society',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F242',
    'courseTitle': 'Introduction to Phonology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F243',
    'courseTitle': 'Introduction to Critical Pedagogy',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F244',
    'courseTitle': 'Crime and New Media',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F245',
    'courseTitle': 'Gender, Science and Technology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F246',
    'courseTitle': 'Philosophy of Nagarjuna',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F248',
    'courseTitle': 'Introduction to Disability Studies',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F311',
    'courseTitle': ' Introduction to Videogame Studies',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F312',
    'courseTitle': ' Bureaucracy',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F313',
    'courseTitle': ' Introduction to Contemporary Arts',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F315',
    'courseTitle': ' Society, Business and Politics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F316',
    'courseTitle': ' Popular Literature and Culture of South Asia',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F317',
    'courseTitle': ' Introduction to Globalization',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F318',
    'courseTitle': ' Introduction to Anthropology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F319',
    'courseTitle': ' Lighting for Theatre and Films',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F322',
    'courseTitle': 'Social and Political Ecology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F323',
    'courseTitle': '  Organizational Psychology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F325',
    'courseTitle': ' Cinematic Adaptation',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F326',
    'courseTitle': ' Humanities and Design',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F327',
    'courseTitle': ' Contemporary Drama',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F328',
    'courseTitle': ' Human Resource Development',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F329',
    'courseTitle': ' Musicology – An Introduction',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F330',
    'courseTitle': ' Appreciation of Art',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F331',
    'courseTitle': ' Sankara’s Thoughts',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F332',
    'courseTitle': ' Cinematic Art',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F333',
    'courseTitle': ' Comparative Religion',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F334',
    'courseTitle': ' Srimad Bhagavad Gita',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F335',
    'courseTitle': ' Literary Criticism',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F336',
    'courseTitle': ' Modern Fiction',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F337',
    'courseTitle': ' English Literary Forms and Movements',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F338',
    'courseTitle': ' Comparative Indian Literature',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F339',
    'courseTitle': ' Theatre Art-Acting and Production',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F340',
    'courseTitle': ' Post Colonial Literature',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F341',
    'courseTitle': ' Performance Design',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F342',
    'courseTitle': ' Advanced Communicative English',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F343',
    'courseTitle': ' Professional Ethics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F344',
    'courseTitle': 'Heritage of India',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F345',
    'courseTitle': 'Gandhian Thoughts',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F346',
    'courseTitle': 'International Relations',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F347',
    'courseTitle': 'Introduction to Carnatic Music',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F348',
    'courseTitle': 'Introduction to Hindustani Music',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F349',
    'courseTitle': 'Ecocriticism',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F350',
    'courseTitle': 'Human Rights: History, Theory & Practice',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F351',
    'courseTitle': 'Social and Political Ecology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F352',
    'courseTitle': 'Technology, Work and Society',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F353',
    'courseTitle': 'Philosophy of Aesthetics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F354',
    'courseTitle': 'Introduction to Islamic Economy',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F355',
    'courseTitle': 'Dictatorship, Democracy & Development',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F356',
    'courseTitle': 'Social Movements and Protest Politics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F361',
    'courseTitle': 'Urban Policy and Governance',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F362',
    'courseTitle': 'Local Governance and Participation',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F363',
    'courseTitle': 'Disaster and Development',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F364',
    'courseTitle': 'Political Economy of Gulf Cooperation Council States',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F365',
    'courseTitle': 'Science of Sustainable Happiness',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F368',
    'courseTitle': 'Asian Cinemas and Cultures',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F369',
    'courseTitle': 'Caste and Gender in India',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F371',
    'courseTitle': 'Cities-Life, Issues and Conflicts',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F372',
    'courseTitle': 'Introduction to Social Psychology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F373',
    'courseTitle': 'Shakespeare and Popular Culture',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F374',
    'courseTitle': 'Urban Modernity and the Renewal of Paris',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'HSS',
    'courseCode': 'F399',
    'courseTitle': 'Introduction to American Literature',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F211',
    'courseTitle': 'Electrical Machines',
    'courseCredits': 4,
    'cdcList': ['A8'],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F212',
    'courseTitle': 'Electromagnetic Theory',
    'courseCredits': 3,
    'cdcList': ['A8'],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F214',
    'courseTitle': 'Electronic Devices',
    'courseCredits': 3,
    'cdcList': ['A8'],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F215',
    'courseTitle': 'Digital Design',
    'courseCredits': 4,
    'cdcList': ['A8'],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F241',
    'courseTitle': 'Microprocessors and Interfacing',
    'courseCredits': 4,
    'cdcList': ['A8'],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F242',
    'courseTitle': 'Control Systems',
    'courseCredits': 3,
    'cdcList': ['A8'],
    'delList': ['A4']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F243',
    'courseTitle': 'Signals & Systems',
    'courseCredits': 3,
    'cdcList': ['A8'],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F244',
    'courseTitle': 'Microelectronic Circuits',
    'courseCredits': 3,
    'cdcList': ['A8'],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A8', 'AA']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F311',
    'courseTitle': 'Electronic Instrumentation & Instrumentation Technology',
    'courseCredits': 4,
    'cdcList': ['A8'],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F312',
    'courseTitle': 'Transducers and Measurement Systems',
    'courseCredits': 3,
    'cdcList': ['A8'],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F313',
    'courseTitle': 'Analog & Digital VLSI Design',
    'courseCredits': 3,
    'cdcList': ['A8'],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F341',
    'courseTitle': 'Analog Electronics',
    'courseCredits': 4,
    'cdcList': ['A8'],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F342',
    'courseTitle': 'Power Electronics',
    'courseCredits': 4,
    'cdcList': ['A8'],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F343',
    'courseTitle': 'Industrial Instrumentation and  Control',
    'courseCredits': 3,
    'cdcList': ['A8'],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A8', 'AA']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A8', 'AA']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A8', 'AA']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A8', 'AA']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F411',
    'courseTitle': 'Opto-Electronic Instruments',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F412',
    'courseTitle': 'Analysis Instrumentation',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A8', 'AA']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F413',
    'courseTitle': 'Advanced Process Control',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A8']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F414',
    'courseTitle': 'Telecommunication Switching Systems & Networks',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A8']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F415',
    'courseTitle': 'Digital Control',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A8']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F419',
    'courseTitle': 'Virtual Instrumentation',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A8']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F420',
    'courseTitle': 'Design of Instrumentation Systems',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A8']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F422',
    'courseTitle': 'Instrumentation for Petrochemical Industry',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A8']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F432',
    'courseTitle': 'Medical Instrumentation',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A8']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F473',
    'courseTitle': 'Wind Electrical Systems',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A8']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['AA', 'A8', 'AA']
  },
  {
    'deptCode': 'INSTR',
    'courseCode': 'G611',
    'courseTitle': 'Advanced Control Systems',
    'courseCredits': 5,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F211',
    'courseTitle': 'Data Structures & Algorithms',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F213',
    'courseTitle': 'Object Oriented Programming',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F214',
    'courseTitle': 'Logic in Computer Science',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F222',
    'courseTitle': 'Discrete Structures for Computer Science',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F241',
    'courseTitle': 'Digital Electronics and Microprocesors',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F242',
    'courseTitle': 'Computer Organization',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F243',
    'courseTitle': 'Database Systems & Application',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F301',
    'courseTitle': 'Principles of Programming Languages',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F303',
    'courseTitle': 'Computer Networks',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F311',
    'courseTitle': 'Computer Graphics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F322',
    'courseTitle': 'Software Testing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F341',
    'courseTitle': 'Software Engineering',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F342',
    'courseTitle': 'Compiler Design',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F372',
    'courseTitle': 'Operating Systems',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F462',
    'courseTitle': 'Network Programming',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7']
  },
  {
    'deptCode': 'IS',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F111',
    'courseTitle': 'Mathematics I',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F112',
    'courseTitle': 'Mathematics II',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F113',
    'courseTitle': 'Probability & Statistics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F211',
    'courseTitle': 'Mathematics III',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F212',
    'courseTitle': 'Optimization',
    'courseCredits': 3,
    'cdcList': ['A3', 'B4'],
    'delList': ['A5', 'B3', 'B1']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F213',
    'courseTitle': 'Discrete Mathematics',
    'courseCredits': 3,
    'cdcList': ['B4'],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F214',
    'courseTitle': 'Elementary Real Analysis',
    'courseCredits': 3,
    'cdcList': ['B4'],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F215',
    'courseTitle': 'Algebra-I',
    'courseCredits': 3,
    'cdcList': ['B4'],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F231',
    'courseTitle': 'Number Theory',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4', 'A7', 'B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F241',
    'courseTitle': 'Mathematical Methods',
    'courseCredits': 3,
    'cdcList': ['B4'],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F242',
    'courseTitle': 'Operations Research',
    'courseCredits': 3,
    'cdcList': ['B4'],
    'delList': ['B3']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F243',
    'courseTitle': 'Graphs and Networks',
    'courseCredits': 3,
    'cdcList': ['B4'],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F244',
    'courseTitle': 'Measure and Integration',
    'courseCredits': 3,
    'cdcList': ['B4'],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F311',
    'courseTitle': 'Introduction to Topology',
    'courseCredits': 3,
    'cdcList': ['B4'],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F312',
    'courseTitle': 'Ordinary Differential Equations',
    'courseCredits': 3,
    'cdcList': ['B4'],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F313',
    'courseTitle': 'Numerical Analysis',
    'courseCredits': 3,
    'cdcList': ['B4'],
    'delList': ['A4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F314',
    'courseTitle': 'Algebra II',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F341',
    'courseTitle': 'Introduction to Functional Analysis',
    'courseCredits': 3,
    'cdcList': ['B4'],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F342',
    'courseTitle': 'Differential Geometry',
    'courseCredits': 3,
    'cdcList': ['B4'],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F343',
    'courseTitle': 'Partial Differential Equations',
    'courseCredits': 3,
    'cdcList': ['B4'],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F344',
    'courseTitle': 'Mathematical Fluid Dynamics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F353',
    'courseTitle': 'Statistical Inference and Applications',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F354',
    'courseTitle': 'Complex Analysis',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': ' F376',
    'courseTitle': ' Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F378',
    'courseTitle': 'Advanced Probability Theory',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F420',
    'courseTitle': 'Mathematical Modeling',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F421',
    'courseTitle': 'Combinatorial Mathematics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7', 'B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F422',
    'courseTitle': 'Numerical Methodology for Partial Differential Equations',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F423',
    'courseTitle': 'Introduction to Algebraic Topology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F424',
    'courseTitle': 'Applied Stochastic Process',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B4', 'B5']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F431',
    'courseTitle': 'Distribution Theory',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F432',
    'courseTitle': ' Applied Statistical Methods',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F441',
    'courseTitle': 'Discrete Mathematical Structures',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A7', 'B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F444',
    'courseTitle': 'Numerical Solutions of Ordinary Differential Equations',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F445',
    'courseTitle': 'Mathematical Fluid Dynamics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F456',
    'courseTitle': 'Cosmology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4', 'B5']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F471',
    'courseTitle': 'Nonlinear Optimization',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F481',
    'courseTitle': 'Commutative Algebra',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'MATH',
    'courseCode': 'F492',
    'courseTitle': 'Wavelet analysis and applications',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F110',
    'courseTitle': 'Workshop Practice',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F112',
    'courseTitle': 'Workshop Practice',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F211',
    'courseTitle': 'Mechanics of Solids',
    'courseCredits': 3,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F212',
    'courseTitle': 'Fluid Mechanics',
    'courseCredits': 3,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F213',
    'courseTitle': 'Materials Science & Engineering',
    'courseCredits': 2,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F214',
    'courseTitle': 'Applied Thermodynamics',
    'courseCredits': 3,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F215',
    'courseTitle': 'Mechanical Engineering Laboratory',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F216',
    'courseTitle': 'Materials Science & Engineering',
    'courseCredits': 3,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F217',
    'courseTitle': 'Applied Thermodynamics',
    'courseCredits': 4,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F218',
    'courseTitle': 'Advanced Mechanics of Solids',
    'courseCredits': 2,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F219',
    'courseTitle': 'Manufacturing Processes',
    'courseCredits': 4,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F220',
    'courseTitle': 'Heat Transfer',
    'courseCredits': 4,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F221',
    'courseTitle': 'Mechanisms and Machines',
    'courseCredits': 3,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F241',
    'courseTitle': 'Machine Design & Drawing',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F242',
    'courseTitle': 'IC Engines',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F243',
    'courseTitle': 'Production Techniques I',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F244',
    'courseTitle': 'Kinematics & Dynamics of Machinery',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F311',
    'courseTitle': 'Heat Transfer',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F312',
    'courseTitle': 'Advanced Mechanics of Solids',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F313',
    'courseTitle': 'Production Techniques II',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F314',
    'courseTitle': 'Design of Machine Elements',
    'courseCredits': 3,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F315',
    'courseTitle': 'Advanced Manufacturing Processes',
    'courseCredits': 3,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F316',
    'courseTitle': 'Manufacturing Management',
    'courseCredits': 2,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F317',
    'courseTitle': 'Engines, Motors, and Mobility',
    'courseCredits': 2,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F318',
    'courseTitle': 'Computer-Aided Design',
    'courseCredits': 3,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F319',
    'courseTitle': 'Vibrations & Control',
    'courseCredits': 3,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F320',
    'courseTitle': 'Engineering Optimization',
    'courseCredits': 3,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F340',
    'courseTitle': ' Introduction to Sports Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F341',
    'courseTitle': 'Prime Movers & Fluid Machines',
    'courseCredits': 3,
    'cdcList': ['A4'],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F342',
    'courseTitle': 'Computer Aided Design',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F343',
    'courseTitle': 'Mechanical Vibrations',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F344',
    'courseTitle': 'Engineering Optimization',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F411',
    'courseTitle': 'Fluid Power Systems',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F412',
    'courseTitle': 'Production Planning and Control',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F413',
    'courseTitle': 'Nonlinear Vibrations',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F414',
    'courseTitle': 'Fuel Cell Science and Technology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F415',
    'courseTitle': 'Gas Dynamics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F416',
    'courseTitle': 'Reverse Engineering and Rapid  Prototyping',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F417',
    'courseTitle': 'Advanced Metal Forming',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F418',
    'courseTitle': 'Rocket and Spacecraft Propulsion',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F419',
    'courseTitle': 'Total Product Integration Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F420',
    'courseTitle': 'Power Plant Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F423',
    'courseTitle': 'Micro Fluidics and its Application',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F424',
    'courseTitle': 'Energy Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F425',
    'courseTitle': 'Additive Manufacturing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F426',
    'courseTitle': 'Industry 4.0 in Manufacturing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F432',
    'courseTitle': 'Computer Aided Manufacturing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F433',
    'courseTitle': 'Solar Thermal Process Engineering',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F441',
    'courseTitle': 'Automotive Vehicles',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F443',
    'courseTitle': 'Quality Control, Assurance and Reliability',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F451',
    'courseTitle': 'Mechanical Equipment Design',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F452',
    'courseTitle': 'Composite Materials & Design',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F461',
    'courseTitle': 'Refrigeration and Air conditioning',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F472',
    'courseTitle': 'Precision Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F481',
    'courseTitle': 'Project Appraisal',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F482',
    'courseTitle': 'Combustion',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F483',
    'courseTitle': 'Wind Energy',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F484',
    'courseTitle': 'Automotive Technology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F485',
    'courseTitle': 'Numerical Techniques for Fluid Flow and Heat Transfer',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'G511',
    'courseTitle': 'Mechanism and Robotics',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'G512',
    'courseTitle': 'Finite Element Methods',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'G514',
    'courseTitle': 'Turbo Machinery',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'G515',
    'courseTitle': 'Computational Fluid Dynamics',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'G533',
    'courseTitle': 'Conduction and Radiation Heat Transfer',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'G533',
    'courseTitle': 'Convective Heat and Mass Transfer',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'ME',
    'courseCode': 'G511',
    'courseTitle': 'Mechanism and Robotics',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F211',
    'courseTitle': 'Mechanics of Solids',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F212',
    'courseTitle': 'Fluid Mechanics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F213',
    'courseTitle': 'Materials Science & Engineering',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F214',
    'courseTitle': 'Applied Thermodynamics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F215',
    'courseTitle': 'Mechanical Engineering Laboratory',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F241',
    'courseTitle': 'Machine Design & Drawing',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F242',
    'courseTitle': 'Manufacturing Management',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F243',
    'courseTitle': 'Manufacturing Processes',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F244',
    'courseTitle': 'Kinematics & Dynamics of Machinery',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F311',
    'courseTitle': 'Mechatronics & Automation',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F312',
    'courseTitle': 'Tool and Fixture Design',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F313',
    'courseTitle': 'Metal Forming and Machining',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F341',
    'courseTitle': 'Design of Machine Tools',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F342',
    'courseTitle': 'Computer Aided Design',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F343',
    'courseTitle': 'Casting and Welding',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F344',
    'courseTitle': 'Engineering Optimization',
    'courseCredits': 2,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F411',
    'courseTitle': 'Fluid Power Systems',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F412',
    'courseTitle': 'Automotive Systems',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F413',
    'courseTitle': 'Mechanical Vibrations and Acoustics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F414',
    'courseTitle': 'Manufacturing Excellence',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F415',
    'courseTitle': 'Noise Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F416',
    'courseTitle': 'Work System Design',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F418',
    'courseTitle': 'Lean Manufacturing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F421',
    'courseTitle': 'Supply Chain Management',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F442',
    'courseTitle': 'Advances in Materials Science',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F453',
    'courseTitle': 'Industrial Relations',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F463',
    'courseTitle': 'Maintenance and Safety',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F471',
    'courseTitle': 'Instrumentation and Control',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F472',
    'courseTitle': 'Precision Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F473',
    'courseTitle': 'Product Design and Development',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F474',
    'courseTitle': 'Product Design and Development Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F485',
    'courseTitle': 'Sustainable Manufacturing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'MF',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MGTS',
    'courseCode': 'F211',
    'courseTitle': 'Principles of Management',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MGTS',
    'courseCode': 'F315',
    'courseTitle': 'Managerial and Leadership Skills',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MGTS',
    'courseCode': 'F351',
    'courseTitle': 'Organisational Behaviour',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MGTS',
    'courseCode': 'F433',
    'courseTitle': 'Advertising and Sales Promotion',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MSE',
    'courseCode': 'G511',
    'courseTitle': 'Mechatronics',
    'courseCredits': 5,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MST',
    'courseCode': 'F331',
    'courseTitle': 'Materials Characterization',
    'courseCredits': 4,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MST',
    'courseCode': 'F332',
    'courseTitle': 'Materials Processing',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MST',
    'courseCode': 'F333',
    'courseTitle': 'Introduction to Biomaterials',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MST',
    'courseCode': 'F334',
    'courseTitle': 'Materials for Catalytic applications',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MST',
    'courseCode': 'F335',
    'courseTitle': 'Coating and Thin film technology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MST',
    'courseCode': 'F336',
    'courseTitle': 'Glass Technology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MST',
    'courseCode': 'F337',
    'courseTitle': 'Materials for Energy Applications',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MST',
    'courseCode': 'F338',
    'courseTitle': 'Metals and Alloys',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MST',
    'courseCode': 'F339',
    'courseTitle': 'Polymer Materials',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'MST',
    'courseCode': 'G522',
    'courseTitle': 'Advanced Composites',
    'courseCredits': 5,
    'cdcList': [],
    'delList': ['A4']
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F211',
    'courseTitle': 'Pharmaceutical Analysis',
    'courseCredits': 3,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F212',
    'courseTitle': 'Dispensing Pharmacy',
    'courseCredits': 3,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F213',
    'courseTitle': 'Microbiology',
    'courseCredits': 3,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F214',
    'courseTitle': 'Anatomy Physiology & Hygiene',
    'courseCredits': 3,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F215',
    'courseTitle': 'Introduction to Molecular Biology & Immunology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F241',
    'courseTitle': 'Pharmaceutical Chemistry',
    'courseCredits': 3,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F242',
    'courseTitle': 'Biological Chemistry',
    'courseCredits': 3,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F243',
    'courseTitle': 'Industrial Pharmacy',
    'courseCredits': 3,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F244',
    'courseTitle': 'Physical Pharmacy',
    'courseCredits': 3,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A5']
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F311',
    'courseTitle': 'Pharmacology I',
    'courseCredits': 3,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F312',
    'courseTitle': 'Medicinal Chemistry I',
    'courseCredits': 3,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F313',
    'courseTitle': 'Instrumental Methods of Analysis',
    'courseCredits': 4,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F314',
    'courseTitle': 'Pharmaceutical Formulations and Biopharmaceutics',
    'courseCredits': 3,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F341',
    'courseTitle': 'Pharmacology II',
    'courseCredits': 3,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F342',
    'courseTitle': 'Medicinal Chemistry II',
    'courseCredits': 3,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F343',
    'courseTitle': 'Forensic Pharmacy',
    'courseCredits': 2,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F344',
    'courseTitle': 'Natural Drugs',
    'courseCredits': 3,
    'cdcList': ['A5'],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F413',
    'courseTitle': 'Pharmaceutical Management and Quality Control',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A5']
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F414',
    'courseTitle': 'Biopharmaceutics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A5']
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F415',
    'courseTitle': 'Pathophysiology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A5']
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F416',
    'courseTitle': 'Chemistry of Synthetic Drugs',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A5']
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F417',
    'courseTitle': 'Pharmacoeconomics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A5']
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F422',
    'courseTitle': 'Cosmetic Science',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A5']
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F432',
    'courseTitle': 'Hospital Pharmacy',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A5']
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F441',
    'courseTitle': 'Biochemical Engineering',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A5']
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F442',
    'courseTitle': 'Applied Pharmaceutical Chemistry',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A5']
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F461',
    'courseTitle': 'Phytochemistry',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A5']
  },
  {
    'deptCode': 'PHA',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['A5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F110',
    'courseTitle': 'Physics Laboratory',
    'courseCredits': 1,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F111',
    'courseTitle': 'Mechanics, Oscillations and Waves',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F112',
    'courseTitle': 'General Physics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F211',
    'courseTitle': 'Classical Mechanics',
    'courseCredits': 4,
    'cdcList': ['B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F212',
    'courseTitle': 'Electromagnetic Theory I',
    'courseCredits': 3,
    'cdcList': ['A2', 'B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F213',
    'courseTitle': 'Optics',
    'courseCredits': 3,
    'cdcList': ['B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F214',
    'courseTitle': 'Electricity, Magnetism, and Optics Lab',
    'courseCredits': 2,
    'cdcList': ['B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F215',
    'courseTitle': 'Introduction to Astronomy and Astrophysics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F241',
    'courseTitle': 'Electromagnetic Theory II',
    'courseCredits': 4,
    'cdcList': ['B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F242',
    'courseTitle': 'Quantum Mechanics I',
    'courseCredits': 3,
    'cdcList': ['B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F243',
    'courseTitle': 'Mathematical Methods of Physics',
    'courseCredits': 3,
    'cdcList': ['B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F244',
    'courseTitle': 'Modern Physics Lab',
    'courseCredits': 2,
    'cdcList': ['B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F266',
    'courseTitle': 'Study Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F311',
    'courseTitle': 'Quantum Mechanics II',
    'courseCredits': 3,
    'cdcList': ['B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F312',
    'courseTitle': 'Statistical Mechanics',
    'courseCredits': 3,
    'cdcList': ['B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F313',
    'courseTitle': 'Computational Physics',
    'courseCredits': 3,
    'cdcList': ['B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F315',
    'courseTitle': 'Theory of Relativity',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F316',
    'courseTitle': 'Musical Acoustics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F317',
    'courseTitle': 'Introduction to Radio Astronomy',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F341',
    'courseTitle': 'Solid State Physics',
    'courseCredits': 3,
    'cdcList': ['B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F342',
    'courseTitle': 'Atomic and Molecular Physics',
    'courseCredits': 3,
    'cdcList': ['B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F343',
    'courseTitle': 'Nuclear and Particle Physics',
    'courseCredits': 3,
    'cdcList': ['B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F344',
    'courseTitle': 'Advanced Physics Lab',
    'courseCredits': 3,
    'cdcList': ['B5'],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F345',
    'courseTitle': 'Quantum Mechanics for Engineers',
    'courseCredits': 3,
    'cdcList': [],
    'delList': []
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F346',
    'courseTitle': 'Laser Science and Technology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F366',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F367',
    'courseTitle': 'Lab Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F376',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F377',
    'courseTitle': 'Design Project',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F378',
    'courseTitle': 'Plasma Physics and its Applications',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F379',
    'courseTitle': 'Thin Film Technology',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F412',
    'courseTitle': 'Introduction to Quantum Field Theory',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F413',
    'courseTitle': 'Particle Physics',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F414',
    'courseTitle': 'Physics of Advanced Materials',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F415',
    'courseTitle': 'General Theory of Relativity and Cosmology',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F416',
    'courseTitle': 'Soft Condensed Matter Physics',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F417',
    'courseTitle': 'Experimental Methods of Physics',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F418',
    'courseTitle': 'Lasers and Applications',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F419',
    'courseTitle': 'Advanced Solid State Physics',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F420',
    'courseTitle': 'Quantum Optics',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F421',
    'courseTitle': 'Advanced Quantum Mechanics',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F422',
    'courseTitle': 'Group Theory and Applications',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F423',
    'courseTitle': 'Special Topics in Statistical Mechanics',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F424',
    'courseTitle': 'Advanced Electrodynamics',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F425',
    'courseTitle': 'Advanced Mathematical Methods of Physics',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F426',
    'courseTitle': 'Physics of Semiconductor Devices',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F427',
    'courseTitle': 'Atmospheric Physics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F428',
    'courseTitle': 'Quantum Information Theory',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F431',
    'courseTitle': ' Geometrical Methods in Physics',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F432',
    'courseTitle': ' Classical Theory of Fields: A Symmetry Perspective',
    'courseCredits': 4,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'F491',
    'courseTitle': 'Special Projects',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
  {
    'deptCode': 'PHY',
    'courseCode': 'G512',
    'courseTitle': 'Advanced Quantum Field Theory',
    'courseCredits': 3,
    'cdcList': [],
    'delList': ['B5']
  },
];

export default coursesData;