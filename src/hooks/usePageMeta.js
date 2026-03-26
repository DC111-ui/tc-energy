import { useEffect } from 'react';

export function usePageMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | TC Energy & Logistics` : 'TC Energy & Logistics';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || 'Reliable logistics, storage, courier and procurement solutions across South Africa. TC Energy & Logistics — Pretoria, Est. 2023.';

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title ? `${title} | TC Energy & Logistics` : 'TC Energy & Logistics';

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = description || 'Reliable logistics, storage, courier and procurement solutions across South Africa.';
  }, [title, description]);
}
