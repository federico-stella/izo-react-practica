
import './App.css';
import Menu from './Menu';
import MainContent from './MainContent';
import { useContext, useEffect } from 'react';
import { MenuContext } from './context/menuContext';

function App() {
  const {practiceSelected} = useContext(MenuContext)
  useEffect(() => {
    document.title = practiceSelected
  },[practiceSelected])
  return (
    <div className='pagina'>
      <Menu/>
      <MainContent />
    </div>
  );
}

export default App;
