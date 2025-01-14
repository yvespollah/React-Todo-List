// import { useState } from "react";

import { useState } from "react";
import Fruit from "./components/Fruit"
import FruitForm from "./components/FruitForm"



function App() {   // on vas cree les ccommposant fonctionel

  // state ( etat , data)
  const [fruits, setaFruits] = useState([
    {id: 1 , nom: "orange"},
    {id: 2 , nom: "banane"},
    {id: 3 , nom: "pomme"}

  ]);
 // deuxieme partie du state



 // ------------------------------------------------------------------------------------------------------------
  // COMPORTEMENT (se sont  fonction) . par preerence pour les compt, j vais utiliser les fxn flecher (const)

  const handleDelete = (id)  => {
    // le procede consist a 
    // 1. copier mon state
    const fruitCopy = [...fruits];

    // 2. maniputer (agir) sur la copie de mon state

    const fruitUpdate = fruitCopy.filter((fruit) => (fruit.id !== id)); // me renvoie uniquement les fruit que id est diff de id

    // 3. modifier  mon state avec le setters
    setaFruits(fruitUpdate);
  };


  // formulaire




  //-------------------------------------------------------------------------------------------------------------
  //  affichage (render)


  // on vas essayer de rendre cette liste dynamique
  return (
  <div>
    <h1>Liste fruit</h1>
    <ul>
        {fruits.map((fruit)=> (// fruit c'est la variable qui vas parcourit le tab js

          <Fruit key={fruit.id} fruitInfo = {fruit} onFruitDelete = {handleDelete}/> // passage des props a l'enfant
        ))}
   </ul>
       <FruitForm bfruits = {fruits} SetaFruits = {setaFruits}/>
  </div>
  
  );
}

export default  App;





/*
composant
      state ( etat , data)
      comportement

      affichage (render)
      return jsx ( dev by facebook nous permet decreire html dans ja)

      usestate ( function fournit pas la librarie react) ---> hook

-------------------------------------------------------------------------------------------
      NB: ne modiier jamais un state directement. tjr passer par le setters
-----------------------------------------------------

.map boucle sur un tableau js et envoi le resultat dans un tab jsx ( on passe la fxn qui transforme se tableau en paramettre de map)

------------------------------------------------------

l'attribut key c'est pour identifier chaque elemet de la liste. pour que quand je modifie , c'est uniqement lui et pas les autres
--------------------------------------------------------------

slice : permet de fair une copie de mon tab , une atres mettyhose est d'eclater mon tablea ...tab

----------------------------------------------------------

la methode filter: cree un 2e tab en filtrant un 1r tab selon les condition



***********************Gestion des formulaires****************

1. creation du formulaire

2. soumission du formulaire
3a. collecte de donnes du formulaires
3b. methode de sync descendant / ascendant

NB: en js , l'orseque une fonction est lier au evenement , la fonction prend en parametre evenement . a travel levenment , on peur acceder a ces params

NB: en react on ne manipule pas le dom. react le fait pour nous ( donc il ya pas les GetElemetbiid())
soln

hook ( useRef) : c'est une fxn de la librarie react qui cree une reference a un element
NB: on evite le useref car il ne fournit pas le re render de l'affichage automatiquement car on ne modifie pas le state


***** nous on vas preferer travailler avc le state*********
evenement onChange

push ajout un elementt en fin du tab

------------------------------------------------------------------
on essage de decouper le code en petit composant

1. cree dosier component > 

-on fait passer des props du composant parent au composant enfant
- on doit aussi recevoir les props dans le composant enfant
- l'enant consome les props


-c'est mieux de porter un composant enfant avec tout ce quil a besoin



*/