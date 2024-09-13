const Balance = ({count}) => {
    return (
        <div className="balance">
            <h3>Budget: {count}</h3>
            <h3>Available: {count}</h3>
            <h3>Spent: {count}</h3>
        </div>
    )
}

export default Balance;