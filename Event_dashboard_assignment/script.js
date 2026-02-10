const inputBox = document.querySelector("#inputBox");
const dateBox = document.querySelector("#dateBox");
const infoBox = document.querySelector("#infoBox");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

let listData = [];
let editState = null;

function createList() {
  list.innerHTML = "";

  listData.forEach((element, i) => {
    const eachList = document.createElement("div");
    eachList.innerHTML = `<p><strong>Text:</strong> ${element.textValue}</p>
                <p><strong>Date:</strong> ${element.dateValue || "-"}</p>
                <p><strong>Info:</strong> ${element.infoValue || "-"}</p>
                <button onclick='DeleteHandler(${i})'>Delete</button>
                <button onclick='EditHandler(${i})'>Edit</button>
                <hr>`;
    list.append(eachList);
  });

  inputBox.value = "";
  dateBox.value = "";
  infoBox.value = "";
  inputBox.focus();
}

addBtn.addEventListener("click", () => {
  const textValue = inputBox.value.trim();
  const dateValue = dateBox.value.trim();
  const infoValue = infoBox.value.trim();

  if (textValue === "") return;

  if (editState === null) {
    listData.push({
      textValue,
      dateValue,
      infoValue,
    });
  } else {
    listData[editState] = {
      textValue,
      dateValue,
      infoValue,
    };
    editState = null;
    addBtn.textContent = "Add";
  }

  createList();
});

function DeleteHandler(i) {
  listData.splice(i, 1);

  if (editState === i) {
    editState = null;
    addBtn.textContent = "Add";
    inputBox.value = "";
    dateBox.value = "";
    infoBox.value = "";
  } else if (editState !== null && i < editState) {
    editState -= 1;
  }

  createList();
}

function EditHandler(i) {
  inputBox.value = listData[i].textValue;
  dateBox.value = listData[i].dateValue;
  infoBox.value = listData[i].infoValue;
  addBtn.textContent = "Update";
  editState = i;
  inputBox.focus();
}

window.DeleteHandler = DeleteHandler;
window.EditHandler = EditHandler;
