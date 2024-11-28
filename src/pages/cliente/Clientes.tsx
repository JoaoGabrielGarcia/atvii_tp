import React from 'react';
import TableComponent from '../../components/Table';
import Modal from '../../components/Modal';
import CadastroCliente from './cadastro-cliente/cadastroCliente';

class Clientes extends React.Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  handleSave = (formData: any) => {
    console.log("Dados salvos!", formData);
    this.closeModal();
  };

  render() {
    const { isModalOpen } = this.state;

    // Cabeçalhos da tabela
    const headers = ['Nome', 'Nome Social', 'Gênero', 'CPF', 'RG', 'Data de Cadastro', 'Telefone'];

    // Dados originais
    const rawData = [
      { Nome: 'Mark', 'Nome Social': 'AAA', Gênero: 'Masculino', CPF: '123.456.789-01', RG: '12.345.678-9', 'Data de Cadastro': '28/11/2024', Telefone: '(12) 12345-6789' },
      { Nome: 'Jacob', 'Nome Social': 'AAA', Gênero: 'Masculino', CPF: '123.456.789-02', RG: '12.345.678-8', 'Data de Cadastro': '28/11/2024', Telefone: '(12) 12345-6789' },
      { Nome: 'Larry', 'Nome Social': 'AAA', Gênero: 'Masculino', CPF: '123.456.789-03', RG: '12.345.678-7', 'Data de Cadastro': '28/11/2024', Telefone: '(12) 12345-6789' },
    ];

    return (
      <div className="p-4">
        <h1 className="text-xl font-bold text-white mb-4">Clientes</h1>
        <div className="flex flex-row-reverse p-1">
          {/* Botão para abrir o modal */}
          <button
            className="px-2 py-2 m-2 bg-lime-500 text-white rounded-full hover:bg-lime-400"
            onClick={this.openModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
        <div className="overflow-x-auto max-w-screen-lg mx-auto">
          <TableComponent headers={headers} data={rawData} />
        </div>

        {/* Modal para formulário */}
        <Modal
          isOpen={isModalOpen}
          title="Cadastrar Cliente"
          onClose={this.closeModal}
          onSubmit={() => {}}
        >
          <CadastroCliente onSave={this.handleSave} />
        </Modal>
      </div>
    );
  }
}

export default Clientes;
