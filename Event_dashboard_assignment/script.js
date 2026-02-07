const inputBox = document.querySelector('#inputBox')
const addBtn = document.querySelector('#addBtn')
const list = document.querySelector('#list')


let listData = []

function createList() {
    list.innerHTML = ''

    listData.forEach((element, i) => {
        // creating div
        const eachList = document.createElement('div')
        // inserting data into div
        eachList.innerHTML = ` <p>${element.listValue}</p>
                <button onclick='DeleteHandler(${i})'>Delete</button>
                <button onclick='EditHandler(${i})'>Edit</button>`
        list.append(eachList)
        eachList.setAttribute('class', 'eachList')
    })

    inputBox.value = ''
}


let editState = null

addBtn.addEventListener('click', () => {
    if (inputBox.value !== '' && editState === null) {

        listData.push({
            listValue: inputBox.value
        })
       
        inputBox.value = ''
        // console.log(listData)   
    }else{

        listData[editState].listValue = inputBox.value
        editState = null
        addBtn.textContent = 'Add'


    }

     createList()
})


function DeleteHandler(i) {
    listData.splice(i, 1)
    createList()

}

function EditHandler(i){

    inputBox.value = listData[i].listValue
    addBtn.textContent = 'Update'
    editState = i
    // listData[i].listValue = 


}


// let arr = [1,2,3,4]

// arr.splice(1,1)
// console.log(arr)

let x= prompt('enter')
