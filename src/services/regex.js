const regexEmail = /^[^\s@]+@[^\s@]+$/;
const regexId = /^\s*[-. (]*(\d{2})\s*$/g;
const regexPhoneNumber = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g;

export const validEmail = data => {
  return regexEmail.test(data);
};

export const validId = data => {
  return regexId.test(data);
};

export const validPhoneNumber = data => {
  return regexPhoneNumber.test(data);
};
