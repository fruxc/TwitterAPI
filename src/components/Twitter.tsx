import React, { Component } from "react";

/* Axios client to send Ajax requests to the REST API. */
import axios from "axios";
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";

class Twitter extends Component {
  API_URL = `http://localhost:3000/data`;

  state = {
    users: [
      {
        id: 0,
        email: "",
        first_name: "",
        last_name: "",
        avatar: "",
      },
    ],
  };

  componentDidMount() {
    axios
      .get(this.API_URL)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ users: data });
        console.log(this.state.users);
      });
  }

  handleDelete = (id: any) => {
    axios.delete(`http://localhost:3000/data/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    const users = this.state.users.filter((users) => users.id !== id);
    this.setState({ users: users });
    console.log("Deleted User:" + id);
  };
  render() {
    return (
      <IonApp>
        <IonContent fullscreen>
          <br />
          <br />
          <br />
          <IonButton routerLink="/addUser">Add User</IonButton>
          <br />
          <br />
          {this.state.users.map(
            ({ id, email, first_name, last_name, avatar }) => (
              <IonCard style={{ textAlign: "center" }} key={id}>
                <img alt="profile" src={avatar} />
                <IonCardHeader>
                  <IonCardTitle>{first_name}</IonCardTitle>
                  <IonCardSubtitle>{last_name}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Email: {email}</IonCardContent>
                <IonButton color="danger" onClick={() => this.handleDelete(id)}>
                  Delete
                </IonButton>
              </IonCard>
            )
          )}
        </IonContent>
      </IonApp>
    );
  }
}

export default Twitter;
