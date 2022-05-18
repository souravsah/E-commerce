import axios from 'axios'

const BASE_URL ="https://saviorclothes.herokuapp.com"

export const fetchnavbarAddata = async() =>{
    try{
    let result =await axios.get(`${BASE_URL}/api/v1/navad`)
    // console.log(result)
    return result.data.data.data
}
catch(err){
    console.log(err)
}
}
