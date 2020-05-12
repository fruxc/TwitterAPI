import React, { Component } from "react";

/* Axios client to send Ajax requests to the REST API. */
import axios from "axios";
import {
  IonContent,
  IonInput,
  IonLabel,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
} from "@ionic/react";

class AddUser extends Component {
  constructor(props: any) {
    super(props);
    console.log(props);
  }
  API_URL = `http://localhost:3000/data/`;
  state = {
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    const user = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      avatar: this.state.avatar,
      email: this.state.email,
    };
    axios.post(this.API_URL, user).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Twitter API</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <form onSubmit={this.handleSubmit}>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              type="email"
              placeholder="Email"
              name="Email"
              onIonChange={(e: any) => this.setState({ email: e.target.value })}
            />
            <IonLabel position="floating">First Name</IonLabel>
            <IonInput
              type="text"
              placeholder="First Name"
              name="firstName"
              onIonChange={(e: any) =>
                this.setState({ firstName: e.target.value })
              }
            />
            <IonLabel position="floating">LastName</IonLabel>
            <IonInput
              type="text"
              placeholder="Last Name"
              name="lastName"
              onIonChange={(e: any) =>
                this.setState({ lastName: e.target.value })
              }
            />
            <IonButton type="submit" routerLink="/home">
              Add
            </IonButton>
          </form>
        </IonContent>
      </IonPage>
    );
  }
}

export default AddUser;
