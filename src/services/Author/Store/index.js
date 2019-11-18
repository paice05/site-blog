import Axios from 'axios';

export const Store = async(name,username,email,password,age)=>{
  try{
    const response = await Axios({
      url: 'http://localhost:5959/authors/',
      method: 'post',
      data: {name,username,email,password,age}
    })
    console.log(response);
  }catch(error){
    console.log(error.response)
  }
}