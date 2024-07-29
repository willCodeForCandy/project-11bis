import './Socials.css';
const Socials = ({ socialsArray = [] }) => {
  return (
    <>
      {socialsArray.map((social, index) => {
        return (
          <li key={index} className="socials">
            <a href={social.url} target="_blank" rel="noopener">
              <img src={social.icon} alt={social.name} />
            </a>
          </li>
        );
      })}
    </>
  );
};

export default Socials;
