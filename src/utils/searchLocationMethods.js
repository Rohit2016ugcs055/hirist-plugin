export const computelocation = (location) => {
    const locArray = location.map(loc => loc.name);
    return locArray.join('/');
  }