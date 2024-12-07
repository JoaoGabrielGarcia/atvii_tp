// clientesBase.ts
interface Cliente {
    nome: string;
    nomeSocial: string;
    genero: string;
    cpf: string;
    rg: string;
    dataCadastro: string;
    telefone: string;
  }
  
  const clientesBase: Cliente[] = [
    { nome: "Ana Silva", nomeSocial: "Ana S.", genero: "Feminino", cpf: "12345678901", rg: "89759465", dataCadastro: "15/05/1985", telefone: "(12) 97846-5123" },
    { nome: "Bruno Souza", nomeSocial: "Bruno S.", genero: "Masculino", cpf: "12345678902", rg: "89759466", dataCadastro: "20/10/1990", telefone: "(13) 97846-5124" },
    { nome: "Carla Oliveira", nomeSocial: "Carla Ol.", genero: "Feminino", cpf: "12345678903", rg: "89759467", dataCadastro: "25/02/1993", telefone: "(14) 97846-5125" },
    { nome: "Diego Santos", nomeSocial: "Diego S.", genero: "Masculino", cpf: "12345678904", rg: "89759468", dataCadastro: "12/07/1988", telefone: "(15) 97846-5126" },
    { nome: "Eduarda Lima", nomeSocial: "Eduarda Li.", genero: "Feminino", cpf: "12345678905", rg: "89759469", dataCadastro: "28/01/1995", telefone: "(16) 97846-5127" },
    { nome: "Fernando Gomes", nomeSocial: "Fernando G.", genero: "Masculino", cpf: "12345678906", rg: "89759470", dataCadastro: "09/09/1987", telefone: "(17) 97846-5128" },
    { nome: "Gabriela Costa", nomeSocial: "Gabriela C.", genero: "Feminino", cpf: "12345678907", rg: "89759471", dataCadastro: "17/04/1994", telefone: "(18) 97846-5129" },
    { nome: "Henrique Alves", nomeSocial: "Henrique Al.", genero: "Masculino", cpf: "12345678908", rg: "89759472", dataCadastro: "21/06/1991", telefone: "(19) 97846-5130" },
    { nome: "Isabela Nunes", nomeSocial: "Isabela N.", genero: "Feminino", cpf: "12345678909", rg: "89759473", dataCadastro: "30/03/1992", telefone: "(20) 97846-5131" },
    { nome: "João Pereira", nomeSocial: "João P.", genero: "Masculino", cpf: "12345678910", rg: "89759474", dataCadastro: "05/08/1986", telefone: "(21) 97846-5132" },
  ];
  
  export default clientesBase;
  