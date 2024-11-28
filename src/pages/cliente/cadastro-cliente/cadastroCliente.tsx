import React from "react";

interface FormData {
  nome: string;
  nomeSocial: string;
  cpf: string;
  rg: string;
  genero: string;
  telefone: string;
  dataCadastro: string;
}

interface Props {
  onSave: (formData: FormData) => void;
}

interface State {
  formData: FormData;
  errors: Partial<Record<keyof FormData, string>>;
}

class CadastroCliente extends React.Component<Props, State> {
  state: State = {
    formData: {
      nome: "",
      nomeSocial: "",
      cpf: "",
      rg: "",
      genero: "",
      telefone: "",
      dataCadastro: "",
    },
    errors: {},
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  validateForm = (): Partial<Record<keyof FormData, string>> => {
    const { formData } = this.state;
    const errors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.nome) errors.nome = "O nome é obrigatório.";
    if (!formData.cpf) errors.cpf = "O CPF é obrigatório.";
    if (!formData.rg) errors.rg = "O RG é obrigatório.";
    if (!formData.dataCadastro) errors.dataCadastro = "A data de cadastro é obrigatória.";

    return errors;
  };

  handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      const { onSave } = this.props;
      onSave(this.state.formData); // Passa os dados para o componente pai
    }
  };

  render() {
    const { formData, errors } = this.state;

    return (
      <form className="grid grid-cols-1 gap-4 lg:grid-cols-2" onSubmit={this.handleSave}>
        <div>
          <label className="block mb-1 text-sm font-medium">Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={this.handleChange}
            className={`px-3 py-2 border-gray-400 rounded-2xl ${
              errors.nome ? "border-red-500" : "border-gray-400"
            }`}
            placeholder="Digite o nome do cliente"
            required
          />
          {errors.nome && <span className="text-red-500 text-sm">{errors.nome}</span>}
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Nome Social:</label>
          <input
            type="text"
            name="nomeSocial"
            value={formData.nomeSocial}
            onChange={this.handleChange}
            className="px-3 py-2 border-gray-400 rounded-2xl border-gray-400"
            placeholder="Digite o nome social"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={this.handleChange}
            className={`px-3 py-2 border-gray-400 rounded-2xl ${
              errors.cpf ? "border-red-500" : "border-gray-400"
            }`}
            placeholder="Digite o CPF"
            required
          />
          {errors.cpf && <span className="text-red-500 text-sm">{errors.cpf}</span>}
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">RG:</label>
          <input
            type="text"
            name="rg"
            value={formData.rg}
            onChange={this.handleChange}
            className={`px-3 py-2 border-gray-400 rounded-2xl ${
              errors.rg ? "border-red-500" : "border-gray-400"
            }`}
            placeholder="Digite o RG"
            required
          />
          {errors.rg && <span className="text-red-500 text-sm">{errors.rg}</span>}
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Gênero:</label>
          <input
            type="text"
            name="genero"
            value={formData.genero}
            onChange={this.handleChange}
            className="px-3 py-2 border-gray-400 rounded-2xl border-gray-400"
            placeholder="Digite o gênero"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={this.handleChange}
            className="px-3 py-2 border-gray-400 rounded-2xl border-gray-400"
            placeholder="Digite o telefone"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Data de Cadastro:</label>
          <input
            type="date"
            name="dataCadastro"
            value={formData.dataCadastro}
            onChange={this.handleChange}
            className={`px-3 py-2 border-gray-400 rounded-2xl ${
              errors.dataCadastro ? "border-red-500" : "border-gray-400"
            }`}
            required
          />
          {errors.dataCadastro && <span className="text-red-500 text-sm">{errors.dataCadastro}</span>}
        </div>
      </form>
    );
  }
}

export default CadastroCliente;
