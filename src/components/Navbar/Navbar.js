import React from 'react'
import './Navbar.css'
import Search from '../../img/search.svg'
import Profile from '../../img/profile.PNG'
import Bell from '../../img/bell.PNG'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
            <div class="input-group w-50 border-0 shadow rounded-pill">
                <input type="text" class="form-control py-4 w-50 rounded-pill" />
                <div class="input-group-append rounded-pill">
                    <img src={Search} className="px-3 py-2"/>
                </div>
            </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                    <a class="nav-link active" href="#">
                        <img src={Profile} />
                    </a>
                    <a class="nav-link text-dark" href="#">
                        <p className="font-weight-bolder my-3">Alex Smith</p>
                    </a>
                    <a class="nav-link" href="#">
                        <img src={Bell} className="my-3" />
                    </a>
                    </div>
                </div>
            </nav>          
        </div>
    )
}

export default Navbar;
