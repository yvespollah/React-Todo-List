import { useState } from "react";

export default function FruitForm({bfruits , SetaFruits}){

    // state

    const [nouveauFruit , SetNouveauFruit] = useState("")

    // comportement

      const handlesubmit = (event) => {
        event.preventDefault(); // pour eviter le rechargement de la page
        const fruitsCopie = [...bfruits];
    
        const id  = new Date().getTime();
        const nom = nouveauFruit;
        const FruitaAjouter = {id: id , nom: nom}
        fruitsCopie.push(FruitaAjouter)
        SetaFruits(fruitsCopie);
        SetNouveauFruit("");
    
        
      }
    
      const handleChange = (event) => {
    
        const valueAfterChange = event.target.value
        SetNouveauFruit(valueAfterChange);
        
        
      }
// render
    return (
        <form action="submit" onSubmit={handlesubmit}> 
        <input 
        value={nouveauFruit} 
        placeholder="Ajouter un fruit" 
        onChange={handleChange}
        />
        <button>Ajouter +</button>
      </form>
    );
}