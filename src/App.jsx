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
            <div>
                <h2>Our Pricing</h2>

                <div>
                    <p>Annually</p>
                    <button className="price-toggle" type="button" onClick={handleClick}>toggle</button>
                    <p>Monthly</p>
                </div>

                {plans}
            </div>

            <Attr />
            
        </>
    )
}

export default App
