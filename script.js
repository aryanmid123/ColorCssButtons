const red = document.querySelector(".red");
const Cyan = document.querySelector(".Cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const center = document.querySelector(".center");
console.log(window.getComputedStyle(red).backgroundColor);
const getBGColor = selectedElement => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};
console.log(getBGColor(pink));
