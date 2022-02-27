export const Quote = props => {
    return (
    <blockquote className="blockquote-reverse" id={props.id}>
        <p>{props.text}</p>
        <footer id='author' >{props.author}</footer>
    </blockquote>
    );
}