//map
const numbers = [10, 304, 42420, 9000];

const newNumbers = numbers.map ((numbers) => {
    return numbers + 1000;
});

//reduce
const nomes = [
    { nome: 'João', sobrenome: 'Silva' },
    { nome: 'Maria', sobrenome: 'Souza' },
    { nome: 'Carlos', sobrenome: 'Ferreira' }
];

const nomeSobrenome = nomes.reduce ((total, next) =>{
    return total + next.nome + ' ' + next.sobrenome + ', ';
}, '');

//filter

const todos = [
    {text: 'lavar louça', done: false},
    {text: 'botar o lixo fora', done: true},
    {text: 'preparar o almoço', done: false},
];

const doneTodos = todos.filter ((todo) =>{
    return todo.done === false
});

//find

const todolist = [
    {text: 'lavar louça', done: false},
    {text: 'botar o lixo fora', done: true},
    {text: 'preparar o almoço', done: false},
]

const doneTodoList = todos.find ((todo) =>{
    return todo.text === 'preparar o almoço';
});

//some

const hasMovie = [
    'Harry Potter','Oppenheimer','Interestelar'
];

const searchMovie = hasMovie.some ((search) =>{
    return search === 'Oppenheimer'
});