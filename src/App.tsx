import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Clientes from "./pages/cliente/Clientes";
import Produtos from "./pages/produto/Produtos";
import Servicos from "./pages/servico/Servicos";
import Navbar from "./components/Navbar";
import ConsumacaoClientePage from "./pages/cliente/ConsumacaoCliente";
import Listagem from "./pages/listagem/Listagem";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="flex">
                    <div className="mr-16 lg:mr-12 h-screen">
                        <Navbar />
                    </div>
                    <div className="w-full">
                        <Header />
                        <Routes>
                            <Route path="/clientes" element={<Clientes />} />
                            <Route path="/produtos" element={<Produtos />} />
                            <Route path="/servicos" element={<Servicos />} />
                            <Route path="/clientes/consumacao/:cpf" element={<ConsumacaoClientePage />} />
                            <Route path="/listagem" element={<Listagem />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
