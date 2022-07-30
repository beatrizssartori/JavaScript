/* Módulo: Front-End II 
Curso: Desenvolvedor Full Stack Jr.
Mentor: Eduardo Bertozi
Aluna: Beatriz Sartori */

const form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const telefone = document.querySelector('#phone').value;

    const result = criaCad(nome, email, telefone);
    const table = document.querySelector('table');
    table.innerHTML += `
        <tr>
            <tr>${result.nome}</td>
            <td>${result.email}</td>
            <td>${result.telefone}</td>
        <tr>
    `;
})

//Factory function
function criaCad(nome, email, telefone) {
    return {
        nome: nome,
        email: email,
        telefone: telefone
    }
}

const atributo = document.querySelector('#atributo');
atributo.setAttribute("class","atributo");
console.log(atributo);
