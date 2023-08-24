export default function Plan(props) {
    const features = props.features
    const planFeatures = [...features].map((feat, i) => ((<li key={i}>{feat}</li>)))

    return (
        <div className="plan">
            <h3 className="plan__name">{props.plan}</h3>
            <h4 className="plan__price">{`$ ${props.price}`}</h4>

            <ul className="plan__features">
                {planFeatures}
            </ul>

            <a className="plan__button">Learn More</a>
        </div>
    )
}
