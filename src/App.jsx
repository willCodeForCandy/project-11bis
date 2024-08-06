import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { headerLinks } from './data/headerLinks';
import { CoordsProvider } from './context/CoordsProvider';

const App = () => {
  console.log('Rendering app');
  return (
    <>
      <Header pages={headerLinks} />
      <main>
        <CoordsProvider>
          <Outlet />
        </CoordsProvider>
      </main>
      <Footer />
    </>
  );
};

export default App;
