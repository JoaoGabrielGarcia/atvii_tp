import React from "react";

class Clientes extends React.Component {
    render() {
        return (
            <div className="ml-64 p-4">
                <h2 className="text-2xl font-bold mb-4">Gerenciamento de Clientes</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Nome</th>
                                <th className="border border-gray-300 px-4 py-2">Gênero</th>
                                <th className="border border-gray-300 px-4 py-2">Telefone</th>
                                <th className="border border-gray-300 px-4 py-2">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Dados de exemplo - substituir pela API futuramente */}
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">João Silva</td>
                                <td className="border border-gray-300 px-4 py-2">Masculino</td>
                                <td className="border border-gray-300 px-4 py-2">(11) 99999-9999</td>
                                <td className="border border-gray-300 px-4 py-2">joao@email.com</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Maria Souza</td>
                                <td className="border border-gray-300 px-4 py-2">Feminino</td>
                                <td className="border border-gray-300 px-4 py-2">(21) 88888-8888</td>
                                <td className="border border-gray-300 px-4 py-2">maria@email.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Controles de Paginação */}
                <div className="mt-4 flex justify-between items-center">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Anterior
                    </button>
                    <span>Página 1 de 10</span>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Próxima
                    </button>
                </div>
            </div>
        );
    }
}

export default Clientes;
