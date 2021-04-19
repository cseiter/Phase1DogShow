const rootURL = "http://localhost:3000/dogs"

function getDogs() {
    return fetch(rootURL)
    .then(r => r.json())
}

getDogs().then(console.log);