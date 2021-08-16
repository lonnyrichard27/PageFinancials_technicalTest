import React from 'react'
import './Transactions.css'
import Spotify from '../../img/spotify.PNG'
import Apple from '../../img/aplle.PNG'
import Invision from '../../img/invision.PNG'
import Restaurant from '../../img/restaurant.PNG'

const Transactions = () => {
    return (
        <div className="container-fluid">
            <section className="cards">
                <h5 className="font-weight-bolder my-3">Transactions</h5>
                <div class="d-flex justify-content-between">
                    <article className="d-flex">
                        <img src={Spotify} />
                        <p className="font-weight-bold h5 my-3 ml-3">Spotify</p>
                    </article>
                    <p className="font-weight-bold text-muted my-3 h5">Aug 29, 1:25p.m</p>
                    <p className="font-weight-bold h5 my-3">-$18.35</p>
                </div>

                <section className="border-white ml-n4 shadow"> 
                    <div class="d-flex justify-content-between  py-1 px-3 my-5">
                        <article className="d-flex">
                            <img src={Invision} />
                            <p className="font-weight-bold h5 my-3 ml-3">Invision Studio</p>
                        </article>
                        <p className="font-weight-bold text-muted my-3 h5">Aug 29, 1:25p.m</p>
                        <p className="font-weight-bold h5 my-3">-$18.35</p>
                    </div>
                </section>

                <div class="d-flex justify-content-between my-5">
                    <article className="d-flex">
                        <img src={Restaurant} />
                        <p className="font-weight-bold h5 my-3 ml-3">Restaurant</p>
                    </article>
                    <p className="font-weight-bold text-muted my-3 h5">Aug 29, 1:25p.m</p>
                    <p className="font-weight-bold h5 my-3">-$18.35</p>
                </div>

                <div class="d-flex justify-content-between my-5">
                    <article className="d-flex">
                        <img src={Apple} />
                        <p className="font-weight-bold h5 my-3 ml-3">Apple</p>
                    </article>
                    <p className="font-weight-bold text-muted my-3 h5">Aug 29, 1:25p.m</p>
                    <p className="font-weight-bold h5 my-3">-$18.35</p>
                </div>
            </section>
        </div>
    )
}

export default Transactions;
