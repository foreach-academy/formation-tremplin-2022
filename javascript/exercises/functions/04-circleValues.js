function circleValues(radius) {
  return `Le périmètre du cercle est de : ${
    2 * Math.PI * radius
  } et sonaire est de : ${Math.PI * radius ** 2}`;
}

console.log(circleValues(2.5));
