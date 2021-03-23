export const getData = table => {
  return JSON.parse(localStorage.getItem(table));
};
export const delData = (index, table) => {
  let data = getData(table);
  data = data.filter(element => element.id !== index);
  localStorage.setItem(table, JSON.stringify(data));
};
export const updateData = (index, detail, table) => {
  const data = getData(table);
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === index) data[i] = detail;
  }
  localStorage.setItem(table, JSON.stringify(data));
};
export const addData = (detail, table) => {
  const data = getData(table);
  data.unshift(detail);
  localStorage.setItem(table, JSON.stringify(data));
};
export const getIndex = (detail, table) => {
  const data = getData(table);
  const tmp = data.filter(element => element.name === detail);
  return tmp[0].id;
};
export const getDetail = (index, table) => {
  const data = getData(table);
  return data[index];
};
