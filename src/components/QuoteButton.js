export const QuoteButton = props => {
    return (
        <button className="btn shadow-none" id={props.id} onClick={props.handleClick}>New Quote</button>
    )
}