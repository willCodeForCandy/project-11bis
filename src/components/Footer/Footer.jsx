import { socialsArray } from '../../data/footerLinks';
import Socials from '../Socials/Socials';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="stitched">
      <p>Made with love by @Viru</p>
      <menu>
        <Socials socialsArray={socialsArray} />
      </menu>
    </footer>
  );
};

export default Footer;
