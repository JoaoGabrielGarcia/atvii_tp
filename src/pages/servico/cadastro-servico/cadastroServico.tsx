import React from "react";
import Modal from "../../../components/Modal";

interface CadastroServicoProps {
  isModalOpen: boolean;
  onClose: () => void;
  onSave: (formData: any) => void;
}

interface State {
  formData: { Nome: string; Preço: string };
  errors: { Nome: string; Preço: string };
}

class CadastroServico extends React.Component<CadastroServicoProps, State> {
  constructor(props: CadastroServicoProps) {
    super(props);
    this.state = {
      formData: { Nome: "", Preço: "" },
      errors: { Nome: "", Preço: "" },
    };
  }

  handleSubmit = () => {
    const { formData } = this.state;
    const newErrors: { Nome: string; Preço: string } = { Nome: "", Preço: "" };

    // Validação: Verificar se os campos estão preenchidos
    if (!formData.Nome.trim()) {
      newErrors.Nome = "O nome do serviço é obrigatório!";
    }

    if (!formData.Preço.trim() || isNaN(Number(formData.Preço)) || Number(formData.Preço) <= 0) {
      newErrors.Preço = "O preço deve ser um número válido maior que zero!";
    }

    if (newErrors.Nome || newErrors.Preço) {
      this.setState({ errors: newErrors });
      return; // Não envia o formulário se houver erros
    }

    // Chama o onSave se não houver erros
    this.props.onSave({ ...formData, Preço: parseFloat(formData.Preço) });
    this.setState({ formData: { Nome: "", Preço: "" }, errors: { Nome: "", Preço: "" } }); // Limpa os erros e campos
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  render() {
    const { isModalOpen, onClose } = this.props;
    const { formData, errors } = this.state;

    return (
      <Modal
        isOpen={isModalOpen}
        title="Cadastrar Serviço"
        onClose={onClose}
        onSubmit={this.handleSubmit}
      >
        <div>
          <label className="block mb-1 text-sm font-medium">Nome:</label>
          <input
            type="text"
            name="Nome"
            placeholder="Insira o nome do serviço"
            value={formData.Nome}
            onChange={this.handleChange}
            className="px-3 py-2 rounded-2xl border-gray-400"
          />
          {errors.Nome && <p className="text-red-500 text-xs mt-1">{errors.Nome}</p>}

          <label className="block mb-1 text-sm font-medium">Preço:</label>
          <input
            type="number"
            name="Preço"
            placeholder="Insira o preço do serviço"
            value={formData.Preço}
            onChange={this.handleChange}
            className="px-3 py-2 rounded-2xl border-gray-400"
          />
          {errors.Preço && <p className="text-red-500 text-xs mt-1">{errors.Preço}</p>}
        </div>
      </Modal>
    );
  }
}

export default CadastroServico;
