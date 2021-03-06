import React, { Component } from 'react';

import Header from 'includes/Header';
import Hero from 'includes/Hero';
import MostPicked from 'includes/MostPicked';
import landingPage from 'json/landingPage';
import Categories from 'includes/Categories';
import Testimony from 'includes/Testimony';
import Footer from 'includes/Footer';

export default class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return <>
      {/* memparsing semua props yang ada */}
      <Header {...this.props}></Header>
      {false && JSON.stringify(landingPage.hero)}
      <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
      <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
      <Categories data={landingPage.categories} />
      <Testimony data={landingPage.testimonial} />
      <Footer />
    </>
  }
}
