import React from 'react';
import { useContext } from 'react';
import {Outlet} from 'react-router-dom'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import  { AuthContext } from '../context/UserContext';

function Main(props) {
    const {darkMood} = useContext(AuthContext)

    return (
        <div className={darkMood? "dark" : " "}  >
            <Header> </Header>
            <Outlet> </Outlet>
            <Footer> </Footer>

        </div>
    );
}

export default Main;