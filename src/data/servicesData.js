export const services = [
  {
    slug: 'contract-logistics',
    title: 'Contract Logistics',
    description:
      'End-to-end coordination for inventory, transport scheduling, and deliveries tailored to your business operations.',
    image: '/images/services/contract-logistics.jpg',
  },
  {
    slug: 'couriering',
    title: 'Couriering',
    description:
      'Fast and dependable courier services for documents, parcels, and sensitive items with clear delivery tracking.',
    image: '/images/services/couriering.jpg',
  },
  {
    slug: 'storage-solutions',
    title: 'Storage Solutions',
    description:
      'Secure and flexible storage options for short-term and long-term needs, including organized retrieval support.',
    image: '/images/services/storage-solutions.jpg',
  },
  {
    slug: 'move-outs',
    title: 'Move-Outs',
    description:
      'Professional residential and commercial move-out services with careful packing, handling, and transport.',
    image: '/images/services/move-outs.jpg',
  },
  {
    slug: 'procurement-hub',
    title: 'Procurement Hub',
    description:
      'Sourcing support for machinery, electronics, building materials, and car spares through trusted supplier networks.',
    image: '/images/services/procurement-hub.jpg',
  },
];

export const servicesBySlug = services.reduce((lookup, service) => {
  lookup[service.slug] = service;
  return lookup;
}, {});
