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
