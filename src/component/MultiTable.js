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

    handlePrimeNo = (input) => {
        let primeNo = [];
        for(let i = 2; i <= input; i++){
        
            let checker = [...Array(i).keys()].slice(2);
            const isPrime = checker.some((check => (i % check === 0 && i !== check) === true))
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

    handleTableData = (data) => {
      let product = []; let multiply = [];
      
      for(let i = 0; i <data.length; i++){

          if(data[i]) {
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
                <form className='form' onSubmit={this.handleSubmit}>
                  <div style={{display: 'flex'}}>
                      <input onChange={this.handleChange} value={this.state.formInput} name='formInput' placeholder='Input positive integer...' required/>
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
                      }): <th style={this.state.style}>Input positive integers only (e.g 1,2,3 etc.)</th>
                    }
                  </tr>
                </thead>
                <tbody>
                    {
                      (this.state.primeNo.length > 0) ? this.state.primeNo.map((data, index) => {
                        return (
                        <tr>
                          <th key={index}>{data} </th>
                          {this.renderTableData(this.state.primeNo)[index].map((product, index) => {
                          return <td key={index}>{product}</td>
                          })}
                        </tr>
                        )     
                      }): ''
                    }
                </tbody>
              </table>
          </div>
        </section>
          );
      };
  }
  
  export default Form;
  
  



