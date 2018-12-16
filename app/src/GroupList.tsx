import * as React from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import { Link } from 'react-router-dom';
import AppNavbar from './AppNavbar';

class GroupList extends React.Component {

  state = {
      isLoading: true,
      groups: []
  };

  constructor(props) {
    super(props);
    this.state = {groups:[], isLoading:true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {

    this.setState({isLoading: true});

    fetch("http://localhost:8080/api/groups").then(response => response.json())
    .then(data => this.setState({groups : data, isLoading : false}));
   }

    async remove(id) {

      await fetch(`/api/group/${id}`, {
          method: 'DELETE',
          headers : {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
          }

      }).then(() => {

          const updatedGroups = [...this.state.groups].filter(i => i.id !== id);

          this.setState({groups : updatedGroups});

      });
    }

    render() {

        const {groups, isLoading} = this.state;

        if(isLoading) {

          return <p>Loading...</p>;
        }

        const groupList = groups.map(group => {

          const address = `${group.address || ''} ${group.city || ''} ${group.state || ''}`;

          return <tr key={group.id}>
                    <td> {group.name}</td>
                    <td> {address} </td>
                    <td>
                      <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/groups/" + group.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={this.remove(group.id)}>Delete</Button>
                      </ButtonGroup>
                   </td>
            </tr>

        });

        return (


          <div>
            <AppNavbar />
            <Container fluid={true}>
              <div className = "float-right">
              <Button color="success" tag={Link} to="/groups/new">Add Group</Button>
              </div>
              <h3> Development Tours </h3>

              <Table className = "mt-4">
                <thead>
                  <tr>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Actions</th>
                  </tr>
               </thead>
                <tbody>
                      {groupList}
                </tbody>
               </Table>
            </Container>

          </div>
        );

    }

  }

export default GroupList;
