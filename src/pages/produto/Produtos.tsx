import React from "react";
import TableComponent from "../../components/Table";
import AtualizarProduto from "./atualizar-produto/atualizarProduto";
import CadastroProduto from "./cadastro-produto/cadastroProduto";
import DeletarProduto from "./deletar-produto/deletarProduto";

interface Produto {
  ID: number;
  Nome: string;
  Preço: number;
}

interface State {
  produtos: Produto[];
  modalCadastroOpen: boolean;
  modalAtualizarOpen: boolean;
  selectedRows: number[]; // Índices das linhas selecionadas
  editRowData: Produto | null; // Dados da linha a ser editada
}

class Produtos extends React.Component<{}, State> {
  state: State = {
    produtos: [
      { ID: 1, Nome: "Shampoo", Preço: 25.0 },
      { ID: 2, Nome: "Condicionador", Preço: 30.0 },
    ],
    modalCadastroOpen: false,
    modalAtualizarOpen: false,
    selectedRows: [],
    editRowData: null,
  };

  abrirModalCadastro = () => {
    this.setState({ modalCadastroOpen: true });
  };

  abrirModalAtualizar = (produto: Produto) => {
    this.setState({ modalAtualizarOpen: true, editRowData: produto });
  };

  fecharModais = () => {
    this.setState({
      modalCadastroOpen: false,
      modalAtualizarOpen: false,
      editRowData: null,
    });
  };

  salvarProduto = (produto: Produto) => {
    this.setState((prevState) => ({
      produtos: [...prevState.produtos, { ...produto, ID: prevState.produtos.length + 1 }],
      modalCadastroOpen: false,
    }));
  };

  atualizarProduto = (produtoAtualizado: Produto) => {
    this.setState((prevState) => ({
      produtos: prevState.produtos.map((produto) =>
        produto.ID === produtoAtualizado.ID ? produtoAtualizado : produto
      ),
      modalAtualizarOpen: false,
      editRowData: null,
    }));
  };

  handleRowSelect = (selectedRows: number[]) => {
    this.setState({ selectedRows });
  };

  handleDelete = () => {
    const { produtos, selectedRows } = this.state;
    const produtosAtualizados = produtos.filter((_, index) => !selectedRows.includes(index));
    this.setState({ produtos: produtosAtualizados, selectedRows: [] });
  };

  render() {
    const { produtos, modalCadastroOpen, modalAtualizarOpen, selectedRows, editRowData } = this.state;

    const data = produtos.map((item) => ({
      ...item,
      Preço: `R$ ${item.Preço.toFixed(2).replace(".", ",")}`,
    }));

    return (
      <div className="p-4">
        <h2 className="text-xl font-bold text-white mb-4">Gerenciamento de Produtos</h2>
        <div className="flex flex-row-reverse p-1 items-center">
          <button
            className="px-2 py-2 m-2 bg-lime-500 text-white rounded-full hover:bg-lime-400"
            onClick={this.abrirModalCadastro}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>

          <DeletarProduto selectedRows={selectedRows} onDelete={this.handleDelete} />
        </div>
        <div className="overflow-x-auto max-w-screen-lg mx-auto">
          <TableComponent
            headers={["ID", "Nome", "Preço"]}
            data={data}
            onRowSelect={this.handleRowSelect}
            onEdit={(index) => this.abrirModalAtualizar(produtos[index])}
            showEditButton={true}
          />
        </div>

        <CadastroProduto
          isModalOpen={modalCadastroOpen}
          onClose={this.fecharModais}
          onSave={this.salvarProduto}
        />
        <AtualizarProduto
          isModalOpen={modalAtualizarOpen}
          onClose={this.fecharModais}
          onSave={this.atualizarProduto}
          editRowData={editRowData}
        />
      </div>
    );
  }
}

export default Produtos;
