import './Loader.css';
import loader from '/assets/loading.gif';
const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="Nubecita feliz con lluvia" />
    </div>
  );
};

export default Loader;
