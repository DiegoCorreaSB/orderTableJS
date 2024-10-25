//ref html
const tableContainer = document.getElementById ('tableContainer');
const btnId = document.getElementById ('btnId');
const btnNome = document.getElementById ('btnNome');
const btnDepartamento = document.getElementById ('btnDepartamento');
const btnFuncao = document.getElementById ('btnFuncao');
const btnSalario = document.getElementById ('btnSalario');

//export
import funcionarios from  '../databases/banco.js'

console.log(funcionarios);

function createTable(funcionarios){
    
    //criação cabeçalho da tabela
    let table = document.createElement('table');
    let thead = document.createElement ('thead');
    let headerRow = document.createElement ('tr');
    let column = ['Id', 'Nome', 'Departamento', 'Funcao', 'Salario'];

    column.forEach(column => {
        let th = document.createElement ('th');
        th.innerText = column;
        headerRow.appendChild (th)
    });
    thead.appendChild (headerRow);
    table.appendChild (thead);
    
    let tbody = document.createElement ('tbody');

    //adição dos dados 
    funcionarios.banco.forEach(funcionarios  => {
        let tr = document.createElement ('tr');

        //colunas
        let tdId = document.createElement ('td');
        tdId.innerText = funcionarios.id;
        tr.appendChild (tdId)

        let tdNome = document.createElement ('td');
        tdNome.innerText = funcionarios.nome;
        tr.appendChild (tdNome);

        let tdDepartamento = document.createElement ('td');
        tdDepartamento.innerText = funcionarios.departamento
        tr.appendChild (tdDepartamento);

        let tdFuncao = document.createElement ('td');
        tdFuncao.innerText = funcionarios.funcao;
        tr.appendChild (tdFuncao);

        let tdSalario = document.createElement ('td');
        tdSalario.innerText = `R$ ${funcionarios.salario.toFixed(2)}`
        tr.appendChild (tdSalario)

        tbody.appendChild (tr)
    });

    table.appendChild (tbody)

    tableContainer.appendChild(table)
}

createTable(funcionarios);

function removeTable(){
    tableContainer.innerHTML = ''
}


btnId.addEventListener ('click', () => {
    removeTable()
    funcionarios.banco.sort(((a, b) => a.id - b.id));
    createTable(funcionarios)
});

btnNome.addEventListener ('click', () => {
    removeTable()
    funcionarios.banco.sort((a,b)=>a.nome.localeCompare(b.nome));
    createTable(funcionarios)
});

btnDepartamento.addEventListener ('click', () => {
    removeTable()
    funcionarios.banco.sort((a,b)=>a.departamento.localeCompare(b.departamento));
    createTable(funcionarios)
});

btnFuncao.addEventListener ('click', () => {
    removeTable()
    funcionarios.banco.sort((a,b)=>a.funcao.localeCompare(b.funcao));
    createTable(funcionarios)
});

btnSalario.addEventListener ('click', () => {
    removeTable()
    funcionarios.banco.sort(((a, b) => a.salario - b.salario));
    createTable(funcionarios)

});


