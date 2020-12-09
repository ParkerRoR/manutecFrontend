import React, { Component } from 'react'

import { Ribbon } from './Icon'

class Robert extends Component {
  state = {  }
  render() {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center wh-100" >
          <div className="col-md-6 col-11 mx-auto bg-white p-3">
            <h3 className="text-center"><Ribbon/>Careca também faz aniversário</h3>
            É Robertin, isso chega pra tudo mundo... <br/>
            Não importa sua idade, todo ano vc vai ficar mais velho (a cada milésimo de segundo, se for pensar bem né),
            isso significa que você ja viveu e aprendeu muita coisa (e também que você ta velho pra caramba né?) e torna você um homem tão sábio (não digo apenas profissionalmente, digo também, como caráter)!
            <br/>
            Feliz aniversário lindão ❤️ <br/>
            <br/>
            PS: Não posso desejar sucesso pra quem já o tem :)

          </div>
        </div>
      </>
    )
  }
}

export default Robert;