let bt = document.querySelector(".btn");
let div = document.querySelector(".colorArea");
let genColor = document.querySelector(".generatedColor");
let colorLumience = "bright";

bt.addEventListener("click", () => {
  bt.textContent = "Generate another color!";

  if (colorLumience == "bright") {
    div.style.color = "black";
  } else {
    div.style.color = "white";
  }

  let generatedColor = randomColor();
  genColor.textContent = `Here's Your generated Color : ${generatedColor}`;
  div.style.backgroundColor = generatedColor;
});

const randomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  if (0.2126 * r + 0.7152 * g + 0.0722 * b >= 128) {
    colorLumience = "bright";
  } else {
    colorLumience = "dark";
  }

  let finalColor = `rgb(${r},${g},${b})`;
  return finalColor;
};
