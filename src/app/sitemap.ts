import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chemistryai.online';
  
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/periodic-table`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/molecules`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/chemistry-qa`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Add chemistry topics
  const chemistryTopics = [
    'atomic-structure',
    'chemical-bonding',
    'periodic-trends',
    'stoichiometry',
    'gas-laws',
    'chemical-reactions',
    'organic-chemistry',
    'inorganic-chemistry',
    'physical-chemistry',
    'electrochemistry',
    'thermodynamics',
    'kinetics',
  ];

  const topicPages = chemistryTopics.map(topic => ({
    url: `${baseUrl}/topics/${topic}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Add calculator pages
  const calculators = [
    'molecular-weight',
    'molarity',
    'ph-calculator',
    'gas-laws',
    'concentration-converter',
    'unit-converter',
    'equation-balancer',
  ];

  const calculatorPages = calculators.map(calc => ({
    url: `${baseUrl}/calculators/${calc}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...topicPages, ...calculatorPages];
}