/*
  Le rôle de ce composant sera de fetch les données depuis l'API JSON et de fournir aux composants AlbumDetail les données triées.
*/

/*
  - On va d'abord afficher un simple Text et l'afficher dans notre application.
  - Quand va-t-on décider de fetch les données ? Dès que l'application a chargé, il faut donc un gestionnaire d'évènement. Les CBC (class-based-component) ont un avantage sur les FC (functional component), ils possèdent ce qu'on appelle les Lifecycle Methods. Ce sont des fonctions qui prendront place à l'intérieur de nos Class qui seront automatiquement appelées à un moment.

  Ne pas trop s'arrêter sur ce qu'est une Lifecycle Method

  faire un componentWillMount, tester avec un console.log
  Montrer comment on débug -> CMD+D -> ouvrir le navigateur -> console

  State : est ... qui sépare deux états : la liste sans données, la liste avec des données. C'est via State que l'on saura quand rafraichir le contenu. Pour le moment il nous est impossible de savoir quand (en combien de temps) la requête va être réalisée.

*/

import React, {Component} from 'react';
import {View, Text} from 'react-native'

export default class App extends Component {
  // State est un class level property. State = Object vide
  // Il y a plusieurs façon d'accéder au State, getInitial state, Constructor, etc.

  state = {albums : []};
  // il faut gérer le retour de la requête avec un State
  // .then(response => this.setState({albums:response.data})); dans componentWillMount

  // via un évènement, on va faire quelque chose
  componentWillMount(){
    // On fait une requète HTTP vers une API
    const albums = fetch('https://rallycoding.herokuapp.com/api/music_albums');

    // On traite la réponse avec une promise
    albums
    .then(data => data.json())
    .then(data => {console.log(data)})


  }
  render(){
    console.log(this.state);
    return(
      <View>
        <Text> Album List </Text>
      </View>
    );
  }
} // les classes ne prennent pas de ;
