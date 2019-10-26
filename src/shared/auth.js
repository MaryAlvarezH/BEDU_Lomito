//import { axiosInstance } from "./helpers";
// import {resp} from "../pages/login/login"

// class Auth {

//     constructor() {
//       this.username =''
//       this.password =''
//     }
  
//     signIn = ({username, password}) => new Promise((resolve, reject) => {

//         this.verifyCredentials(username,password).then(resp => {

//             console.log(resp)
//             if (resp) {
//                 resolve({loggedIn: true});
//             } else {
//                 resolve({loggedIn: false});
//             }
            
//         })
//         .catch(error => {
//             console.log(error)
//             reject({loggedIn: false})
//         })
       
//     })

//     async verifyCredentials (username,password) {
//         const username=login.username
//         const password= login.password
//         console.log('se esta buscando ',username,password)
//         let {data} = await resp(username);
//         console.log('users',data)
//         let user = data.filter(user => user.username == username && user.Contraseña == password);
//         console.log('user',user)
//         console.log('userLenght',user.length)
//         if (user && user.length>0) {
//             return true
//         }
//         return false
//     }
  
//   }

//   export const auth = new Auth();
  