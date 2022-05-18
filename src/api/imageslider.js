import axios from 'axios'

const BASE_URL ="https://saviorclothes.herokuapp.com"

export const sliderAddata = async() =>{
    try{
    let result =await axios.get(`${BASE_URL}/api/v1/slider`)
    return result.data.data.data
}
catch(err){
    console.log(err)
}
}
