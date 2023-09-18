import Body from "./Body";

export default function Main ({ pageBody, links }) {
    return (
        <main>
            <nav>
                <ul>
                    { links.map((link) => (
                        <li>
                            <a href="{ link }">{ link }</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <Body pageBody={pageBody} />
            <p>Frase a elección</p>
        </main>
    )
}