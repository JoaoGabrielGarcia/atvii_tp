import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import TableComponent from '../../components/Table';
import { produtosConsumidosMock, servicosConsumidosMock } from '../../mock/consumacaoData';

interface State {
  produtos: any[];
  servicos: any[];
}

interface ConsumacaoClienteProps {
  clienteId: string;
}

class ConsumacaoCliente extends Component<ConsumacaoClienteProps, State> {
  state: State = {
    produtos: produtosConsumidosMock,
    servicos: servicosConsumidosMock,
  };

  render() {
    const { produtos, servicos } = this.state;
    const produtoHeaders = ['Produto', 'Quantidade', 'Preço Total'];
    const servicoHeaders = ['Serviço', 'Data', 'Preço'];

    return (
      <div className="p-4">
        <h2 className="text-xl font-bold text-white mb-4">Consumação do Cliente {this.props.clienteId}</h2>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Produtos Consumidos</h3>
          <TableComponent
            headers={produtoHeaders}
            data={produtos}
            onRowSelect={() => { }}
            onEdit={() => { }}
            showEditButton={false} // Não exibir o botão de edição
          />
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-white mb-2">Serviços Consumidos</h3>
          <TableComponent
            headers={servicoHeaders}
            data={servicos}
            onRowSelect={() => { }}
            onEdit={() => { }}
            showEditButton={false} // Não exibir o botão de edição
          />
        </div>
      </div>
    );
  }
}

// Função de página para obter o ID do cliente via URL e passar para o componente de consumação
const ConsumacaoClientePage = () => {
  const { clienteId } = useParams<{ clienteId: string }>(); // Recupera o ID do cliente da URL
  return <ConsumacaoCliente clienteId={clienteId ?? ''} />; // Garante que clienteId nunca seja undefined
};

export default ConsumacaoClientePage;
