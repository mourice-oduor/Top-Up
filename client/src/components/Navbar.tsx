import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Navbar() {

    // @ts-ignore
    const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();

    const logOut = () => {
        <Alert>
            <Alert.Heading>Successfully Logged you out</Alert.Heading>
        </Alert>
        localStorage.removeItem('user');
        navigate('/');
    };
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                
                <a href="/" className="navbar-brand d-inline-flex px-4 py-3 px-lg-5">
                   <h2>Top-Up Mama</h2>
                </a>
                
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <>
                            {
                                localStorage.getItem('user') ?
                                    <>
                                    
                                    </>
                                    :

                                    <>
                                        <a href="/home" className="nav-item nav-link active" style={{color: 'orangered'}}>Home</a>
                                        <a href="/about" className="nav-item nav-link" style={{color: 'orangered'}}>Users</a>
                                        <a href="/register" className="nav-item nav-link" style={{color: 'orangered'}}>SignUp</a>
                                        <a href="/login" className="nav-item nav-link" style={{color: 'orangered'}}>Login</a>
                                        <a href="/profile" className="nav-item nav-link" style={{color: 'orangered'}}>Profile</a>
                                    </>
                            }
                        </>
                        
                        { localStorage.getItem('user') ?
                            <>
                                <a href="/home" className="nav-item nav-link active" style={{color: 'orangered'}}>Home</a>
                                <a href="/users" className="nav-item nav-link" style={{color: 'orangered'}}>Users</a>
                                <a href="/profile" className="nav-item nav-link" style={{color: 'orangered'}}>Profile</a>
                                
                                <div className="nav-item dropdown">
                                    <a href="/" style={{color: 'orangered'}} className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                        <span> {user && user?.name}</span>
                                    </a>
                                    <div className="dropdown-menu fade-up m-0">
                                        <a href="/" className="dropdown-item" style={{color: 'orangered'}} onClick={logOut}>Logout</a>
                                    </div>
                                </div>
                            </>
                            :null
                        }
                    </div>
                </div>
            </nav>

            {/* <div className="copyright2">
                <div>
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="p-small">Copyright. <a style={{color: 'orangered'}} href="/">SmartCars</a>  &copy;2022.</p>
                            <p className="p-small">Designed and Developed By <a style={{color: 'orangered'}} href="https://dev-mourice.herokuapp.com/" target="_blank" rel="noopener noreferrer"><strong>Mo-Tech Solutions</strong></a></p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Navbar;