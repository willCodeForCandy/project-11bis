import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { headerLinks } from './data/headerLinks';
import { LocationsContextProvider } from './context';

const App = () => {
  console.log('Rendering app');
  return (
    <>
      <Header pages={headerLinks} />
      <main>
        <LocationsContextProvider>
          <Outlet />
        </LocationsContextProvider>
      </main>
      <Footer />
    </>
  );
};

export default App;
