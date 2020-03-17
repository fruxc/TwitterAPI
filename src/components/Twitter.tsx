import React, { Component } from 'react';

/* Axios client to send Ajax requests to the REST API. */
import axios from "axios";
import { IonApp, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';


class Twitter extends Component {
  API_URL = `https://reqres.in/api/users?page=0&per_page=12`;

  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get(this.API_URL)
      .then(response => response.data)
      .then(data => {
        this.setState({ users: data.data });
        console.log(this.state.users);
      });
  }
  render() {
    return (
      <IonApp>
        <IonContent fullscreen>
          {this.state.users.map(
            ({ id, email, first_name, last_name, avatar }) => (
              <IonCard key={id}>
                <img alt="profile" src={avatar} />
                <IonCardHeader>
                  <IonCardTitle>{first_name}</IonCardTitle>
                  <IonCardSubtitle>{last_name}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Email: {email}</IonCardContent>
              </IonCard>
            )
          )}
        </IonContent>
      </IonApp>
    );
  }
};

export default Twitter;
