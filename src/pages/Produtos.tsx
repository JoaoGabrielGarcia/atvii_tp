import React from "react";

class Produtos extends React.Component {
    render() {
        return (
            <div className="ml-64 p-4">
                <h2 className="text-2xl font-bold mb-4">Gerenciamento de Produtos</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <th className="border border-gray-300 px-4 py-2">Nome</th>
                                <th className="border border-gray-300 px-4 py-2">Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Dados de exemplo - substituir pela API futuramente */}
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">1</td>
                                <td className="border border-gray-300 px-4 py-2">Shampoo</td>
                                <td className="border border-gray-300 px-4 py-2">R$ 25,00</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">2</td>
                                <td className="border border-gray-300 px-4 py-2">Condicionador</td>
                                <td className="border border-gray-300 px-4 py-2">R$ 30,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Controles de Paginação */}
                <div className="mt-4 flex justify-between items-center">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Anterior
                    </button>
                    <span>Página 1 de 5</span>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Próxima
                    </button>
                </div>
            </div>
        );
    }
}

export default Produtos;