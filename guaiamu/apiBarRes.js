const teste = document.querySelector('#teste')

fetch('./bareserestaurantes.json')
.then((res) => res.json())
.then((data) => {
    data.records.forEach(element => {
        teste.src += `<a href='https://www.google.com'>${element[2]}</a>`
    });
})
