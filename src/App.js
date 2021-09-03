import { useState } from 'react';
import './App.css';

var oldprice="";
var todaysValue;
var purchasePrice="";
var todaysPrice="";
var quantity="";


function App() {
  var [margin,setmargin]=useState();
  var [marginpercent,setmaginpercent]=useState();
  var [status,setstatus]=useState()

function HandleSubmit(e)
{
  quantity=document.getElementById("quantity").value;
  todaysPrice=document.getElementById("todaysprice").value;
  oldprice=document.getElementById("old-price").value;
  purchasePrice  =  oldprice*quantity;
  todaysValue=todaysPrice*quantity;
  margin=(todaysValue-purchasePrice);

  //condition for loss and profit
  if(margin<0)
  {
    document.querySelector(".result").style.backgroundColor="rgb(255, 0, 106)";
    status="Loss";
    <img src="https://cdn.iconscout.com/icon/free/png-256/loss-1543209-1305674.png" alt="" width="70px" height="30px"/>;
    margin=Math.abs(margin)
  }
  else{
    status="Profit";
    document.querySelector(".result").style.backgroundColor="#34eb55";
  }
  marginpercent=Math.round(((margin)/purchasePrice)*100);
  if(marginpercent>=50 && status==="Loss")
  {
    document.body.style.backgroundColor="white"
  }
  else{
    document.body.style.backgroundColor="lavender";
  }
  setmargin(margin)
  setmaginpercent(marginpercent)
  setstatus(status)
  
  e.preventDefault();
  console.log(`${purchasePrice} todays gross=${todaysValue} margin=${margin} marginpercent=${marginpercent}`)
}
  return (
    <div className="App body d-flex justify-content-center align-items-center">
      <div className="container  mt-3 mb-3 ">
        <header className="header  ">
          <h1>STOCK  PRICE  ANALYZER</h1>
        </header>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-md-8 col-10  input">
            <h2>Inputs</h2>
            <form onSubmit={HandleSubmit} className="form-inline d-block mt-3"  >
            <table className="table table-striped">
              <tbody align="left">
                <tr>
                  <td align ="left" >
                  <label for="old-price" className="label "><p> Stock Price While Purchasing</p></label>
                  </td>
                  <td align="left">
                  <input type="number" className="form-control" id='old-price'required ></input>
                  </td>
                </tr>
                <tr>
                  <td align ="left" >
                  <label for="quantity" className="label "> Quantity of Shares</label>
                  </td>
                  <td>
                  <input type="number" className="form-control " id='quantity' required></input>
                  </td>
                </tr>
                <tr>
                  <td align ="left" >
                  <label for="todaysprice" className="label "> Todays Stock Price</label>
                  </td>
                  <td>
                  <input type="number" className="form-control " id='todaysprice' required></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <button  type="submit">Submit</button>
            </form>
          </div>
          <div className="col-lg-5 col-md-8 col-10  result ">
            <h2>Results</h2>
            <table className="table table-striped mt-3" >
              <tbody align="left">
              <tr>
              <td>
              <p>Current Status</p>
              </td>
              <td>
              <p><span className="status">{status}</span></p>
              </td>
            </tr>
            <tr>
              <td>
              <p>Margin</p>
              </td>
              <td>
              <p>{margin}</p>
              </td>
            </tr>
            <tr>
              <td>
              <p>Margin Percent</p>
              </td>
              <td>
              <p>{marginpercent}</p>
              </td>
            </tr>
            <tr>
              <td>
              <p>Gross Value While Purchasing</p>
              </td>
              <td>
              <p>{purchasePrice}</p>
              </td>
            </tr>
            <tr>
              <td>
              <p>Todays Gross Value</p>
              </td>
              <td>
              <p>{todaysValue}</p> 
              </td>
            </tr>
            </tbody>
            </table>
          </div>
         
    </div>
    
  </div>
    </div>
  );
}

export default App;