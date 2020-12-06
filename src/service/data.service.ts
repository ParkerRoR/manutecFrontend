import axios from 'axios'

const http = axios.create({
  baseURL: 'http://54.94.218.212:3000/'
})

class DataService {

  public async getUsers(){
    try{
      const { data } = await http.get('')
      return data
    }catch (e){
      throw e
    }
  }


}


export const dataService = new DataService()