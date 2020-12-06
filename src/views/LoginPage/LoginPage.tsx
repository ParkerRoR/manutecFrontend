import React, { Component } from 'react'
import { Button } from 'reactstrap'

import InputText from 'components/InputText/InputText'

export interface LoginPageProps{
  username : string
}

const inputsLogin = [
  {
    title : 'username',
    placeholder : 'Usuário',
    type : 'text',
    ml : '15'
  },
  {
    title : 'password',
    placeholder : 'Senha',
    type : 'password',
    ml : '12'
  }
]
class LoginPage extends Component<LoginPageProps> {
  state = {
    username : undefined,
    password : undefined
  }

  handleChange = (name, value) => {
    this.setState({[name] : value})
  }

  render() {
    return (
     <>

        <div className="wh-100 d-flex align-items-center justify-content-center">
          <div className="bg-white mainContainer col-11 col-md-6 p-0 m-0 position-relative">
            <div className="col-11 p-4 m-0 mx-auto pb-5">
              <h4 className="title-login">Login</h4>
              {inputsLogin.map(({title,placeholder,type,ml}) => 
                <InputText
                  onChange={v => this.handleChange(title, v)}
                  value={this.state[title]}
                  ph={placeholder}
                  type={type}
                  ml={ml}
                />
              )}
              <div className="col-12 p-0 m-0">
                <Button color="dark" className="w-100 py-2"
                  style={
                    {
                      position:'absolute',
                      left:'0',
                      top:'1.35rem',
                      borderRadius:'0px',
                      fontSize:'1.5rem',
                      color:'white'
                    }
                  }  
                >
                  Entrar
                </Button>
                <Button color="link" className="w-100 py-2"
                  style={
                    {
                      position:'absolute',
                      left:'0',
                      top:'4.8rem',
                      borderRadius:'0px',
                      fontSize:'1.2rem',
                      color:'white'
                    }
                  }  
                >
                  Cadastre-se
                </Button>
              </div>


            </div>
          </div>
        </div>
     </> 
    )
  }
}

export default LoginPage;