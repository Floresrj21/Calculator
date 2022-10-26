import {useState} from 'react';
import "./App.css";

function CalcDisplay({display}){
  return(
    <div className="calcDisplay">
    {display}
    </div>
  );
}

function CalcButton({value, onClick}){
  return(
    <button className = "calcButton"
      onClick = {onClick}>
    {value}
    </button>
  );
}
function App(){

  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [oper,setOper] = useState(0);
  const [res,setRes] = useState(0);
  const [disp,setDisp] = useState(0);
  const [state,setState] = useState(1);

  const numberClickHandler =(e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if(state === 1){
      if(oper === 0){
        if(disp === 0){
          setNum1(value)
          setDisp(value);
        } 
        else{
          setNum1(num1+value)
          setDisp(disp+value);
        }
      } 
      else{
        if(disp === oper){
          setNum2(value)
          setDisp(value);
        } 
        else{
          setNum2(num2+value)
          setDisp(disp+value);
        }
      }
    console.log(num1 +'|'+num2 +'|'+ oper +'|'+ res+'|'+disp);
    } else if(state = 0){
      setNum1(0)
      setOper(0)
      setDisp("")
      setNum2(0)
      setRes(0);
    }
    
  }

  const plusClickHandler =(e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if(state === 1){
      if(res === 0){
        setOper(value)
        setDisp(value);
      }
      else{
        setNum1(res)
        setOper(value)
        setDisp(value)
        setNum2(0)
        setRes(0);
      }
    

    console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp);
    } else if(state = 0){
      setNum1(0)
      setOper(0)
      setDisp("")
      setNum2(0)
      setRes(0);
    }
    
  }

  const minusClickHandler =(e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if(state === 1){
      if(res === 0){
        setOper(value)
        setDisp(value);
      }
      else{
        setNum1(res)
        setOper(value)
        setDisp(value)
        setNum2(0)
        setRes(0);
      }
    

    console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp);
    } else if(state = 0){
      setNum1(0)
      setOper(0)
      setDisp("")
      setNum2(0)
      setRes(0);
    }
  }

  const multiClickHandler =(e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if(state === 1){
      if(res === 0){
        setOper(value)
        setDisp(value);
      }
      else{
        setNum1(res)
        setOper(value)
        setDisp(value)
        setNum2(0)
        setRes(0);
      }
    

    console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp);
    } else if(state = 0){
      setNum1(0)
      setOper(0)
      setDisp("")
      setNum2(0)
      setRes(0);
    }
  }

  const divideClickHandler =(e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if(state === 1){
      if(res === 0){
        setOper(value)
        setDisp(value);
      }
      else{
        setNum1(res)
        setOper(value)
        setDisp(value)
        setNum2(0)
        setRes(0);
      }
    

    console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp);
    } else if(state = 0){
      setNum1(0)
      setOper(0)
      setDisp("")
      setNum2(0)
      setRes(0);
    }
  }

  const moduloClickHandler =(e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if(state === 1){
      if(res === 0){
        setOper(value)
        setDisp(value);
      }
      else{
        setNum1(res)
        setOper(value)
        setDisp(value)
        setNum2(0)
        setRes(0);
      }
    

    console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp);
    } else if(state = 0){
      setNum1(0)
      setOper(0)
      setDisp("")
      setNum2(0)
      setRes(0);
    }
  }

  const exponentClickHandler =(e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if(state === 1){
      if(res === 0){
        setOper(value)
        setDisp(value);
      }
      else{
        setNum1(res)
        setOper(value)
        setDisp(value)
        setNum2(0)
        setRes(0);
      }
    

    console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp);
    } else if(state = 0){
      setNum1(0)
      setOper(0)
      setDisp("")
      setNum2(0)
      setRes(0);
    }
  }

  const clearClickHandler =() => {
    if(state === 1){
      setNum1(0);
      setNum2(0);
      setOper(0);
      setRes(0);
      setDisp(0);

      console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp);
    } else if(state = 0){
      setNum1(0)
      setOper(0)
      setDisp("")
      setNum2(0)
      setRes(0);
    }

  }

  const delClickHandler =(e) => {
    e.preventDefault();
    if(state === 1){
      if(oper === 0){
       setNum1(num1.slice(0, -1));
       setDisp(disp.slice(0, -1));
      }
      else{
        setNum2(num2.slice(0, -1));
        setDisp(disp.slice(0, -1));
      }
    

      console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp);
    } else if(state = 0){
      setNum1(0)
      setOper(0)
      setDisp("")
      setNum2(0)
      setRes(0);
    }
    
  }

   const onoffClickHandler =(e) => {
    e.preventDefault();
    if(e.target.innerHTML === "On"){
       e.target.innerHTML = "Off";
       setDisp("");
       setNum1(0);
       setNum2(0);
       setOper(0);
       setRes(0);
       setState(0);
    }
    else if(e.target.innerHTML === "Off"){
       e.target.innerHTML = "On";
       setDisp(0)
       setNum1(0);
       setNum2(0);
       setOper(0);
       setRes(0);
       setState(1);
    }
    

    console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp);
  }

  const equalClickHandler =() => {
    if(oper === "+") {
      console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp); 
      setRes(parseInt(num1) + parseInt(num2));
      setDisp(parseInt(num1) + parseInt(num2));
    } else if(oper === "-"){
      console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp); 
      setRes(parseInt(num1) - parseInt(num2));
      setDisp(parseInt(num1) - parseInt(num2));
    } else if(oper === "*"){
      console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp); 
      setRes(parseInt(num1) * parseInt(num2));
      setDisp(parseInt(num1) * parseInt(num2));
    } else if(oper === "/"){
      console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp); 
      setRes(parseInt(num1)/parseInt(num2));
      setDisp(parseInt(num1)/parseInt(num2));
    } else if(oper === "%"){
      console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp); 
      setRes(parseInt(num1)%parseInt(num2));
      setDisp(parseInt(num1)%parseInt(num2));
    } else if(oper === "^"){
      console.log(num1 +'|'+ num2 +'|'+ oper +'|'+ res +'|'+ disp); 
      setRes(parseInt(num1)**parseInt(num2));
      setDisp(parseInt(num1)**parseInt(num2));
    }else {
      if(state === 1){
        if(oper === 0){
          setDisp("error")
        }
    } else if(state = 0){
      setNum1(0)
      setOper(0)
      setDisp("")
      setNum2(0)
      setRes(0);
    }
      
    }
    
  }

  return (
    <div className = "calcContainer">
      <CalcDisplay display={disp}/>
        <div className ="calcButtonsContainer">
          <CalcButton value = "%" onClick={moduloClickHandler}/>
          <CalcButton value = "^" onClick={exponentClickHandler}/>
          <CalcButton value = "Del" onClick={delClickHandler}/>
          <CalcButton value = "On" onClick={onoffClickHandler}/>
          <CalcButton value = "7" onClick={numberClickHandler}/>
          <CalcButton value = "8" onClick={numberClickHandler}/>
          <CalcButton value = "9" onClick={numberClickHandler}/>
          <CalcButton value = "+" onClick={plusClickHandler}/>
          <CalcButton value = "6" onClick={numberClickHandler}/>
          <CalcButton value = "5" onClick={numberClickHandler}/>
          <CalcButton value = "4" onClick={numberClickHandler}/>
          <CalcButton value = "-" onClick={minusClickHandler}/>
          <CalcButton value = "3" onClick={numberClickHandler}/>
          <CalcButton value = "2" onClick={numberClickHandler}/>
          <CalcButton value = "1" onClick={numberClickHandler}/>
          <CalcButton value = "*" onClick={multiClickHandler}/>
          <CalcButton value = "C" onClick={clearClickHandler}/>
          <CalcButton value = "0" onClick={numberClickHandler}/>
          <CalcButton value = "=" onClick={equalClickHandler}/>
          <CalcButton value = "/" onClick={divideClickHandler}/>  
        </div>
    </div>
  );
}
export default App;