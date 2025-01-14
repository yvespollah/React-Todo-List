// import { useState } from "react";

import { useState } from "react";



function App() {   // on vas cree les ccommposant fonctionel

  // state ( etat , data)
  const [fruits, setaFruits] = useState([
    {id: 1 , nom: "orange"},
    {id: 2 , nom: "banane"},
    {id: 3 , nom: "pomme"}

  ]);

  // c'est possible de mettre du js dans une variable
const voiture =  <li>rav4</li>

// un tab de voitures
const voitures =  [<li>mercedes</li> , <li>2ba2</li> , <li>popof</li> ]


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


  //-------------------------------------------------------------------------------------------------------------
  //  affichage (render)


  // on vas essayer de rendre cette liste dynamique
  return (
  <div>
    <h1>Liste fruit</h1>
    <ul>
        {fruits.map((fruit)=> (// fruit c'est la variable qui vas parcourit le tab js
          <li key={fruit.id}>
            {fruit.nom}<button onClick={() =>handleDelete(fruit.id)}>x</button>
          </li>
        ))}
      

   </ul>
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


*/