import { axiosInstance } from "./helpers";

class Auth {
    constructor() {
      this.email =''
      this.password =''
    }
  
    signIn = ({email, password}) => new Promise((resolve, reject) => {

        this.verifyCredentials(email,password).then(resp => {

            console.log(resp)
            if (resp) {
                resolve({loggedIn: true});
            } else {
                resolve({loggedIn: false});
            }
            
        })
        .catch(error => {
            console.log(error)
            reject({loggedIn: false})
        })
       
    })

    async verifyCredentials (email,password) {
        console.log('se esta buscando ',email,password)
        let {data} = await axiosInstance.get('/users');
        console.log('users',data)
        let user = data.filter(user => user.Email == email && user.Contraseña == password);
        console.log('user',user)
        console.log('userLenght',user.length)
        if (user && user.length>0) {
            return true
        }
        return false
    }
  
  }

  export const auth = new Auth();
  