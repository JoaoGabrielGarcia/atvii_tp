import React from "react";
import Modal from "../../../components/Modal";

interface AtualizarServicoProps {
  isModalOpen: boolean;
  onClose: () => void;
  onSave: (formData: any) => void;
  editRowData: Record<string, any> | null;
}

interface State {
  editRowData: Record<string, any> | null;
}

class AtualizarServico extends React.Component<AtualizarServicoProps, State> {
  constructor(props: AtualizarServicoProps) {
    super(props);
    this.state = {
      editRowData: props.editRowData || { Nome: "", Preço: "" },
    };
  }

  componentDidUpdate(prevProps: AtualizarServicoProps) {
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
    const { editRowData } = this.state;

    return (
      <Modal
        isOpen={isModalOpen}
        title="Atualizar Serviço"
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

export default AtualizarServico;
