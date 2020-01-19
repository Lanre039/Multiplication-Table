const functions =  {
    
    handlePrimeNo: (input) => { 
        let primeNo = [];
        
        for(let i = 2; i <= input; i++){

            let checker = [...Array(i).keys()].slice(2); 
            const isPrime = checker.some(check => i % check === 0) 
            
            if(!isPrime){  
                primeNo.push(i)
            }
        }
        return primeNo
    },

    handleTableData: (data) => {
        let product = []; let multiply = [];
        
        for(let i = 0; i <data.length; i++){
  
            if(data[i]) {
                multiply = data.map(cur => data[i] * cur)
            }
            product.push([...multiply])
        }
        
        return product
    }
}

module.exports = functions;