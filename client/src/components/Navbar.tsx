import { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import ErrorMessage from '../components/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import '../App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCar, faClock, faPhone, faAngleRight, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Alert } from 'react-bootstrap';

// import { logout } from '../redux/actions/userActions2';


function Navbar() {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const { error } = userRegister;



    const logOut = () => {
        <Alert variant="success">
            <Alert.Heading>Successfully Logged you out!</Alert.Heading>
        </Alert>
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        // {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        // {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}

        <div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                
                <a href="/" className="navbar-brand d-inline-flex px-4 py-3 px-lg-5">
                    {/* <h2 className="m-0" style={{color: 'orangered', display: 'inline-flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
                        <FontAwesomeIcon icon={faCar} size="6x" 
                            style={{color: 'orangered', marginRight: '10px'}}/>
                            SmartCars
                    </h2> */}
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
                                        <a href="/about" className="nav-item nav-link" style={{color: 'orangered'}}>About</a>
                                        <a href="/services" className="nav-item nav-link" style={{color: 'orangered'}}>Services</a>
                                        <a href="/contact" className="nav-item nav-link" style={{color: 'orangered'}}>Contact</a>
                                        <a href="/register" className="nav-item nav-link" style={{color: 'orangered'}}>SignUp</a>
                                        <a href="/login" className="nav-item nav-link" style={{color: 'orangered'}}>Login</a>
                                    </>
                            }
                        </>
                        
                        { localStorage.getItem('user') ?
                            <>
                                <a href="/home" className="nav-item nav-link active" style={{color: 'orangered'}}>Home</a>
                                <a href="/about" className="nav-item nav-link" style={{color: 'orangered'}}>About</a>
                                <a href="/services" className="nav-item nav-link" style={{color: 'orangered'}}>Services</a>
                                <a href="/contact" className="nav-item nav-link" style={{color: 'orangered'}}>Contact</a>
                                
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

            {/* -- Footer Start */}
            <div className="container-fluid bg-dark text-light footer3 pt-5 pb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5 foot">
                        <div className="col-lg-4 col-md-8">
                            <h4 className="text-light mb-4 foot-head"><span><u>Address</u></span></h4>
                        
                            <div className="d-flex pt-2 foot-con">
                                {/* <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon="fa-brands fa-facebook" size="6x" />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon="fa-brands fa-twitter" size="6x"/>
                                </a>
                                <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon="fa-brands fa-linkedin" size="6x" />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon="fa-brands fa-instagram" size="6x"/>
                                </a> */}
                            </div>
                        </div>
                       
                    </div>
                </div>
                <hr />

                {/* Copyright */}
                <div className="copyright2">
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="p-small">Copyright. <a style={{color: 'orangered'}} href="/">Top-Up Mama</a>  &copy;2022.</p>
                                <p className="p-small">Designed and Developed By <a style={{color: 'orangered'}} href="https://dev-mourice.herokuapp.com/" target="_blank" rel="noopener noreferrer"><strong>Mo-Tech Solutions</strong></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;