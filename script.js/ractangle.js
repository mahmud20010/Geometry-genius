function ractangleArea() {
  const ractangleWidth = document.getElementById("ractangle_input_width");
  const ractangleText = ractangleWidth.value;
  const width = parseFloat(ractangleText);
//   console.log(width)


const ractangleLength = document.getElementById('ractangle_input_length');
const ractangleLengthText = ractangleLength.value;
const length = parseFloat(ractangleLengthText);

const area = width * length;

const ractangleAraOutput = document.getElementById('ractangle_area');
ractangleAraOutput.innerText = area;

console.log(area);
}
