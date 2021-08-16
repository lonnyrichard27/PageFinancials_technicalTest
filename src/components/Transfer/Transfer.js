import React from 'react'
import './Transfer.css'
import People from '../../img/people.PNG'
import Credit from '../../img/credit-card.svg'
import Right from '../../img/right.svg'


const Transfer = () => {
    return (
        <div className="container-fluid">
            <h5 className="font-weight-bolder my-3">Transfer Money</h5> 
            <div className=" w-75 shadow">
                <div className="card-body">
                    <div className="d-flex bd-highlight">
                        <div className="p-2 w-100 bd-highlight">
                            <section className="d-flex">
                                <img src={Credit} />
                                <p className="mt-2 ml-3">Quick Transfer</p>
                            </section>
                        </div>
                        <div className="p-2 flex-shrink-1 bd-highlight">
                            <img src={People} />
                        </div>
                    </div>
                </div>

                <div className="input-group mx-auto border-0 shadow rounded-pill">
                    <input type="text" placeholder="1234 5321 6742 1265 VISA" className="form-control py-4 w-50 rounded-pill" />
                    <div className="input-group-append rounded-pill">
                        <img src={Right} className="px-3 py-2"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transfer;
