const user = {
  name: 'John',
  email: 'james@example.com',
  date_nasc: '2000/01/08',
  role: 'admin',
  active: true,

  printInfo() {
    console.log(this.name);
  }
};

user.printInfo();

function exibeInfos() {
  console.log(this.nome, this.email);
}

const userr = {
  nome: 'Mariana',
  email: 'm@m.com'
};

exibeInfos.call(userr);

function exibeMensagem(nome, email) {
  console.log(`usuário: ${nome}, email ${email}`);
}
const userrrr = {
  nome: 'Mariana',
  email: 'm@m.com',
  executaFuncao: function(fn) {
    fn.call(userrrr, this.nome, this.email);
  }
};

user.executaFuncao(exibeMensagem); //usuário: Mariana, email m@m.com

function exibeMensagemm(nome, email) {
  console.log(`usuário: ${nome}, email ${email}`);
}
const userrrrr = {
  nome: 'Mariana',
  email: 'm@m.com',
  executaFuncao: function(fn) {
    fn.apply(userrrrr, [this.nome, this.email]);
  }
};
user.executaFuncao(exibeMensagemm); //usuário: Mariana, email m@m.com