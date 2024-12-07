import React, { Component } from "react";
import ListagemCliMenorConsumo from "./listagemCliMenorConsumo";
import ListagemCliMaisGastou from "./listagemCliMaisGastou";
import ListagemMaisConsumidos from "./listagemMaisConsumidos";
import ListagemProdMaisConsumido from "./listagemProdMaisConsumido";
import ListagemServMaisConsumido from "./listagemServMaisConsumido";

class Listagem extends Component {
  state = {
    selectedFilter: "maisGastou", // Valor padrão do filtro
  };

  handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedFilter: event.target.value });
  };

  renderSelectedFilter() {
    const { selectedFilter } = this.state;

    switch (selectedFilter) {
      case "menorConsumo":
        return <ListagemCliMenorConsumo />;
      case "maisGastou":
        return <ListagemCliMaisGastou />;
      case "maisConsumidos":
        return <ListagemMaisConsumidos />;
      case "prodMaisConsumido":
        return <ListagemProdMaisConsumido />;
      case "servMaisConsumido":
        return <ListagemServMaisConsumido />;
      default:
        return <ListagemCliMaisGastou />;
    }
  }

  render() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold text-white mb-4">Listagem de Filtros</h1>
        <div className="mb-16">
          <label
            htmlFor="filter-select"
            className="block text-white text-sm font-medium mb-2"
          >
            Escolha um filtro:
          </label>
          <select
            id="filter-select"
            className="w-full px-3 py-2  rounded-xl"
            value={this.state.selectedFilter}
            onChange={this.handleFilterChange}
          >
            <option value="menorConsumo">Clientes com Menor Consumo</option>
            <option value="maisGastou">Clientes que Mais Gastaram</option>
            <option value="maisConsumidos">Produtos e Serviços Mais Consumidos</option>
            <option value="prodMaisConsumido">Clientes que Mais Consumiram Produtos</option>
            <option value="servMaisConsumido">Clientes que Mais Consumiram Serviços</option>
          </select>
        </div>
        <div className="overflow-x-auto max-w-screen-lg mx-auto">{this.renderSelectedFilter()}</div>
      </div>
    );
  }
}

export default Listagem;
