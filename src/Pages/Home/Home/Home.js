import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import History from '../History/History';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';



const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <History></History>
            <Footer></Footer>

        </div>
    );
};

export default Home;