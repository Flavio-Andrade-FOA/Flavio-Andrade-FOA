export class User {
  constructor(name, email, password, role, active ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role || 'student';
    this.active = active || true;
  }

  printInfo(){
    return this.name + ' ' + this.email + ' ' + this.role;
  }
}

const user1 = new User('Flavio', 'foa@foa.com', '322332');
console.log(user1);
console.log(user1.printInfo());

export class Admin extends User {
  constructor(name, email, password, role){
    super(name, email, password, role);

  }
  createCorse(){
    return 'Curso ciado com sucesso.';
  }

}

const admi = new Admin('Jhon Doe', 'jhon@exemple.com', 'ssssss', 'admin' );
console.log(admi);
console.log(admi.printInfo());
console.log(admi.createCorse());

function nomee(novoNome){
  let [nome, sobrenome] = novoNome.split(' ');
  console.log('nome',nome);
  console.log('sobrenome',sobrenome);
  console.log(sobrenome);

}

console.log(nomee('flavio andrade'));

