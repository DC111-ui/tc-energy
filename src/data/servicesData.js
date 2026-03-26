export const services = [
  {
    slug: 'contract-logistics',
    title: 'Contract Logistics',
    description:
      'End-to-end logistics support including supplier coordination, bulk handling, and last-mile delivery.',
    image: '/images/operations-office.webp',
    features: [
      'Dedicated transport coordination for recurring routes',
      'Supplier pickup and scheduling',
      'Store replenishment management',
      'Bulk consignment handling',
      'Last-mile delivery execution',
    ],
  },
  {
    slug: 'couriering',
    title: 'Couriering',
    description: 'Fast and secure courier services with same-day and scheduled delivery options.',
    image: '/images/couriering-customer-delivery.webp',
    features: [
      'Same-day and scheduled delivery',
      'Residential and business drop-offs',
      'Urgent consignment handling',
      'Branch-to-branch transfers',
      'Proof of delivery confirmation',
    ],
  },
  {
    slug: 'storage-solutions',
    title: 'Storage Solutions',
    description:
      'Flexible short and long-term storage solutions with secure facilities and efficient inventory handling.',
    image: '/images/warehouse-team.webp',
    features: [
      'Short and long-term storage options',
      'Secure, organised warehousing',
      'Inventory tracking and management',
      'Stock-holding for retailers',
      'Structured dispatch and retrieval',
    ],
  },
  {
    slug: 'move-outs',
    title: 'Move-Outs',
    description: 'Professional residential and student move-out services including packing and transport.',
    image: '/images/moveout-residential-delivery.webp',
    features: [
      'Household and student relocations',
      'Office and corporate moves',
      'Packing and loading assistance',
      'Safe transport of furniture and goods',
      'Flexible scheduling',
    ],
  },
  {
    slug: 'procurement-hub',
    title: 'Procurement Hub',
    description:
      'Sourcing support for machinery, electronics, building materials, and car spares through trusted supplier networks.',
    image: '/images/loading-eurobath.webp',
    features: [
      'Machinery and equipment sourcing',
      'Electronics and components',
      'Building and construction materials',
      'Car spares and vehicle parts',
      'Trusted supplier network access',
    ],
  },
];

export const servicesBySlug = services.reduce((lookup, service) => {
  lookup[service.slug] = service;
  return lookup;
}, {});
