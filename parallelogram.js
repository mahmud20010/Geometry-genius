// function parallelogramArea(){
//     const parallelogramBase = document.getElementById('parallelogram_input_base');
//     const parallelogramBaseText = parallelogramBase.value;
//     const base = parseFloat(parallelogramBaseText);

//     const parallelogramHeight = document.getElementById('parallelogram_input_height');
//     const parallelogramHeightText = parallelogramHeight.value;
//     const height = parseFloat(parallelogramHeightText);

//     const area = base* height;

//     const parallelogramSpan = document.getElementById('parallelogram_area');
//     parallelogramSpan.innerText = area;
//     console.log(area)
// }

function parallelogramArea() {
    const base = inputValueById('parallelogram_input_base');
    const height = inputValueById('parallelogram_input_height');
    const area =  base* height;
    console.log(area)

}

function inputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldText = inputField.value;
  const inputValue = parseFloat(inputFieldText);
  return inputValue;
}
