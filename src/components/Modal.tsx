import React, { Component } from "react";

interface ModalProps {
  isOpen: boolean; 
  title: string; 
  children: React.ReactNode; 
  onClose: () => void; 
  onSubmit: () => void; 
}

export default class Modal extends Component<ModalProps> {
  render() {
    const { isOpen, title, children, onClose, onSubmit } = this.props;

    if (!isOpen) return null; // Não renderiza o modal se não estiver aberto

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white w-full max-w-sm lg:max-w-xl rounded-lg shadow-lg p-6 relative">
          {/* Título do Modal */}
          <h2 className="text-xl font-bold mb-4">{title}</h2>

          {/* Conteúdo do Modal */}
          <div className="mb-6">{children}</div>

          {/* Botões de ação */}
          <div className="flex justify-end space-x-4">
            <button
              className="px-3 py-1 bg-black text-red-400 border-2 border-red-400 rounded-full hover:border-red-500 hover:bg-red-500 hover:text-black"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className="px-3 py-1 bg-black text-lime-400 border-2 border-lime-400 rounded-full hover:border-lime-500 hover:bg-lime-500 hover:text-black"
              onClick={onSubmit}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    );
  }
}


