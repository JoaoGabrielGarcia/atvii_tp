import React, { Component } from "react";
import TableComponent from "../../components/Table";

class ListagemProdMaisConsumido extends Component {
  state = {
    data: [
      { Nome: "Alice", Produto: "Shampoo", Quantidade: 10 },
      { Nome: "Bob", Produto: "Condicionador", Quantidade: 8 },
    ],
  };

  render() {
    const headers = ["Nome", "Produto", "Quantidade"];
    return (
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">
          Clientes que Mais Consumiram Produtos
        </h2>
        <TableComponent
          headers={headers}
          data={this.state.data}
          onRowSelect={() => {}}
          onEdit={() => {}}
          showEditButton={false} // Sem botão de edição
        />
      </div>
    );
  }
}

export default ListagemProdMaisConsumido;
