export default function Fruit({fruitInfo , key,onFruitDelete } ){

// state
// const fruitInfo = props.fruitInfo
// const onFruitDelete = props.onFruitDelete

// on peur destructurer les objet

// const {fruitInfo , onFruitDelete } = props

// comportement



// affichage (render)
return (
    <li key={key}>
    {fruitInfo.nom}<button onClick={() =>onFruitDelete(fruitInfo.id)}>x</button>
  </li>

);
}