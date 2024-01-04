import { useState } from 'react';
import './App.css';
import ImcCalc from './components/ImcCalc';
import ImcInfo from './components/ImcInfo';
import { data } from './data/data';

function App() {

  const [imc,setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e,height,weight) => {
    e.preventDefault();

    if(!height && !weight) return;

    const heightFloat = +height.replace(",","."); 
    const weightFloat = +weight.replace(",","."); 

    const imcResult = (weightFloat / (heightFloat *heightFloat)).toFixed(1);
    setImc(imcResult);

    data.forEach((item) =>{
      if(imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    })
  };

  const resetCalc = (e) =>{
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  return (
    <>
    <div className='container'>
      {!imc ? (
        <ImcCalc calcImc = {calcImc} /> 
      ) : ( 
        <ImcInfo data = {data} imc={imc} info={info} infoClass={infoClass} resetCalc = {resetCalc}/> 
      )}
    </div>
    </>
  );
}

export default App
