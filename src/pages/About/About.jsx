import FloatingImage from '../../components/FloatingImage/FloatingImage';
import './About.css';

const About = () => {
  return (
    <section id="about" className="stitched">
      <h2>
        Acerca de <span className="chubby-title">kawaiiWeather</span>
      </h2>
      <p>Esta aplicación está hecha con React y js vanilla.</p>
      <p>
        Los datos del clima fueron obtenidos con la api de{' '}
        <a href="https://openweathermap.org/" target="_blank">
          OpenWeather
        </a>
        .
      </p>
      <p>
        Las imágenes son de{' '}
        <a href="https://www.flaticon.com/" target="_blank">
          Flaticon
        </a>
        .
      </p>
      <FloatingImage />
    </section>
  );
};

export default About;
