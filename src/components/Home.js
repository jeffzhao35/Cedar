import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Home.css';
import bannerImg from '../images/banner.jpg';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-banner">
          <div className="centered">
            <h1 className="title">Welcome to Cedar</h1>
            <h4>A community dedicated to connecting borrowers and lenders</h4>
          </div>
          <div className="banner-cover" />
          <img className="banner-img" src={bannerImg} alt="cedar trees" />
        </div>
        <div className="container content">
          <div className="row row-home">
            <h3>What does Cedar do?</h3>
            <p>Cedar is a social networking web application that connects borrowers and lenders from around the globe. By matching borrowers with potential investors in a transparent and easily accessible way, Cedar optimizes the peer-to-peer marketplace within the world of microloaning. Furthermore, chatbot integration and machine learning allow Cedar to interact with the unbanked in a manner previously unheard of. With roots in regions across the Earth, Cedar is revolutionizing the field of microloan networking.</p>
          </div>
          <br />
          <div className="row row-home">
            <div className="start-borrow col sign-up-opt" style={{ borderRightWidth: 1, borderRightStyle: 'solid', borderRightColor: 'black' }}>
              <h4>Looking to apply for a loan?</h4>
              <p>Chat with our interative bot, Juniper, to create a profile and find compatible lenders.</p>
              <button type="button" className="btn btn-info"><Link to='/chatbot' style={{ textDecoration: 'none', color: 'white' }}>Start borrowing</Link></button>
            </div>
            <div className="start-lend col sign-up-opt">
              <h4>Looking to lend to others?</h4>
              <p>Tell us about the businesses you're interested in and we'll match you with suitable prospects.</p>
              <button type="button" className="btn btn-info"><Link to='/signup' style={{ textDecoration: 'none', color: 'white' }}>Start investing</Link></button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
