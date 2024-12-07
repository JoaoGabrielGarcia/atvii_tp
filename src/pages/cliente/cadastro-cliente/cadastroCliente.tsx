import React from "react";

export interface ClienteData {
  nome: string;
  nomeSocial: string;
  cpf: string;
  rg: string;
  genero: string;
  telefone: string;
  dataCadastro: string;
}

interface CadastroClienteProps {
  onSave: (formData: ClienteData) => void;
  initialData: Partial<ClienteData>;
  editRowData: Partial<ClienteData> | null;  // Alteração aqui para aceitar um objeto parcial de ClienteData
  isModalOpen: boolean;
  onClose: () => void;
}

interface State {
  formData: ClienteData;
  errors: Partial<Record<keyof ClienteData, string>>;
}

class CadastroCliente extends React.Component<CadastroClienteProps, State> {
  constructor(props: CadastroClienteProps) {
    super(props);
    this.state = {
      formData: {
        nome: props.initialData?.nome || "",
        nomeSocial: props.initialData?.nomeSocial || "",
        cpf: props.initialData?.cpf || "",
        rg: props.initialData?.rg || "",
        genero: props.initialData?.genero || "",
        telefone: props.initialData?.telefone || "",
        dataCadastro: props.initialData?.dataCadastro || "",
      },
      errors: {},
    };
  }

  validateForm = (): Partial<Record<keyof ClienteData, string>> => {
    const { formData } = this.state;
    const errors: { [key: string]: string } = {};

    if (!formData.nome) errors.nome = "O nome é obrigatório.";
    if (!formData.cpf) errors.cpf = "O CPF é obrigatório.";
    if (!formData.rg) errors.rg = "O RG é obrigatório.";
    if (!formData.dataCadastro) errors.dataCadastro = "A data de cadastro é obrigatória.";
    if (!formData.genero) errors.genero = "O gênero é obrigatório.";

    return errors;
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { formData } = this.state;

    // Validação dos campos obrigatórios
    const errors: { [key: string]: string } = {};
    if (!formData.nome.trim()) errors.nome = "Nome é obrigatório";
    if (!formData.cpf.trim()) errors.cpf = "CPF é obrigatório";
    if (!formData.rg.trim()) errors.rg = "RG é obrigatório";
    if (!formData.genero.trim()) errors.genero = "Gênero é obrigatório";

    this.setState({ errors });

    // Impede o envio se houver erros
    if (Object.keys(errors).length > 0) return;

    // Chama a função onSave com os dados do formulário
    const cliente = {
        nome: formData.nome,
        nomeSocial: formData.nomeSocial,
        cpf: formData.cpf,
        rg: formData.rg,
        telefone: formData.telefone || "N/A",
        genero: formData.genero,
        dataCadastro: formData.dataCadastro || new Date().toISOString(),
    };

    this.props.onSave(cliente);

    // Reseta o formulário
    this.setState({
        formData: {
          nome: "",
          cpf: "",
          rg: "",
          telefone: "",
          genero: "",
          dataCadastro: "",
          nomeSocial: ""
        },
        errors: {},
    });

    this.props.onClose(); // Fecha o modal
};


  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  render() {
    const { formData, errors } = this.state;

    return (
      <form className="space-y-4">
        <div>
          <label htmlFor="nome" className="block mb-1 text-sm font-medium">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={this.handleChange}
            className={`px-3 py-2 border-gray-400 rounded-2xl ${errors.nome ? "border-red-500" : "border-gray-400"
              }`}
            placeholder="Digite o nome do cliente"
            required
          />
          {errors.nome && <span className="text-red-500 text-sm">{errors.nome}</span>}
        </div>
        <div>
          <label htmlFor="nomeSocial" className="block mb-1 text-sm font-medium">Nome Social:</label>
          <input
            type="text"
            id="nomeSocial"
            name="nomeSocial"
            value={formData.nomeSocial}
            onChange={this.handleChange}
            className="px-3 py-2 rounded-2xl border-gray-400"
            placeholder="Digite o nome social"
          />
        </div>
        <div>
          <label htmlFor="cpf" className="block mb-1 text-sm font-medium">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={this.handleChange}
            className={`px-3 py-2 border-gray-400 rounded-2xl ${errors.cpf ? "border-red-500" : "border-gray-400"
              }`}
            placeholder="Digite o CPF"
            required
          />
          {errors.cpf && <span className="text-red-500 text-sm">{errors.cpf}</span>}
        </div>
        <div>
          <label htmlFor="rg" className="block mb-1 text-sm font-medium">
            RG:
          </label>
          <input
            type="text"
            id="rg"
            name="rg"
            value={formData.rg}
            onChange={this.handleChange}
            className={`px-3 py-2 border-gray-400 rounded-2xl ${errors.rg ? "border-red-500" : "border-gray-400"
              }`}
            placeholder="Digite o RG"
            required
          />
          {errors.rg && <span className="text-red-500 text-sm">{errors.rg}</span>}
        </div>
        <div>
          <label htmlFor="genero" className="block mb-1 text-sm font-medium">
            Gênero:
          </label>
          <select
            id="genero"
            name="genero"
            value={formData.genero}
            onChange={this.handleChange}
            className={`px-3 py-2 rounded-2xl border-gray-400 ${errors.genero ? "border-red-500" : "border-gray-400"
              }`}
            required
          >
            <option value="" disabled>
              Selecione o gênero
            </option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
          {errors.genero && <span className="text-red-500 text-sm">{errors.genero}</span>}
        </div>
        <div>
          <label htmlFor="telefone" className="block mb-1 text-sm font-medium">Telefone:</label>
          <input
            id="telefone"
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={this.handleChange}
            className="px-3 py-2 rounded-2xl border-gray-400"
            placeholder="Digite o telefone"
          />
        </div>
        <div>
          <label htmlFor="dataCadastro" className="block mb-1 text-sm font-medium">Data de Cadastro:</label>
          <input
            id="dataCadastro"
            type="date"
            name="dataCadastro"
            value={formData.dataCadastro}
            onChange={this.handleChange}
            className={`px-3 py-2 border-gray-400 rounded-2xl ${errors.dataCadastro ? "border-red-500" : "border-gray-400"
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
