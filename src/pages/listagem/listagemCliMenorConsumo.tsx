import React, { Component } from "react";
import TableComponent from "../../components/Table";

class ListagemCliMenorConsumo extends Component {
  state = {
    data: [
      { Nome: "Eve", Consumo: 1 },
      { Nome: "Charlie", Consumo: 2 },
    ],
  };

  render() {
    const headers = ["Nome", "Consumo"];
    return (
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">
          Clientes com Menor Consumo
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

export default ListagemCliMenorConsumo;
