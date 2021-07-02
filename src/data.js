//function Order by to order data
export const sortData = (data, sortBy, sortOrder) => {
  const order = (sortOrder === 'asc') ? 1 : -1;
  return data.sort((a, b) => (a[sortBy] > b[sortBy] ? order: (-order)));
};
