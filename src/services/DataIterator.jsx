const DataIterator = (views, location) => {
  console.log(111, 'DataIterator');

  const locationPathname = location.pathname;
  const splitedLocation = location.pathname.split('/').filter(Boolean);

  const featureIteration = (view, pathname) => {
    console.log('0. -->');

    view.links.map(feature => {
      const payload = feature.href === pathname ? feature.href : null;
      feature.href === pathname &&
        console.log('2. payload 0', payload, feature.anchor);
    });
  };

  views.map(view => {
    `/${splitedLocation[0]}` === view.path &&
      featureIteration(view, locationPathname);
  });
};

export default DataIterator;
