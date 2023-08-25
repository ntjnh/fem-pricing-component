import Attr from './components/Attr'
import './assets/scss/App.scss'
import planData from './plans.json'
import Plan from './components/Plan'
import { useState } from 'react'

function App() {
    const [billingFrequency, setBillingFrequency] = useState('monthly')

    const plans = planData.map((plan, i) => {
        return (
            <Plan 
                key={i} 
                plan={plan.plan} 
                price={plan.prices[billingFrequency]} 
                features={plan.features}
            />
        )
    })

    function handleClick() {
        if (billingFrequency === 'monthly') {
            setBillingFrequency('annually')
        } else {
            setBillingFrequency('monthly')
        }
    }

    return (
        <>
            <div className="pricing">
                <h2 className="pricing__title">Our Pricing</h2>

                <div className="pricing-toggle">
                    <p className="pricing-toggle__label">Annually</p>
                    <button className="pricing-toggle__btn" type="button" onClick={handleClick}>toggle</button>
                    <p className="pricing-toggle__label">Monthly</p>
                </div>

                {plans}
            </div>

            <Attr />
        </>
    )
}

export default App
