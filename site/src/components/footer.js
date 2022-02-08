import React, {useState} from 'react';


const Footer = () => {

  const [count, setCount] = useState(0);

  return (

      <footer>
        © {new Date().getFullYear()}, Built with Gatsby
        <p>
          You clicked {count} times
        </p>
        <button onClick={() => setCount(count+1)}>
          Click me
        </button>
      </footer>

  )

};

export default Footer;
