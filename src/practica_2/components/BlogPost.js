import Body from "./Body"
import Title from "./Title"

export default function BlogPost ({title, body}){
    return(
        <article>
            <Title title={title}></Title>
            <Body body={body}></Body>
        </article>            
    )
}