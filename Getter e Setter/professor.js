/* Módulo: Front-End II 
Curso: Desenvolvedor Full Stack Jr.
Mentor: Gabriel Lennon
Aluna: Beatriz Sartori */

//Herança
import Aluno from './aluno.js';

class Professor extends Aluno {
    constructor(nome,email,matricula) {
        super(nome,email,matricula)
    }

    // Polimorfismo
    exibirInformacoes() {
        return 'Nome do professor: ${this.nome}';
    }
}

// Digitar "npm init -y" no Terminal para abrir o package.json, e adicionar ' "type": "module" '

const professor1 = new Professor('Maurilio Benevento', 'maurilio.benevento@gmail.com', '20030101');
console.log(professor1.exibirInformacoes());
