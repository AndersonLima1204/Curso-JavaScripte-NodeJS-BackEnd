// arrays, objetos
let meta = {
    value: "Ler um livro por mês",
    //address: 2,
    checked: false,
    /*log: (info) => {
        console.log(info)
    }*/
}

let metas = [
    meta,
    {
        value: 'Caminhas 20 minutos todos os dias',
        checked: false
    }
]
/*
meta.log(meta.value)

//function // arrow function
const criarMeta = () => {}
function  criaMeta() {

}
*/

console.log(meta.value)
console.log(metas[1].value)