import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [pageTitle, setPageTitle] = useState('Domů');

  const handleToggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const handleSelectItem = (page) => {
    setPageTitle(page);
    setMenuOpened(false);
  };

  const menuClass = menuOpened ? 'menu' : 'menu menu--closed';

  return (
    <>
      <header>
        <div className={menuClass}>
          <button className="menu__btn" onClick={handleToggleMenu}></button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={handleSelectItem} />
            <MenuItem text="Naše nabídka" onSelect={handleSelectItem} />
            <MenuItem text="Náš tým" onSelect={handleSelectItem} />
            <MenuItem text="Blog" onSelect={handleSelectItem} />
            <MenuItem text="Kontakt" onSelect={handleSelectItem} />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};