const selectItem = document.getElementById("item");
const textDiv = document.getElementById("text");
const imgDiv = document.getElementById("imgDiv");
let data = [];
fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((item) => {
    data = [...item];
    updateData();
  });

updateData = () => {
  selectItem.innerHTML = data.map((element) => {
    return `<option value = ${element.id}>${element.name}</option>`;
  });
};
selectItem.addEventListener("change", () => {
  const selectedIndex = selectItem.selectedIndex;
  const selectedOption = selectItem[selectedIndex].value;
  data.forEach((element) => {
    if (element.id === selectedOption) {
      textDiv.innerHTML = `
        <h3><span>Type: </span><span>${element.type}</span></h3>
        <h3><span>Color: </span><span>${element.col}</span></h3>
        <h3><span>Size: </span><span>${element.size}</span></h3>
      `;
      imgDiv.style.backgroundImage = `url(${element.img})`;
    }
  });
});
