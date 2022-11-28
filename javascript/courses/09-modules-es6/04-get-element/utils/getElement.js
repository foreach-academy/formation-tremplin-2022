// const getElement = (selection) => {
//   const element = document.querySelector(selection);

//   if (element) return element;
//   throw new Error("Tu n'as pas sélectionné un élément");
// };

export default (selection) => {
  const element = document.querySelector(selection);

  if (element) return element;
  throw new Error("Tu n'as pas sélectionné un élément");
};
