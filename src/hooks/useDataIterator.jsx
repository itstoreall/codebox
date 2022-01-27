import { useContext } from 'react';
import Context from '../Context';

const useDataIterator = location => {
  const { views } = useContext(Context);
  const locationPathname = location.pathname;
  const splitedLocation = location.pathname.split('/').filter(Boolean);
  const splitedViewPath = `/${splitedLocation[0]}`;
  let quantity = { views: views.length, features: 0 };

  const iterateFeatures = () => {
    const view = views.find(view => {
      return splitedViewPath === view.path;
    });

    return splitedLocation.length === 2
      ? {
          view,
          feature: view.links.find(feature => {
            return locationPathname === feature.href && feature;
          }),
        }
      : { view, feature: null };
  };

  const createInformation = () => {
    views.forEach(view => (quantity.features += view.links.length));

    const { view, feature } = iterateFeatures();

    return {
      view: { path: view.path, title: view.title },
      feature:
        splitedLocation.length === 2
          ? {
              path: locationPathname,
              title: feature.anchor,
            }
          : null,
      nesting:
        splitedLocation.length === 2
          ? 2
          : splitedLocation.length === 1
          ? 1
          : splitedLocation.length === 0 && 0,
      quantity,
    };
  };

  if (splitedLocation.length === 2) return createInformation();
  if (splitedLocation.length === 1) return createInformation();
  if (splitedLocation.length === 0)
    return {
      view: { path: locationPathname, title: 'Home' },
      feature: null,
      nesting: 0,
    };
};

export default useDataIterator;
