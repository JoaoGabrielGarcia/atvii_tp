import React from "react";
import Modal from "../../../components/Modal";

interface AtualizarProdutoProps {
  isModalOpen: boolean;
  onClose: () => void;
  onSave: (formData: any) => void;
  editRowData: Record<string, any> | null;
}

interface State {
  editRowData: Record<string, any> | null;
}

class AtualizarProduto extends React.Component<AtualizarProdutoProps, State> {
  constructor(props: AtualizarProdutoProps) {
    super(props);
    this.state = {
      editRowData: props.editRowData || { Nome: "", Preço: "" },
    };
  }

  componentDidUpdate(prevProps: AtualizarProdutoProps) {
    if (prevProps.editRowData !== this.props.editRowData) {
      this.setState({
        editRowData: this.props.editRowData || { Nome: "", Preço: "" },
      });
    }
  }

  handleSubmit = () => {
    const { editRowData } = this.state;
    this.props.onSave({ ...editRowData, Preço: parseFloat(editRowData?.Preço) });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      editRowData: { ...prevState.editRowData, [name]: value },
    }));
  };

  render() {
    const { isModalOpen, onClose } = this.props;
    const { editRowData } = this.state; // Acessando diretamente 'editRowData' aqui

    return (
      <Modal
        isOpen={isModalOpen}
        title="Atualizar Produto"
        onClose={onClose}
        onSubmit={this.handleSubmit}
      >
        <div>
          <input
            type="text"
            name="Nome"
            placeholder="Nome"
            value={editRowData?.Nome || ""}
            onChange={this.handleChange}
            className="w-full px-4 py-2 mb-2 border rounded"
          />
          <input
            type="number"
            name="Preço"
            placeholder="Preço"
            value={editRowData?.Preço || ""}
            onChange={this.handleChange}
            className="w-full px-4 py-2 mb-2 border rounded"
          />
        </div>
      </Modal>
    );
  }
}

export default AtualizarProduto;
