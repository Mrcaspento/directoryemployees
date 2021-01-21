import axios from 'axios';


export default {
    getEmployees: function() {
    return axios.get("https://randomuser.me/api/?inc=name,gender,location,picture,email&results=30")
}
};