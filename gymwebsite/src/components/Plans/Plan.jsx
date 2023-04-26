import React from 'react'
import "./Plan.css"
import {plansData} from "../../data/plansData"
import whitetick from "../../assets/whiteTick.png"
const Plan = () => {
  return (
    <section className="Plans" id="Plans">
        <div className='programs-header'><span className='stroke-text'>Ready to start</span><span>Your journey</span><span className='stroke-text'>now withus</span></div>
        <div className="plans-program">
            {plansData.map((plan,i)=>
            (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span><span>$ {plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature,i)=>
                        (
                            <div className='feature'>
                                <img src={whitetick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                            
                        )
                        )}
                    </div>
                    <div className="benefits"><span>See more benefits -> </span></div>
                    <button>Join now</button>
                </div>
            )
            )}
        </div>
    </section>
  )
}

export default Plan