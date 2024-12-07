import React from "react";

interface Props {
  onGeneroChange: (genero: string) => void;
  selectedGenero: string;
}

const ListagemGenero: React.FC<Props> = ({ onGeneroChange, selectedGenero }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="genero-select"
        className="block text-white text-sm font-medium mb-2"
      >
        Filtrar por Gênero:
      </label>
      <select
        id="genero-select"
        className="w-full lg:w-1/3 px-3 py-2 border rounded-md"
        value={selectedGenero}
        onChange={(e) => onGeneroChange(e.target.value)}
      >
        <option value="Todos">Todos</option>
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        <option value="Outro">Outro</option>
      </select>
    </div>
  );
};

export default ListagemGenero;
