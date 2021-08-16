import React from 'react'
import './Sidebar.css'
import Logo from '../../img/logo.png'
import Home from '../../img/home.svg'
import Bar from '../../img/bar-chart.svg'
import Credit from '../../img/credit-card.svg'
import List from '../../img/list.svg'
import Settings from '../../img/settings.svg'
import Main from '../Main/Main'
import Navbar from '../Navbar/Navbar'


const Sidebar = () => {
    return (
        <div className="">
            <div class="d-flex" id="wrapper">

                {/* <!-- Sidebar --> */}
                <div class=" border-right width shadow rounded-pill" id="sidebar-wrapper">
                <div class="sidebar-heading">
                    <img src={Logo} />
                </div>
                <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item border-0 list-group-item-action ">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <img src={Home} />
                            </div>
                        </div>
                    </a>

                    <a href="#" class="list-group-item list-group-item-action border-bottom-0 border-right">
                        <img src={Bar} className="mx-3 my-3"/> 
                    </a>

                    <a href="#" class="list-group-item list-group-item-action border-bottom-0 border-right">
                        <img src={Credit} className="mx-3 my-3"/> 
                    </a>

                    <a href="#" class="list-group-item list-group-item-action border-bottom-0 border-right">
                        <img src={List} className="mx-3 my-3"/> 
                    </a>

                    <a href="#" class="list-group-item border-0 mt-5 list-group-item-action ">
                        <div className="card shadow border-0 mt-5">
                            <div className="card-body">
                                <img src={Settings} />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            {/* <!-- /#sidebar-wrapper --> */}

                {/* <!-- Page Content --> */}
                <div id="page-content-wrapper">
                    <Navbar />
                    <Main />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
