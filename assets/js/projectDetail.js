const listItems = document.querySelectorAll(".issue-list-item");
const searchList = document.querySelector(".search-list");
const originalList = document.querySelector(".original-list");
const searchBar = document.querySelector("#search-bar");
const allCheckboxLabel = document.querySelectorAll(".checkbox-label");

let searchListData = [];

function renderSearchList(issueData) {
  originalList.classList.add("hidden");
  searchList.classList.remove("hidden");
  searchList.innerHTML = "";
  issueData.forEach((item) => {
    const html = `
      <li class="issue-list-item">
          <div>
              <h4 class="issue-list-title">${item.title}</h4>
              <p class="issue-list-description">
                ${item.description}
              </p>
              ${(() => {
                let result = "";
                for (let i = 0; i < item.label.length; i++) {
                  result += ` <span class="issue-labels">${item.label[i]}</span>`;
                }
                return result;
              })()}
          </div>
      </li>
      `;
    searchList.insertAdjacentHTML("beforeend", html);
  });
}

searchBar.addEventListener("input", function (e) {
  console.log(e.target.value);
  const newList = [];
  if (e.target.value !== "") {
    listItems.forEach((item) => {
      const data = JSON.parse(item.dataset.issueitem);
      if (
        data.title.includes(e.target.value) ||
        data.description.includes(e.target.value)
      ) {
        newList.push(data);
      }
    });
    searchListData = [...newList];
    renderSearchList(newList);
  } else {
    originalList.classList.remove("hidden");
    searchList.classList.add("hidden");
  }
});

allCheckboxLabel.forEach((item) => {
  item.firstElementChild.addEventListener("click", function (e) {
    console.log(e.target.checked);
    let filter = [];
    if (e.target.checked && !searchListData.length) {
      listItems.forEach((item) => {
        const data = JSON.parse(item.dataset.issueitem);
        if (data.label.includes(e.target.value)) {
          filter.push(data);
        }
      });
    } else if (e.target.checked && searchListData.length) {
      searchListData.forEach((item) => {
        const data = JSON.parse(item.dataset.issueitem);
        if (data.label.includes(e.target.value)) {
          filter.push(data);
        }
      });
    } else if (!e.target.checked) {
      originalList.classList.remove("hidden");
      searchList.classList.add("hidden");
      return;
    }
    renderSearchList(filter);
  });
});
