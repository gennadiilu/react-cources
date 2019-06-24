import React from 'react';
import { Link } from 'react-router-dom';

const displayName = 'Home';

function Home() {
  return (
    <React.Fragment>
      <h1>
        <Link to="/ReactJS">ReactJS</Link>
      </h1>
      <h1>
        <Link to="/Routing">Routing</Link>
      </h1>
      <h1>
        <Link to="/Redux">Redux</Link>
      </h1>
      <h1>
        <Link to="/Styled">Styled Components</Link>
      </h1>
    </React.Fragment>
  );
}

Home.displayName = displayName;

export default Home;
