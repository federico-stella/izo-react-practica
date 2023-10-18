import Header from "./components/Header";
import Main from "./components/Main";
import Page from "./components/Page";
import './Practica2.css'

export default function Practica2 () {
    const site = {
        pageTitle: 'Unidad 1.2 - Práctica',
        pageBody: 'Implementación de árbol de componentes y propiedades en React.'
      };
    return (
        <div className="contenedor">
            <Page>
                <Header pageTitle={site.pageTitle}/>
                <Main pageBody={site.pageBody}
                links={[
                    'https://www.google.com.ar',
                    'https://institutozonaoeste.edu.ar/'
                ]}
                />
            </Page>  
        </div>
    );
}