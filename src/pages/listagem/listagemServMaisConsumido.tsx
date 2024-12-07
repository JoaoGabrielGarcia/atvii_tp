import React, { Component } from "react";
import TableComponent from "../../components/Table";

class ListagemServMaisConsumido extends Component {
  state = {
    data: [
      { Nome: "Eve", Serviço: "Corte de Cabelo", Quantidade: 5 },
      { Nome: "Charlie", Serviço: "Massagem", Quantidade: 3 },
    ],
  };

  render() {
    const headers = ["Nome", "Serviço", "Quantidade"];
    return (
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">
          Clientes que Mais Consumiram Serviços
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

export default ListagemServMaisConsumido;
