import React from "react";
import { Link } from "react-router-dom";
import TableComponent from "../../components/Table";
import DeletarCliente from "./deletar-cliente/deletarCliente";
import AtualizarCliente from "./atualizar-cliente/atualizarCliente";
import clientesBase from "../../mock/clientesBase";
import ListagemGenero from "../listagem/listagemGenero";
import { ClienteData } from "./cadastro-cliente/cadastroCliente";

// Função para formatar CPF
const formatCPF = (cpf: string): string =>
  String(cpf).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

const formatRG = (rg: string): string =>
  rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");

class Clientes extends React.Component {
  state = {
    isModalOpen: false,
    editRowData: null as Record<string, any> | null,  // Garantindo que editRowData seja do tipo ClienteData
    rawData: clientesBase.map((cliente) => ({
      Nome: cliente.nome,
      "Nome Social": cliente.nomeSocial,
      Gênero: cliente.genero,
      cpf: formatCPF(cliente.cpf),
      rg: formatRG(cliente.rg),
      "Data de Cadastro": cliente.dataCadastro,
      Telefone: cliente.telefone,
    })),
    selectedRows: [] as number[],
    selectedGenero: "Todos",
  };

  openModal = () => this.setState({ isModalOpen: true, editRowData: null });
  closeModal = () => this.setState({ isModalOpen: false, editRowData: null });

  handleGeneroChange = (genero: string) => {
    this.setState({ selectedGenero: genero });
  };

  handleSave = (formData: ClienteData) => {
    const { rawData, editRowData } = this.state;

    if (editRowData && formData.cpf) {
      // Atualizar o dado existente
      const updatedData = rawData.map((row) =>
        row.cpf === editRowData.cpf ? { ...row, ...formData } : row
      );
      this.setState({ rawData: updatedData });
    } else {
      // Adicionar novo dado
      this.setState({ rawData: [...rawData, formData] });
    }

    this.closeModal();
  };

  handleRowSelect = (selectedRows: number[]) => {
    this.setState({ selectedRows });
  };

  handleDelete = () => {
    const { rawData, selectedRows } = this.state;
    const updatedData = rawData.filter((_, index) => !selectedRows.includes(index));
    this.setState({ rawData: updatedData, selectedRows: [] });
  };

  handleEdit = (rowIndex: number, rowData: Record<string, any>) => {
    this.setState({ isModalOpen: true, editRowData: rowData });
  };

  

  render() {
    const { isModalOpen, rawData, selectedRows, editRowData, selectedGenero } = this.state;

    const filteredData = selectedGenero === "Todos"
      ? rawData
      : rawData.filter((cliente) => cliente.Gênero === selectedGenero);

    const headers = ["Nome", "Nome Social", "Gênero", "CPF", "RG", "Data de Cadastro", "Telefone", "Consumação"];

    const data = filteredData.map((cliente) => ({
      ...cliente,
      Consumação: (
        <button className="px-2 py-1 bg-yellow-400 text-white rounded-xl">
          <Link to={`/clientes/consumacao/${cliente.cpf}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

          </Link>
        </button>
      ),
    }));

    return (
      <div className="p-4">
        <h1 className="text-xl font-bold text-white">Gerenciamento de Clientes</h1>
        <ListagemGenero
          onGeneroChange={this.handleGeneroChange}
          selectedGenero={selectedGenero}
        />
        <div className="flex flex-row-reverse p-1 items-center">
          <button
            className="px-2 py-2 m-2 bg-lime-500 text-white rounded-full hover:bg-lime-400"
            onClick={this.openModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

          </button>
          <DeletarCliente selectedRows={selectedRows} onDelete={this.handleDelete} />
        </div>
        <div className="overflow-x-auto max-w-screen-lg mx-auto">
          <TableComponent
            headers={headers}
            data={data}
            onRowSelect={this.handleRowSelect}
            onEdit={this.handleEdit}
            showEditButton={true}
          />
        </div>
        <AtualizarCliente
          isModalOpen={isModalOpen}
          onClose={this.closeModal}
          onSave={this.handleSave}
          editRowData={editRowData}
        />
      </div>
    );
  }
}

export default Clientes;
