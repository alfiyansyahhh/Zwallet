const findHighestProfit = (price) => {
    let profit = 0
    for(var i=0; i<price.length;i++){  
        for (let k = i; k < price.length; k++) {
            const nilaiAwal = price[i];
            const nilaiBanding = price[k];
            const hasil = nilaiBanding - nilaiAwal
         
            if (hasil > 0) {
                if (hasil > profit) {
                    profit = hasil
                }
            }
          
        }             
    }  
    if (profit > 0) {
        console.log(profit) 
    } else {
            console.log("tidak profit")
    }

}

findHighestProfit([10,2,11,20,3,5])