export const getData = table => {
  return JSON.parse(localStorage.getItem(table));
};
export const delData = (index, table) => {
  let data = getData(table);
  data = data.filter(element => element != data[index]);
  localStorage.setItem(table, JSON.stringify(data));
};
export const updateData = (index, detail, table) => {
  let data = getData(table);
  data[index] = detail;
  localStorage.setItem(table, JSON.stringify(data));
};
export const addData = (detail, table) => {
  let data = getData(table);
  data.unshift(detail);
  localStorage.setItem(table, JSON.stringify(data));
};
export const getIndex = (detail, table) => {
  let data = getData(table);
  let tmp = data.filter(element => element.name === detail);
  return data.indexOf(tmp[0]);
};
export const getDetail = (index, table) => {
  let data = getData(table);
  return data[index];
};
