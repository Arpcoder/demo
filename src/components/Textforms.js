import React,{useState} from 'react'

const Texforms = () => {
  const [text,setText]=useState("");

  const handleupClick=()=>{
    console.log("button was clicked");
    setText("You have clicked upper case");
    let newText=text.toLocaleUpperCase();
    setText(newText);
    
}

const handleloClick=()=>{
  console.log("button was clicked");
  setText("You have clicked lower case");
  let newText=text.toLocaleLowerCase();
  setText(newText);
  
}

const handleChange=(event)=>{
  console.log("button was clicked");
  setText(event.target.value);
}

  return (
    <div>
      <form>
        <div className="form-group my-4">
          <h2>User's space</h2>
          
          <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="9"></textarea>

          <button className='btn btn-success my-2' onClick={handleupClick}>Covert to capital</button>
          <button className='btn btn-success mx-2' onClick={handleloClick}>Covert to capital</button>
            <h3>Text analysis</h3>
            <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>

            <h3>Priview</h3>
            <p>{text}</p>
        </div>
      </form>
    </div>
  )
}

export default Texforms
