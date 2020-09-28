class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List{
  constructor() {
    super();

    this.usuario= 'Millena';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1,2));

const usuario = {
  nome: "Millena"
};

usuario.nome= 'Banana';

console.log(usuario);

function teste(x) {
  let y = 2;

  if(x>5) {

    let y = 4;
    console.log(x,y);
  }
}

teste(10);

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
  return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
  return total + next;
})

console.log(sum);

const filter = arr.filter(function(item) {
  return item%2 === 0;
})

console.log(filter)

const find = arr.find(function(item){
  return item === 4;
})

console.log(find);

//Arrow functions


// const newerArr = arr.map((item) => {
//   return item * 2;
// })

//  Apenas um parametro então não precisa do parentesis =====>

// const newerArr = arr.map(item => {
//   return item * 2;
// })

// Retorno de uma linha sem outras operações ======>

const newerArr = arr.map(item => item * 2)

console.log(newerArr);

//const testeObj = () => { nome: 'Diego'} ====> não funciona porque as chaves são usadas para o corpo da funcão e confunde com o retorno de objeto
// versão funcional da arrow function que retorna um objeto

const testeObj = () => ({ nome: 'Diego'});

console.log(testeObj());

//Valores padrãoptimize

// function newerSoma(a = 3,b = 6) {
//   return a + b;
// }

const newerSoma = (a = 3,b = 6) => a + b;

console.log(newerSoma(1));
console.log(newerSoma());
