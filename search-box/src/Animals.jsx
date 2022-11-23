function Animals ({id, name, age, type}){
  return(
      <li key={id}>{type} {name} {age}</li>
  )
}

export default Animals