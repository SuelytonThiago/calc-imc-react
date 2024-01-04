import Button from "./Button";
import "./ImcCalc.css";
import "./Button.jsx"
import { useState } from "react";



const ImcCalc = ({calcImc}) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) =>{
    e.preventDefault();
    setHeight("");
    setWeight("");
  }

  const validDigits = (text) =>{
    return text.replace(/[^0-9,]/g, "");
  };

  const handleHeightChange = (e) =>  {
    const updateValue = validDigits(e.target.value);
    
    setHeight(updateValue);
  };

  const handleWeightChange = (e) =>  {
    const updateValue = validDigits(e.target.value);
    
    setWeight(updateValue);
  };


  return (
    <div className="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id = "calc-form">
        <div className="calc-input">
          <div className = "form-control">
            <label htmlFor="height">Altura:</label>
            <input 
              type="text" 
              name = "height" 
              id = "height" 
              placeholder = "Exemplo: 1,75"
              onChange={(e) => handleHeightChange(e)}
              value = {height}
              />
          </div>
          <div className = "form-control">
            <label htmlFor="weight">Peso:</label>
            <input 
              type="text" 
              name = "weight" 
              id = "weight"
              placeholder = "Exemplo: 70,5"
              onChange={(e) => handleWeightChange(e)}
              value = {weight}
              />
          </div>
        </div>
        <div className="action-container">
          <Button 
            id = "calc-btn" 
            text = "Calcular" 
            action = {(e) => calcImc(e, height, weight)}
          />
          <Button 
            id = "clear-btn" 
            text = "Limpar" 
            action = {clearForm}
          />
        </div>
      </form>
    </div>
  )
}

export default ImcCalc