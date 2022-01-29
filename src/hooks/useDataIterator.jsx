const useDataIterator = (location, views) => {
  const locationPathname = location.pathname;
  const splitedLocation = location.pathname.split('/').filter(Boolean);
  const splitedViewPath = `/${splitedLocation[0]}`;
  let quantity = { views: views.length, features: 0 };

  const view = views.find(view => splitedViewPath === view.path);

  views.forEach(view => (quantity.features += view.links.length));

  const iterateFeatures = () =>
    splitedLocation.length === 2
      ? {
          feature: view.links.find(feature => {
            return locationPathname === feature.href && feature;
          }),
        }
      : { feature: null };

  const createInformation = () => {
    const { feature } = iterateFeatures();

    return splitedLocation.length !== 0
      ? {
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
        }
      : {
          view: { path: locationPathname, title: 'Home' },
          feature: null,
          nesting: 0,
          quantity,
        };
  };

  return createInformation();
};

export default useDataIterator;
