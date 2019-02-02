import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import styled from 'styled-components';
import Loader from './components/Loader';
import Menu from './components/Menu';
import About from './components/About';
import Services from './components/Services';
import Extra from './components/Extra';
import Materials from './components/Materials';
import Gallery from './components/Gallery';
import Head from './components/Head';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
      loading: true,
      menuOpen: false
    };
  }

  componentDidMount() {
    const url =
      'https://webmngmnt.vesna-makeup.com.ua/wp-json/wp/v2/pages?slug=index';
    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          content: data['0'].acf,
          loading: false
        });
      });
  }

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  closeMenu = () => {
    this.setState({
      menuOpen: false
    });
  };

  render() {
    const { content, loading } = this.state;
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop closeMenu={this.closeMenu}>
            <div className="container-fluid">
              <div className="row">
                {loading ? (
                  <Loader />
                ) : (
                  <React.Fragment>
                    <MenuEl className="col-sm-12 col-md-2 p-0">
                      <Route
                        path="/"
                        render={() => (
                          <Menu
                            toggleMenu={this.toggleMenu}
                            menuOpen={this.state.menuOpen}
                          />
                        )}
                      />
                    </MenuEl>
                    <BodyEl
                      className={
                        'col-sm-12 col-md-10' +
                        (this.state.menuOpen ? ' collapsed' : '')
                      }
                    >
                      <Route
                        exact
                        path="/"
                        render={props => (
                          <React.Fragment>
                            <Head />
                            <About content={content.about} />
                            <Footer />
                          </React.Fragment>
                        )}
                      />
                      <Route
                        exact
                        path="/services"
                        render={props => (
                          <React.Fragment>
                            <Services content={content.services}>
                              <Materials content={content.materials} />
                              <Extra content={content.services_description} />
                            </Services>
                            <Footer />
                          </React.Fragment>
                        )}
                      />
                      <Route
                        exact
                        path="/gallery"
                        render={props => (
                          <React.Fragment>
                            <Gallery content={content.gallery} />
                            <Footer />
                          </React.Fragment>
                        )}
                      />
                    </BodyEl>
                  </React.Fragment>
                )}
              </div>
            </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;

const BodyEl = styled.div`
  transition: transform 0.5s;
  &.collapsed {
    transform: translate3d(85%, 0, 0);
    @media screen and (min-width: 768px) {
      & {
        transform: none;
        transition: transform 0s;
      }
    }
  }
`;

const MenuEl = styled.div`
  min-height: 4em;
  background-color: #000018;
`;
