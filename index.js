let outerCard = document.querySelector(".outer-card");
const addButton = document.querySelector(".add-button");
const nameInput = document.querySelector("#name-input");
const familyInput = document.querySelector("#family-input");
const ageInput = document.querySelector("#age-input");
const cityInput = document.querySelector("#city-input");
const streetInput = document.querySelector("#street-input");
const deletebutton = document.querySelector(".delete-button");
const showError1 = document.querySelector(".show-error-1")
const showError2 = document.querySelector(".show-error-2")
const errorText1 = document.createElement("p")
const errorText2 = document.createElement("p")
window.addEventListener("load", () => {
  readData();
});
addButton.addEventListener("click", () => {
  getValues();
  clearInputs()
});
nameInput.addEventListener("input", ()=>{
  nameCheckValidation()
})
familyInput.addEventListener("input",()=>{
  familyCheckValidation()
})
function nameCheckValidation(){
  if(nameInput.value.trim() !== null){
    addButton.disabled = false
    errorText1.innerHTML = ""

  }else{
    addButton.disabled = true

  }
}
function familyCheckValidation(){
  if(familyInput.value.trim() !== null){
    addButton.disabled = false
    errorText2.innerHTML = ""

  }else{
    addButton.disabled = true

  }
}
const data = [
  {
    name: "test 1",
    family: "test 1 family",
    address: {
      city: "tehran",
      street: "satarkhan",
    },
    age: 31,
  },
  {
    name: "test 2",
    family: "test 2 family",
    address: {
      city: "tehran",
      street: "satarkhan",
    },
    age: 31,
  },
  {
    name: "test 3",
    family: "test 3 family",
    address: null,
    age: null,
  },
];
function createCard(user) {
  let card = document.createElement("div");
  card.classList.add("card");
  let name = document.createElement("div");
  name.classList.add("name");
  let namesLabel = document.createElement("p");
  namesLabel.innerHTML = "name:";
  let userName = document.createElement("p");
  userName.innerHTML = user.name;

  name.appendChild(namesLabel);
  name.appendChild(userName);
  card.appendChild(name);

  let family = document.createElement("div");
  family.classList.add("family");
  let familysLabel = document.createElement("p");
  familysLabel.innerHTML = "family:";
  let userFamily = document.createElement("p");
  userFamily.innerHTML = user.family;
  family.appendChild(familysLabel);
  family.appendChild(userFamily);
  card.appendChild(family);

  let address = document.createElement("div");
  address.classList.add("address");
  let addresssLabel = document.createElement("p");
  addresssLabel.innerHTML = "adress:";
  let userAddress = document.createElement("p");
  userAddress.innerHTML = `${user.address?.city ?? "-"} - ${
    user.address?.street ?? "-"
}`;
  address.appendChild(addresssLabel);
  address.appendChild(userAddress);
  card.appendChild(address);
  let age = document.createElement("div");
  age.classList.add("age");
  let agesLabel = document.createElement("p");
  agesLabel.innerHTML = "age:";
  let userAge = document.createElement("p");
  userAge.innerHTML = user.age ?? "-";
  age.appendChild(agesLabel);
  age.appendChild(userAge);
  card.appendChild(age);

  let deletebutton = document.createElement("button");
  deletebutton.classList.add("delete-button");
  deletebutton.innerHTML = "delete";
  card.appendChild(deletebutton);
  deletebutton.addEventListener("click", (event) => {
    // function deleteElement(){
    //     event.target.parentElement.remove()
    // }
    deleteCard(user, event);
  });
  outerCard.appendChild(card);
}

function getValues() {
  let name = nameInput.value;
  let family = familyInput.value;
  if (!(name && family)) {
    checkForEmptyName()
  }else{

    let age = ageInput.value;
    let city = cityInput.value;
    let street = streetInput.value;
    let address = {
      city: city,
      street: street,
    };
    let newData = {
      name: name,
      family: family,
      address: address,
      age: age,
    }; 
    let localData = JSON.parse(localStorage.getItem("data"))
    console.log(localData,'==========');
    if(localData){
      localData.push(newData)
      let stringData = JSON.stringify(localData);
      localStorage.setItem("data", stringData);
      createCard(newData)
    }else{
      console.log(data)
      data.push(newData)
      let stringData = JSON.stringify(data)
      localStorage.setItem("data",stringData)
      createCard(newData)
    }
  }
}
function readData() {
  let localData = localStorage.getItem("data");
  let responseData = data;
  let usersData = JSON.parse(localData) ?? responseData;
  usersData.forEach((item) => {
    createCard(item);
  });
}

function deleteCard(user) {

  let localData = localStorage.getItem("data");
  let responseData = data;
  let userData = JSON.parse(localData) ?? responseData;
  // console.log(userData)
  let filtredUsers = userData.filter((item) => item.name !== user.name);
  localStorage.setItem("data", JSON.stringify(filtredUsers));
  event.target.parentElement.remove()
//   console.log(filtredUsers);
}


function clearInputs(){
  nameInput.value = ""
  familyInput.value= ""
  ageInput.value = ""
  cityInput.value = "-"
  streetInput.value = ""
}



function checkForEmptyName(){
 addButton.disabled = true
 errorText1.innerHTML = "*پر کردن این فیلد الزامیست!"
 errorText2.innerHTML = "*پر کردن این فیلد الزامیست!"
  showError1.appendChild(errorText1)
  showError2.appendChild(errorText2)
}

// function getDataFromLocalStorage(){
//   let localData = localStorage.getItem("data");
//   let responseData = data;
//   let userData = JSON.parse(localData) ?? responseData;
// }
// getDataFromLocalStorage()