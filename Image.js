function Image() {
  let num = 35;
  if (num > 0 && num <= 10) {
    console.log("Image1.jpg");
  } else if (num >= 11 && num <= 20) {
    console.log("Image2.jpg");
  } else if (num >= 21 && num <= 30) {
    console.log("Image2.jpg");
  } else if (num >= 31 && num <= 40) {
    console.log("Image2.jpg");
  } else if (num >= 41 && num <= 50) {
    console.log("Image2.jpg");
  } else {
    console.log("Invalid Input");
  }
}
console.log(Image());
