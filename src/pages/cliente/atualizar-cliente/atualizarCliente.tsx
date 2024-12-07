import React from "react";
import Modal from "../../../components/Modal";
import CadastroCliente, { ClienteData } from "../cadastro-cliente/cadastroCliente";

interface AtualizarClienteProps {
  isModalOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  editRowData: Partial<ClienteData> | null; // Alteração para permitir um objeto parcial de ClienteData
}

interface State {
  formData: Partial<ClienteData>;
  editRowData: Partial<ClienteData> | null; // Alteração aqui também
}

class AtualizarCliente extends React.Component<AtualizarClienteProps, State> {
  constructor(props: AtualizarClienteProps) {
    super(props);
    this.state = {
      formData: props.editRowData || {}, // Inicializa com os dados passados via props
      editRowData: props.editRowData || null,
    };
  }

  componentDidUpdate(prevProps: AtualizarClienteProps) {
    if (prevProps.editRowData !== this.props.editRowData) {
      this.setState({ editRowData: this.props.editRowData });
    }
  }

  handleSave = () => {
    const { formData } = this.state;
    if (!formData) {
      console.error("Dados inválidos para salvar!");
      return;
    }
    this.props.onSave(formData); // Salva os dados
    this.props.onClose(); // Fecha o modal
  };

  handleFormSubmit = () => {
    const formElement = document.querySelector("form");
    if (formElement) {
      const isValid = formElement.reportValidity();
      if (isValid) {
        formElement.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
      }
    }
  };

  render() {
    const { isModalOpen, onClose } = this.props;
    const { editRowData } = this.state;

    return (
      <Modal
        isOpen={isModalOpen}
        title={editRowData ? "Editar Cliente" : "Cadastrar Cliente"}
        onClose={onClose}
        onSubmit={this.handleSave}
      >
        <CadastroCliente onSave={this.handleSave} editRowData={editRowData} isModalOpen={isModalOpen}
        onClose={onClose} initialData={editRowData || {}} />
      </Modal>
    );
  }
}

export default AtualizarCliente;
