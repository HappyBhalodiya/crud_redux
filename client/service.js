import Config from "./config";
import axios from 'axios';

export default {
  
  addUser: body => {
 
    const url = Config.baseurl + "addUser";
       console.log("=====>>>>>>>>",Config.baseurl+"addUser",body);
    return axios
      .post(url,body)
      .then(response => {
        console.log("response=====in service file", response);
        return response;
      })
      .catch(err => {
          console.log("err====",err);
      });
  },

  
};