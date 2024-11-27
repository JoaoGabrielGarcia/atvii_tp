import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { HiShoppingBag, HiTable, HiUser } from "react-icons/hi";


export default class Navbar extends React.Component {
   render() {
      return (
         <aside className="h-20 bg-red-500">
            <nav className="w-64 h-screen  text-white ">
            <Sidebar className="bg-lime-500">
               <Sidebar.Items>
                  <Sidebar.ItemGroup>
                     <Sidebar.Item icon={HiUser}>
                     <Link to="/clientes">Clientes</Link>
                     </Sidebar.Item>
                     <Sidebar.Item icon={HiShoppingBag}>
                     <Link to="/produtos">Produtos</Link>
                     </Sidebar.Item>
                     <Sidebar.Item icon={HiTable}>
                     <Link to="/servicos">Serviços</Link>
                     </Sidebar.Item>
                  </Sidebar.ItemGroup>
               </Sidebar.Items>
            </Sidebar>
         </nav>
         </aside>
         
      );
   }
}