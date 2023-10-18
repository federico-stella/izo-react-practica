import BlogPost from "./BlogPost";
import Body from "./Body";

export default function Main ({pageBody, links}){
    return(
        <main>
            <nav>
                <ul>
                    { links.map((link)=> (
                        <li key={link}>
                            <a href={link} target="_blank">{ link }</a>
                        </li>
                    ))}     
                </ul>
            </nav>
            <div className="mainBody">
                <Body body={pageBody}/>
            </div>
            <p className="frase">Ejercicio de la practica número 2</p>
            <hr></hr>
            <div className="noticia">
                <BlogPost
                    title={'Argentina campeón del Mundial de Qatar 2022'} 
                    body={'La Albiceleste de Lionel Messi consiguió la gloria máxima tras el triunfo por penales ante Francia en el Lusail Stadium, luego de igualar 3-3 en los 120 minutos. Jugó un enorme partido hasta el descuento de Mbappé y no mereció sufrir. El haberse impuesto en la mejor final de la historia no hizo más que inyectarle épica a una conquista trabajada, sufrida, pero cargada de mística... Y muy buen fútbol. Se trata de la tercera estrella para la Selección y la primera en el torneo para el astro rosarino que, a los 35 años, logró su gran sueño, como Maradona en 1986.'}>
                </BlogPost>
            </div>
        </main>
    )
}