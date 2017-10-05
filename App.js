import React from 'react';
import { View } from 'react-native';
import Header from './src/component/Header.js';
import AlbumList from './src/component/AlbumList.js';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'}/>
        <AlbumList />
      </View>
    );
  }
}






/*
* Créer un composant
* 1) Importer React
* 2) Importer React Native -> responsable de l'affichage
* 3) Créer le composant : avec une arrow function dans un premier temps > composant fonctionnel pas de class
* 4) Enregistrer le composant -> uniquement le composant racine utilise AppRegistry
*
*
* Modulariser
* 1) Créer un dossier src
* 2) Créer un sous-dossier components
* 3) Créer un fichier JS (par composant)
* 4) Répéter l'opération 1 - Créer un composant
* 5) exporter le composant : export default Header (rendre le composant disponible pour les autres composants)
* 6) importer le composant dans notre fichier d'application principale : <Header />
*
* Style
* 1) créer un objet stocké dans une constante pour nos styles const styles = {styleElement:{}}
* 2) Déstructurer l'import : créer un objet const {ce que l'ont veut} = styles;
* 3) Appliquer le style à l'élément JSX de notre choix => style.StyleElement -> ceci est une prop (propriété)
* 4) Pas obliger de faire l'import déstructurer mais on peut aussi faire référence directe à styles.styleElement
*
*
* Réutilisation du Header
* Comme c'est l'app.js qui affiche le header, ça serait bien que ce composant root puisse décider de quoi afficher en fonction du context
* On va utiliser un système dans props (// paramètre)
* Quand on veut passer des données d'un parent à un enfant, on utilise props (propriété)
* On passe props à la création du composant (props) => {}
* Props est une objet javascript
* quand ont fait référence à un(e) props on utilise {} /// => <Text> Album</Text> -> Albums -> props.textHeader
* Dans le parent <Header headerText={"Albums"} />
* Quand le header est rendu, on passe une props avec une valeur
* Le fichier Header est appelé avec le passage de props et récupère ce qui a été passé dans le fichier parent qui réalise l'appel
*
*
* */


// Leur laisser faire l'import du composant AlbumList
/*
* Ils vont avoir l'erreur du duo de tag retourné à l'app alors qu'ils n'en faut qu'un
*
*
* Importer React + component
* React ne peut pas être perdu car il est responsable de createElement dans babel pour transformation JSX
* */
