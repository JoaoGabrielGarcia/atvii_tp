import React, { Component } from "react";
import TableComponent from "../../components/Table";

class ListagemCliMaisGastou extends Component {
  state = {
    data: [
      { Nome: "Dan", Gasto: "R$ 300" },
      { Nome: "Grace", Gasto: "R$ 250" },
    ],
  };

  render() {
    const headers = ["Nome", "Gasto"];
    return (
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">
          Clientes que Mais Gastaram
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

export default ListagemCliMaisGastou;
