import React from 'react';
import {Outlet} from 'react-router-dom'
import SideBar from './SideBar';

function CourseMain(props) {
    return (
        <div className='row' style={{ minHeight :"85vh" }}>
            <SideBar > </SideBar>
            <Outlet></Outlet>
        </div>
    );
}

export default CourseMain;