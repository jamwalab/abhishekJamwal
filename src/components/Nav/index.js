import React, { useEffect } from 'react';

const Nav = function(props) {

  const {
    pageSelected,
    setPageSelected
  } = props;

  useEffect(() => {
    document.title = `Abhishek- ${pageSelected}`;
  });

  return(
    <header className="flex-row space-between px-2 bottom-margin">
      <h1 className="webTitle">
        <a href='/abhishek' className='px-1 py-1'>AJ</a>  
      </h1>
      
      <nav>
        <ul className="flex-row">
          <li>
            <a href='#home' className={`mx-2 ${pageSelected === `Home` && `navActive`}`} onClick={() => setPageSelected("Home")}>Home</a>
          </li>
          <li>
            <a href='#portfolio' className={`mx-2 ${pageSelected === `Portfolio` && `navActive`}`} onClick={() => setPageSelected("Portfolio")}>Portfolio</a>
          </li>
          <li>
            <a href='#contact' className={`mx-2 ${pageSelected === `Contact` && `navActive`}`} onClick={() => setPageSelected("Contact")}>Contact</a>
          </li>
          <li>
            <a href='#resume' className={`mx-2 ${pageSelected === `Resume` && `navActive`}`} onClick={() => setPageSelected("Resume")}>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;