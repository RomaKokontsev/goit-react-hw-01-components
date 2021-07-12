export default function randomBgColor() {
  return `rgb(${Math.floor(Math.random() * (255 - 0) + 0)},
    ${Math.floor(Math.random() * (255 - 0) + 0)},
   ${Math.floor(Math.random() * (255 - 0) + 0)})`;
}
