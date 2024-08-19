import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavBar} from './component/navbar/NavBar'
import {Home} from './component/home/home'
import {Footer} from './component/footer/Footer'
import {LoginComp} from './component/login/LoginComp'
import { RegisterComp } from './component/register/RegisterComp'

   

export function App() {

        return (                       
        <div>
          <NavBar/>
          <LoginComp/>
          {/* <Home/> */}
          <RegisterComp/>
          <Footer/>

        </div>
        );
}

