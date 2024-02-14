function calculationTriangel() {
  //get base input value
  const triangleBaseInput = document.getElementById("triangle_input_base");
  const triangleBaseInputText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseInputText);
  //   console.log(typeof triangleBaseInputText);

  //get height input value

  const triangelHeightInput = document.getElementById("triangle_input_height");
  const triangelHeightInputText = triangelHeightInput.value;
  const height = parseFloat(triangelHeightInputText);
  //   console.log(height)

  //calculate the area

  const area = 0.5 * base * height;
  console.log(area)

  const areaOutput = document.getElementById('triangle_Area_output');
  areaOutput.innerText = area;

}
