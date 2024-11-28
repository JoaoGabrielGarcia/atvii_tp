import React from 'react';
import TableComponent from '../../components/Table';

class Servicos extends React.Component {
    render() {
        // Cabeçalhos da tabela
        const headers = ['ID', 'Nome', 'Preço'];

        // Dados da tabela
        const rawData = [
            { ID: 1, Nome: 'Corte de Cabelo', Preço: 50.0 },
            { ID: 2, Nome: 'Manicure', Preço: 40.0 },
        ];

        // Formatando os dados
        const data = rawData.map((item) => ({
            ...item,
            Preço: `R$ ${item.Preço.toFixed(2).replace('.', ',')}`, // Formatação do preço
        }));

        return (
            <div className="p-4">
                <h2 className="text-xl font-bold text-white mb-4">Gerenciamento de Serviços</h2>
                <TableComponent headers={headers} data={data} />
            </div>
        );
    }
}

export default Servicos;
