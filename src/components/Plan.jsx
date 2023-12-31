import './Plan.scss'

export default function Plan(props) {
    const features = props.features
    const planFeatures = [...features].map((feat, i) => ((<li key={i}>{feat}</li>)))
    const bestsellerClass = props.bestseller ? `plan plan--bestseller` : `plan`

    return (
        <div className={bestsellerClass}>
            <h3 className="plan__name">{props.plan}</h3>
            <h4 className="plan__price"><span>$</span>{`${props.price}`}</h4>

            <ul className="plan__features">
                {planFeatures}
            </ul>

            <a className="plan__button">Learn More</a>
        </div>
    )
}
