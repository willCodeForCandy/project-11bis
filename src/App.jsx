import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { headerLinks } from './data/headerLinks';
import { LocationsContextProvider } from './context/context';
import { CoordsProvider } from './context/CoordsProvider';

const App = () => {
  console.log('Rendering app');
  return (
    <>
      <Header pages={headerLinks} />
      <main>
        <CoordsProvider>
          <LocationsContextProvider>
            <Outlet />
          </LocationsContextProvider>
        </CoordsProvider>
      </main>
      <Footer />
    </>
  );
};

export default App;
