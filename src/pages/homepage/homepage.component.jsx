import React from 'react';
import './homepage.styles.css';
import Directory from '../../components/directory/directory.component';


const HomePage = () => (
  <div className='homepage'>
    <Directory history={history} />
  </div>

  
);

export default HomePage;