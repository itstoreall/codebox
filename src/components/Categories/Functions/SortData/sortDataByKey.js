const normal = (arr, key) => {
  if (!Array.isArray(arr)) return arr;
  return arr.sort((a, b) => (a[key] < b[key] ? -1 : 1));
};

const reverse = (arr, key) => {
  if (!Array.isArray(arr)) return arr;
  return arr.sort((a, b) => (a[key] < b[key] ? 1 : -1));
};

const sortData = { normal, reverse };

export default sortData;
