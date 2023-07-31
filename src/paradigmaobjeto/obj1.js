const user = {
  name: 'John',
  email: 'james@example.com',
  date_nasc: '2000/01/08',
  role: 'user',
  active: true,

  printInfo() {
    console.log(this.name);
  }
};


const admin = {
  name: 'Manoel da silva alvarenga',
  email: 'james@example.com',
  date_nasc: '2000/01/08',
  role: 'admin',
  active: true,
};

user.printInfo();
console.log(admin.date_nasc);

console.log('_____________________________________________________\n');

Object.setPrototypeOf(admin, user);
admin.printInfo();
admin.active;

// Exemplo de factory function:

function criaUser(nome, email) {
  return {
    nome,
    email,
    exibeInfos() {
      return `${nome}, ${email}`;
    }
  };
}
const newUser = criaUser('Rodrigo', 'r@r.com');
console.log(newUser);
console.log(newUser.exibeInfos());




function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibeInfos = function() {
    return `${nome}, ${email}`;
  };
}

const newUserr = new User('Mariana', 'm@m.com');
console.log(newUserr);
console.log(newUserr.exibeInfos());