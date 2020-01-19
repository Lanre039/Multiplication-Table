import React from 'react';
import './MultiTable.css'

class Form extends React.Component {
    constructor() {
      super();
      
      this.state = {
        formInput: '',
        primeNo: [],
        style: {
          visibility: "hidden"
        }
      };
      
    }
    // user input 
    handlePrimeNo = (input) => { //(e.g 5)
        let primeNo = [];
        
        for(let i = 2; i <= input; i++){

              // spread numbers let than user input and remove 0 and 1
            let checker = [...Array(i).keys()].slice(2);  // (e.g 5 = [2,3,4])

            /// For efficiency, using Array.prototype.some(), if one element in the array passes the test (i.e i % check === 0) it would return true and it won't test for other elements in the array again which implies that the number is NOT a prime number. Considering when array contain large number of elements to be tested (e.g 100)
            
            // input should not be divisible by any number NOT itself, so I expect isPrime to return false if the value is a prime number
            
            const isPrime = checker.some(check => i % check === 0)  //(e.g 5%2 = false, 5%3 = false, 5%4 = false)
            
            // if isPrime is false, it implies that the value is a prime number, and it would enter the if statement and push it into store (i.e primeNo)

            if(!isPrime){  
                primeNo.push(i)
            }
        }
        return primeNo
    }

    
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value}) 
    };

    handleSubmit = event => {
      event.preventDefault();
      const primeNo = this.handlePrimeNo(this.state.formInput)
      
      if (primeNo) {
          this.setState({primeNo})
        }
        
        const style = { visibility: 'visible' }
        this.setState({ style })
    };

    //data = primeNo stored in the state (e.g 2,3, 5)
    handleTableData = (data) => { 
      let product = []; let multiply = [];
      
      for(let i = 0; i <data.length; i++){ 

          if(data[i]) {  // gives me the successive array data (e.g 2)

            // multiply successive array data with current value (e.g 2*2, 2*3, 2*5  )
              multiply = data.map(cur => data[i] * cur) 
          }
          product.push([...multiply])
      }
      return product
    
    }

    renderTableData = (data) => {
      return this.handleTableData(data)
    }
    
    render() {
      
      return (
        <section className="data-form">
            <h1 className="head">PRIME MULTIPLICATION TABLE GENERATOR</h1>
              <form className="form" onSubmit={this.handleSubmit}>
                <div style={{display: 'flex'}}>
                    <input onChange={this.handleChange} value={this.state.formInput} name="formInput" placeholder="Enter positive integer..." required/>
                  <button type="submit" className="btn btn-2">Submit</button>
                </div>
              </form>
              <div className="table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    {
                      (this.state.primeNo.length > 0) ? this.state.primeNo.map((data, index) => {
                        return <th key={index}>{data}</th>       
                      }):<th style={this.state.style}>Enter positive integer greater than 1 only (e.g 2,3,4 etc.)</th>
                    }
                  </tr>
                </thead>
                <tbody>
                    {
                      (this.state.primeNo.length > 0) ? this.state.primeNo.map((data, index) => {
                        return (
                        <tr key={index}>
                          <th key={index}>{data}</th>
                          {this.renderTableData(this.state.primeNo)[index].map((product, index) => {
                          return <td key={index}>{product}</td>
                          })}
                        </tr>
                        )     
                      }):<></>
                    }
                </tbody>
              </table>
          </div>
        </section>
      )
    }
}
  
  export default Form;
  
  



