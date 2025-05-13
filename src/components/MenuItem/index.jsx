import './style.css';

export const MenuItem = ({ text, onSelect }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onSelect) {
      onSelect(text); // předání názvu stránky
    }
  };

  return (
    <a href="#" className="menu-item" onClick={handleClick}>
      {text}
    </a>
  );
};