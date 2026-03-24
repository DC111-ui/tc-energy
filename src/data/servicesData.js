export const services = [
  {
    slug: 'contract-logistics',
    title: 'Contract Logistics',
    description:
      'End-to-end logistics support including supplier coordination, bulk handling, and last-mile delivery.',
    image: '/images/services/contract-logistics.jpg',
  },
  {
    slug: 'couriering',
    title: 'Couriering',
    description: 'Fast and secure courier services with same-day and scheduled delivery options.',
    image: '/images/services/couriering.jpg',
  },
  {
    slug: 'storage-solutions',
    title: 'Storage',
    description:
      'Flexible short and long-term storage solutions with secure facilities and efficient inventory handling.',
    image: '/images/services/storage-solutions.jpg',
  },
  {
    slug: 'move-outs',
    title: 'Move-Outs',
    description: 'Professional residential and student move-out services including packing and transport.',
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
