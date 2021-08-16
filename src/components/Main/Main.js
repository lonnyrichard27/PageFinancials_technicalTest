import React from 'react'
import './Main.css'
import Transactions from '../Transactions/Transactions'
import Transfer from '../Transfer/Transfer'
import Card from '../Card/Card'
import Statistics from '../Statistics/Statistics'

const Main = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7">
                    <Card />
                    <Transactions />
                </div>
                <div className="col-lg-5">
                    <Transfer />
                    <Statistics className="mt-4" />
                </div>
            </div>
        </div>
    )
}

export default Main;
