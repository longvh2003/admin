const regexName = /^[a-zA-Z]+$/;
const regexId = /^\s*[-. (]*(\d{2})\s*$/g;
const regexPhoneNumber = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g;

export const validName = data => {
  return data.match(regexName);
};

export const validId = data => {
  return data.match(regexId);
};

export const validPhoneNumber = data => {
  return data.match(regexPhoneNumber);
};
