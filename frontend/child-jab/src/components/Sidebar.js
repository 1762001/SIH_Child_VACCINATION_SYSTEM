import React from 'react';
import { 
    BrowserRouter as Route,
    Link,
    Switch,
    Router
} from "react-router-dom";
import { SidebarData, CenterSidebarData } from '../Data/SidebarData';


function Sidebar() {
let user = sessionStorage.getItem("user")
let TheSidebar = user==="center"? CenterSidebarData : SidebarData

let centerDetails = JSON.parse(sessionStorage.getItem("auth"))

let center_Name = centerDetails.manager_name; 
let name = user==="center"? center_Name : "Welcome Admin"
console.log(centerDetails)
  return (

<aside className="main-sidebar sidebar-dark-primary elevation-4">
  <div className="sidebar">
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <Link to="#" className="d-block">{name.toUpperCase()}</Link>
      </div>
    </div>
    
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {
          TheSidebar.map((linkItem, index) => (
        <li className="nav-item menu-open">
          <Link to={linkItem.to} className="nav-link active">
            <i className="nav-icon fas fa-th"/>
             {linkItem.text}            
          </Link>
          </li>
          ))
          }  
       </ul>
        </nav>
       </div>
    </aside>


    )
}

export default Sidebar
 
    
       


