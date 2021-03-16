export const getData = table => {
  const data = localStorage.getItem(table);
  return JSON.parse(data);
};
export const delData = (index, table) => {
  let data = JSON.parse(localStorage.getItem(table));
  data = data.filter(element => element != data[index]);
  localStorage.setItem(table, JSON.stringify(data));
};
export const updateData = (index, detail, table) => {
  let data = JSON.parse(localStorage.getItem(table));
  data[index] = detail;
  localStorage.setItem(table, JSON.stringify(data));
};
export const addData = (detail, table) => {
  let data = JSON.parse(localStorage.getItem(table));
  data.push(detail);
  localStorage.setItem(table, JSON.stringify(data));
};
