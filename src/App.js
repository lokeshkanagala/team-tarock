import React, { Component } from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import axios from 'axios';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Container from 'react-bootstrap/Container';

const MEETUPS_URL = "https://933y46jk97.execute-api.us-east-1.amazonaws.com/Stage-1/events";
const HOME_URL = "https://933y46jk97.execute-api.us-east-1.amazonaws.com/Stage-1/home";

class App extends Component {
  state = {homeData: {}, meetupsData: {}};

  async componentDidMount() {
    const response = await axios.get(HOME_URL);

    this.setState({homeData: JSON.parse(response.data.body)});
  }

  render() {
    return(
      <div>
        <Header headerData={this.state.homeData.navbar} />
        <Container>
        <Router>
          <Route exact path="/" render={() => <Home data={this.state.homeData}/>}/>
        </Router>
        </Container>
      </div>
    );
  }
}

export default App;