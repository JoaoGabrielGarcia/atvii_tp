import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag, HiTable, HiUser, HiMenu } from "react-icons/hi";

interface NavbarState {
  isSidebarOpen: boolean;
}

export default class Navbar extends React.Component<{}, NavbarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isSidebarOpen: false,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  }

  closeSidebar() {
    this.setState({ isSidebarOpen: false });
  }

  render() {
    const { isSidebarOpen } = this.state;

    return (
      <div className="relative">
        {/* Botão para abrir/fechar a Sidebar em dispositivos móveis */}
        <button
          className={`fixed top-4 left-4 p-2 text-white bg-slate-300 rounded-xl z-50 lg:hidden ${
            isSidebarOpen ? "hidden" : "block"
          }`}
          onClick={this.toggleSidebar}
        >
          <HiMenu size={24} />
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:static lg:h-auto z-40`}
        >
          <nav className="w-64 h-screen text-white bg-gray-800">
            <ul>
              <li className="p-4 hover:bg-gray-700">
                <Link to="/clientes">
                  <HiUser className="inline-block mr-2" />
                  Clientes
                </Link>
              </li>
              <li className="p-4 hover:bg-gray-700">
                <Link to="/produtos">
                  <HiShoppingBag className="inline-block mr-2" />
                  Produtos
                </Link>
              </li>
              <li className="p-4 hover:bg-gray-700">
                <Link to="/servicos">
                  <HiTable className="inline-block mr-2" />
                  Serviços
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Overlay para fechar a Sidebar em dispositivos móveis */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={this.closeSidebar}
          ></div>
        )}
      </div>
    );
  }
}
