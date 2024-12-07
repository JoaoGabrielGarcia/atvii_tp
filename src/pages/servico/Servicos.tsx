import React from 'react';
import TableComponent from '../../components/Table';
import AtualizarServico from './atualizar-servico/atualizarServico';
import CadastroServico from './cadastro-servico/cadastroServico';
import DeletarServico from './deletar-servico/deletarServico';

interface Servico {
  ID: number;
  Nome: string;
  Preço: number;
}

interface State {
  servicos: Servico[];
  modalCadastroOpen: boolean;
  modalAtualizarOpen: boolean;
  selectedRows: number[];
  editRowData: Servico | null;
}

class Servicos extends React.Component<{}, State> {
  state: State = {
    servicos: [
      { ID: 1, Nome: 'Corte de Cabelo', Preço: 50.0 },
      { ID: 2, Nome: 'Manicure', Preço: 40.0 },
    ],
    modalCadastroOpen: false,
    modalAtualizarOpen: false,
    selectedRows: [],
    editRowData: null,
  };

  abrirModalCadastro = () => {
    this.setState({ modalCadastroOpen: true });
  };

  abrirModalAtualizar = (servico: Servico) => {
    this.setState({ modalAtualizarOpen: true, editRowData: servico });
  };

  fecharModais = () => {
    this.setState({
      modalCadastroOpen: false,
      modalAtualizarOpen: false,
      editRowData: null,
    });
  };

  salvarServico = (servico: Servico) => {
    this.setState((prevState) => ({
      servicos: [...prevState.servicos, { ...servico, ID: prevState.servicos.length + 1 }],
      modalCadastroOpen: false,
    }));
  };

  atualizarServico = (servicoAtualizado: Servico) => {
    this.setState((prevState) => ({
      servicos: prevState.servicos.map((servico) =>
        servico.ID === servicoAtualizado.ID ? servicoAtualizado : servico
      ),
      modalAtualizarOpen: false,
      editRowData: null,
    }));
  };

  handleRowSelect = (selectedRows: number[]) => {
    this.setState({ selectedRows });
  };

  handleDelete = () => {
    const { servicos, selectedRows } = this.state;
    const servicosAtualizados = servicos.filter((_, index) => !selectedRows.includes(index));
    this.setState({ servicos: servicosAtualizados, selectedRows: [] });
  };

  render() {
    const { servicos, modalCadastroOpen, modalAtualizarOpen, selectedRows, editRowData } = this.state;

    const data = servicos.map((item) => ({
      ...item,
      Preço: `R$ ${item.Preço.toFixed(2).replace('.', ',')}`,
    }));

    return (
      <div className="p-4">
        <h2 className="text-xl font-bold text-white mb-4">Gerenciamento de Serviços</h2>
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

          <DeletarServico selectedRows={selectedRows} onDelete={this.handleDelete} />
        </div>
        <div className="overflow-x-auto max-w-screen-lg mx-auto">
          <TableComponent
            headers={['ID', 'Nome', 'Preço']}
            data={data}
            onRowSelect={this.handleRowSelect}
            onEdit={(index) => this.abrirModalAtualizar(servicos[index])}
            showEditButton={true}
          />
        </div>

        <CadastroServico
          isModalOpen={modalCadastroOpen}
          onClose={this.fecharModais}
          onSave={this.salvarServico}
        />
        <AtualizarServico
          isModalOpen={modalAtualizarOpen}
          onClose={this.fecharModais}
          onSave={this.atualizarServico}
          editRowData={editRowData}
        />
      </div>
    );
  }
}

export default Servicos;
