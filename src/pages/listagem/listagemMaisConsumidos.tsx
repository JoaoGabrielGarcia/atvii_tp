import React, { Component } from "react";
import TableComponent from "../../components/Table";

class ListagemMaisConsumidos extends Component {
  state = {
    data: [
      { Item: "Shampoo", Tipo: "Produto", Quantidade: 50 },
      { Item: "Corte de Cabelo", Tipo: "Serviço", Quantidade: 30 },
    ],
  };

  render() {
    const headers = ["Item", "Tipo", "Quantidade"];
    return (
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">
          Produtos e Serviços Mais Consumidos
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

export default ListagemMaisConsumidos;
