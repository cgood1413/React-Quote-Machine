export const QuoteText = props => {
    return (
        <blockquote >
            <p id={props.id}>{props.text}</p>
        </blockquote>
    );
}