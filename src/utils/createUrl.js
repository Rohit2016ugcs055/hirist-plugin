

export const calculateDateInFormat = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString()
}
