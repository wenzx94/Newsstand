import 'materialize-css/dist/css/materialize.min.css';

import NewsPanel from '../NewsPanel/NewsPanel';
import React from 'react';
import logo from './logo.png';
import './App.css';
class App extends React.Component{
    render(){
        return(
            <div>
                <img className='logo' src={logo} alt='log image'/>
                <div className='container'>
                    <NewsPanel />
                </div>
            </div>
        )
    }
}

export default App;