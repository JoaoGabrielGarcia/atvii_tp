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
          className={`fixed top-4 left-2 max-w-12 place-items-center text-gray-800 hover:text-white hover:bg-gray-500hite bg-slate-300 rounded-xl z-50 lg:hidden ${isSidebarOpen ? "hidden" : "block"
            }`}
          onClick={this.toggleSidebar}
        >
          <HiMenu size={24} />
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-screen transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 lg:static z-40`}
        >
          <nav className="w-56 h-screen text-white bg-slate-200">
            <div className="text-black p-2 place-items-center border-b-2 border-black">
              <h2 className="text-3xl">Menu</h2>
            </div>
            <ul>
              <Link to="/clientes">
                <li className="p-4 text-gray-800 hover:text-white hover:bg-gray-500">
                  <HiUser className="inline-block mr-2" />
                  Clientes
                </li>
              </Link>
              <Link to="/produtos">
                <li className="p-4 text-gray-800 hover:text-white hover:bg-gray-500">
                  <HiShoppingBag className="inline-block mr-2" />
                  Produtos
                </li>
              </Link>
              <Link to="/servicos">
                <li className="p-4 text-gray-800 hover:text-white hover:bg-gray-500">
                  <HiShoppingBag className="inline-block mr-2" />
                  Serviços
                </li>
              </Link>
              <Link to="/listagem" className="sidebar-link">
                <li className="p-4 text-gray-800 hover:text-white hover:bg-gray-500">
                  <HiTable className="inline-block mr-2" />
                  Filtros
                </li>
              </Link>
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
