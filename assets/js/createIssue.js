const labelsContainer = document.querySelector(".labels-container");
const labelInput = document.querySelector("#label-input");
const inputBtn = document.querySelector(".btn-input");
const checkbox = document.querySelector(".label-checkbox");
const data = labelsContainer.dataset.labels;
const labels = JSON.parse(data);

function renderLabel(item) {
  const html = `
    <label>
        <input type="checkbox" name="checkboxValue" value=${item
          .replaceAll(" ", "-")
          .trim()}>
        ${item}
    </label>
    `;
  checkbox.insertAdjacentHTML("beforeend", html);
}

function toDisplayLabels() {
  labels.forEach((item) => {
    renderLabel(item);
  });
}

toDisplayLabels();

inputBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(labelInput.value);
  labels.push(labelInput.value);
  renderLabel(labelInput.value);
  labelInput.value = "";
});
