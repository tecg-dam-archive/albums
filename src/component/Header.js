import React from 'react';
import {Text} from 'react-native'


// On passe un Object props à la fonction header, fourni par le parent lors de l'appel. On récupère ensuite la valeur qui nous intéresse dans cet objet.
const Header = (bijour) => {
	return <Text> {bijour.headerText} </Text>;
}
// On exporte le composant pour qu'il soit disponible pour les autres fichiers
export default Header;








// Tester l'import du style depuis un fichier style.js
// Pourquoi déclarer deux fois style (probablement un détail et un import/utilisation/déstructure)
// comprendre comment props arrive à récupérer props.headerText (dans un autre fichier -> pe passage de para)
// Essayer de remplacer props par kikoukiokoblgk

// fetching les data depuis une API
// Créer un composant qui va récuperer cette liste et ensuite afficher une série de composants albums-individuels


/*
	On ne peut pas retourner plusieurs tag (composant) en même temps
 	ça reviendrait à dire :
 	return val1;
 	return val2;

 	Il faut donc les emballer dans un seul composant View

*/
