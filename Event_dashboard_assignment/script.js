const inputbox = document.querySelector("#inputbox");
const addbtn = document.querySelector("#addbtn");
const list = document.querySelector("#list");

function createList() {
  list.innerHTML = "";
  listData.forEach((element, i) => {
    const eachList = document.createElement("div");

    eachList.innerHTML = `<p>${inputbox.value}</p><button onclick='DeleteHandler(${i})'>Delete</button><button onclick='EditHandler(${i})'>Edit</button>`;
    list.append(eachList);
    eachList.setAttribute("class", "eachList");
  });
}

addbtn.addEventListener("click", () => {
  let listData = [];

  if (inputbox.value !== "") {
    listData.push({ listvalue: inputbox.value });

    listData.forEach((element, i) => {
      const eachList = document.createElement("div");

      eachList.innerHTML = `<p>${inputbox.value}</p><button onclick='DeleteHandler(${i})'>Delete</button><button onclick='EditHandler(${i})'>Edit</button>`;
      list.append(eachList);
      eachList.setAttribute("class", "eachList");
    });
  }
});

function DeleteHandler(i) {
  listData.splice(i, 1);
  list.innerHTML = "";
  listData.forEach((element, i) => {
    const eachList = document.createElement("div");

    eachList.innerHTML = `<p>${inputbox.value}</p><button onclick='DeleteHandler(${i})'>Delete</button><button onclick='EditHandler(${i})'>Edit</button>`;
    list.append(eachList);
    eachList.setAttribute("class", "eachList");
  });
}

function EditHandler(i) {}
