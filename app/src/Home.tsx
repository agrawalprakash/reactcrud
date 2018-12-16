import * as React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends React.Component {

render() {
  return (
    <div>
        <AppNavbar />
            <Container fluid={true} >
              <Button color="link" href="http://localhost:3000/groups">Manage Development Tours</Button>
            </Container>
    </div>
  );
}



}

export default Home;
