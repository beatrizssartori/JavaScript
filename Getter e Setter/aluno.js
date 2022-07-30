/* Módulo: Front-End II 
Curso: Desenvolvedor Full Stack Jr.
Mentor: Gabriel Lennon
Aluna: Beatriz Sartori */

export default class Aluno { //export default = essa classe pode ser usada por qualquer arquivo
    // Atributo privado
    #matricula
    constructor(nome, email, matricula) {
        this.nome = nome;
        this.email = email;
        this.#matricula = matricula;
    }

    //Getter - Método acessor para retornar dado (para leitura)
    get matricula() {
        return this.#matricula
    }

    //Setter - Método acessor para alterar dados (para escrita)
    set matricula(novaMatricula) {
        if (novaMatricula == '') {
            throw new Error('Por favor, preencha uma matrícula válida')
        }
        this.#matricula = novaMatricula
    }

    exibirInformacoes() {
        return 'Nome: ${this.nome}, matrícula: ${this.matricula}';
    }
}

// const aluno1 = new Aluno('Beatriz', 'bissartori@gmail.com', '20211103');
// console.log(aluno1.matricula);

// // No terminal Git Bash: Digitar "node aluno.js" para aparecer o console.log

// // Chamando o setter (alterar dado)
// aluno1.matricula = '20211104'
// console.log(aluno1.matricula);
