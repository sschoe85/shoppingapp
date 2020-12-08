import React from 'react';
import Directory from '../components/Directory';
import './HomePage.scss'

function HomePage(props) {
    return (
       <div className = 'homepage'>
           <Directory/>
       </div>
    );
}

export default HomePage;