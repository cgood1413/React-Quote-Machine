export const QuoteBox = props => {
    return (
        <div className="container col-xs-6" id={props.id}>
        {props.children}
        </div>
    )
}