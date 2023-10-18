
import Practica1 from './practica_1/Practica1';
import Practica2 from './practica_2/Practica2';
import Practica3 from './practica_3/Practica3';
import Practica4 from './practica_4/Practica4';
import { useContext } from 'react';
import { MenuContext } from './context/menuContext';
export default function MainContent () {
    const {practiceSelected} = useContext(MenuContext);
    return (
        <main>
            { practiceSelected === 'Practica 1' && <Practica1 /> }
            { practiceSelected === 'Practica 2' && <Practica2 /> }
            { practiceSelected === 'Practica 3' && <Practica3 /> }
            { practiceSelected === 'Practica 4' && <Practica4 /> }
        </main>
    );
}