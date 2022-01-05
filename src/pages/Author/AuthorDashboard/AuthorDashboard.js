import React from 'react';
import { Col, Row, Container, Nav } from 'react-bootstrap';
import './AuthorDashboard.css'

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Route, Routes } from 'react-router';
import { useLocation } from 'react-router-dom';
import AuthorSidebar from './../AuthorSidebar/AuthorSidebar';
import Category from './../../Admin/Category/Category';

const AuthorDashboard = () => {

    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <div className="AdminDashboardContainer mt-5">
            <Container >
                <Row>
                    <Col md={3} >
                        <AuthorSidebar/>
                    </Col>
                    <Col md={9} id="page-content-wrapper">
                        <Routes>
                            <Route path='' element={'<AdminDashboard/>'} />
                            <Route path='category' element={<Category />} />
                            <Route path='add-service' element={'<AddService />'} />
                            <Route path='all-services' element={'<AllServices />'} />
                        </Routes>
                    </Col>
                </Row>
            </Container>

        </div >
    );
}

export default AuthorDashboard;