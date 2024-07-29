import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { headerLinks } from './data/headerLinks';

const App = () => {
  return (
    <>
      <Header pages={headerLinks} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
