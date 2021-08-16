import React from 'react'
import './Card.css'
import Master from '../../img/master.PNG'
import CVV from '../../img/CV2.PNG'
import Cardm from '../../img/mastercard.PNG'


const Card = () => {
    return (
        <div className="d-flex">
            {/* first big card */}
           <div className="card cards text-white">
                <div className="card-body">
                    {/* amount */}
                    <section class="d-flex bd-highlight">
                        <section class="p-2 w-100 bd-highlight">
                            <section class="d-flex flex-column bd-highlight mb-3">
                                <section class="p-2 bd-highlight"><span className="font-weight-bold">Balance</span></section>
                                <section class="p-2 bd-highlight"><h3>$4,890</h3></section>
                            </section>
                        </section>
                        <div class="p-2 flex-shrink-1 bd-highlight">
                            <img src={Master} />
                        </div>
                    </section>
                    {/* amount ends */}

                    {/* card number */}
                    <section className="d-flex">
                        <article className="d-flex ml-3">
                            <article className="white-circle"></article>
                            <article className="white-circle ml-1"></article>
                            <article className="white-circle ml-1"></article>
                            <article className="white-circle ml-1"></article>
                        </article>

                        <article className="d-flex ml-3">
                            <article className="white-circle"></article>
                            <article className="white-circle ml-1"></article>
                            <article className="white-circle ml-1"></article>
                            <article className="white-circle ml-1"></article>
                        </article>
                        
                        <article className="d-flex ml-3">
                            <article className="white-circle"></article>
                            <article className="white-circle ml-1"></article>
                            <article className="white-circle ml-1"></article>
                            <article className="white-circle ml-1"></article>
                        </article>

                        <article className="ml-4">
                            <p className="mt-n2 font-weight-bold">3456</p>
                        </article>
                    </section>
                    {/* card number ends */}

                    {/* date */}
                    <div class="d-flex justify-content-between">
                        <section class="d-flex flex-column bd-highlight mb-3">
                            <section class="p-2 bd-highlight"><span className="font-weight-bold">VALID THRU</span></section>
                            <section class="p-2 bd-highlight mt-n2"><h3>09/24</h3></section>
                        </section>

                        <section class="d-flex flex-column bd-highlight mb-3">
                            <section class="p-2 bd-highlight"><span className="font-weight-bold">VALID THRU</span></section>
                            <section class="p-2 bd-highlight mt-n2"><h3>09/24</h3></section>
                        </section>

                        <section>
                            <img src={CVV} />
                        </section>
                    </div>
                    {/* date ends */}
                </div>
            </div>
            {/* first big card */}

            {/* second card */}
            <div className="card rotate">
                <div className="card-body">
                   {/* card number */}
                   <section className="d-flex">
                        <article className="ml-4 mt-4">
                            <p className="mt-n2 font-weight-bold">3456</p>
                        </article>

                        <article className="d-flex ml-3 mt-4">
                            <article className="ash-circle"></article>
                            <article className="ash-circle ml-1"></article>
                            <article className="ash-circle ml-1"></article>
                            <article className="ash-circle ml-1"></article>
                        </article>

                        <article className="d-flex ml-3">
                           <img src={Cardm} />
                        </article>
                    </section>
                    
                    {/* card number ends */} 
                </div>
            </div>
            
            {/* second card */}
        </div>
    )
}

export default Card;
