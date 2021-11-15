import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        <div>
            <div className='footer-container'>
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6>About  Eye Zone</h6>
                                <p className="text-justify">After all, this heritage powerhouse has been making very high-quality, stylish sunglasses for more than 80 years — its Aviator-style shades were originally designed for military use but went “public” in 1937.
                                    Today, Ray-Ban's iconic Wayfarer sunglasses are one of the world’s most recognizable fashion accessories. They’ve been worn by equally iconic figures — from Muhammad Ali and President John F. Kennedy to Bob Dylan and Michael Jackson — which has helped Ray-Ban define “cool” for generations.
                                </p>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <h6>Categories</h6>
                                <ul className="footer-links">
                                    <li><a href="#/">All Packeg</a></li>
                                    <li><a href="#/">Special</a></li>
                                    <li><a href="#/">International</a></li>
                                    <li><a href="#/">Local</a></li>
                                    <li><a href="#/">VIP</a></li>
                                    <li><a href="#/">Simple</a></li>
                                </ul>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <h6>Quick Links</h6>
                                <ul className="footer-links">
                                    <li><a href="#/">About Us</a></li>
                                    <li><a href="#/">Contact Us</a></li>
                                    <li><a href="#/">Contribute</a></li>
                                    <li><a href="#/">Privacy Policy</a></li>
                                    <li><a href="#/">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                                    Eye Zone
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><i className="fab fa-facebook"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer >
            </div >
        </div>
    );
};

export default Footer;