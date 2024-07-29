import { getRandomIcon } from '../../utils/weatherIcons';
import './FloatingImage.css';

const FloatingImage = () => {
  return (
    <img src={getRandomIcon()} alt="random weather image" className="floater" />
  );
};

export default FloatingImage;
