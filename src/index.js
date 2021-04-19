const rootURL = "http://localhost:3000/dogs"
const testDogsArray = [
    {
      "id": 1,
      "name": "Baby",
      "breed": "Scottish Deerhound",
      "sex": "male"
    },
    {
      "id": 2,
      "name": "Teddy",
      "breed": "Rhodesian Ridgeback",
      "sex": "female"
    },
    {
      "id": 3,
      "name": "Snickers",
      "breed": "Dachshund",
      "sex": "female"
    },
    {
      "id": 4,
      "name": "Harvey",
      "breed": "Irish Spaniel",
      "sex": "male"
    }
]

const testDog = {
    "id": 1,
    "name": "Baby",
    "breed": "Scottish Deerhound",
    "sex": "male"
  }

function getDogs() {
    return fetch(rootURL)
    .then(r => r.json())
}

function createDogRow (dogObj) {
    const trDog = document.createElement('tr'),
        tdName = document.createElement('td'),
        tdBreed = document.createElement('td'),
        tdSex = document.createElement('td'),
        tdEdit = document.createElement('td');
    tdName.innerText = dogObj.name;
    tdBreed.innerText = dogObj.breed;
    tdSex.innerText = dogObj.sex;
    tdEdit.innerHTML = `<button id=${dogObj.id}>Edit</button>`
    trDog.append(tdName,tdBreed,tdSex,tdEdit);
    return trDog;
}

function showDogs(dogsArray) {
    const tableContainer = document.getElementById('table-body');
    dogsArray.forEach(dogObj => {
        constDogRow = createDogRow(dogObj);
        tableContainer.appendChild(constDogRow);
    });
}

getDogs().then(showDogs);
