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




  //-------------------------------------------------------------------------------------------------------------
  //  affichage (render)


  // on vas essayer de rendre cette liste dynamique
  return (
  <div>
    <h1>Liste fruit</h1>
    <ul>
        {voiture}
        {voitures}
        {fruits.map((fruit)=> { // fruit c'est la variable qui vas parcourit le tab js
          return <li>{fruit.nom}</li>
        })}
      

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

*/