export const QuoteBox = props => {
    return (
        <div className="container col-xs-5" id={props.id}>
        {props.children}
        </div>
    )
}