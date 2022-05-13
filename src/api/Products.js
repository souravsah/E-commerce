import axios from 'axios'

const BASE_URL ="http://localhost:8000"

export const fetchNewArrival = async() =>{
    try{
        let result =await axios.get(`${BASE_URL}/api/v1/product/newarrivals`)
        // console.log(result)
        return result.data;
    }
    catch(err){
        console.log(err)
    }
      
}