import { useState } from "react";



function App() {   // on vas cree les ccommposant fonctionel

  // state ( etat , data)
  const [compteur , setCompteur] = useState(1) // je definit un state et jinitialise a 1 et je recuper dans la variable compteur , et je pourait modifier uniquement avecla variable setCompteur
  
  // COMPORTEMENT (se sont  fonction) . par preerence pour les compt, j vais utiliser les fxn flecher (const)
  const handleClick = () => {
    // verifier le le comportement est bien brancher a l'afichage
    setCompteur(compteur + 1)

  };


  //  affichage (render)
  return (

    <div>
      <h1>{compteur}</h1>
      <button onClick={handleClick}>increment</button> 
    </div> // je branche un comportement
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

*/