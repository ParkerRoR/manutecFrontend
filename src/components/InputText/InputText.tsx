import React, { Component } from 'react'
import autobind from 'class-autobind'

import { Input } from 'reactstrap'

export interface InputTextProps{
  onChange : (params) => void
  value : string
  ph : string
  type : string
  ml : string
}

class InputText extends Component<InputTextProps> {
  public state = {
    value : this.props.value,
    ph : this.props.ph,
    type : this.props.type,
    ml : this.props.ml

  }

  constructor(props){
    super(props)
    autobind(this)
  }

  componentWillReceiveProps(q){
    if(this.state.value !== q.value){
      this.setState({value: q.value})
    }
  }

  public onChange({target:{value}}){
    this.props.onChange(value)
  }
  render() {
    return (
     <>
      <Input 
        type={this.state.type}
        value={this.state.value}
        onChange={v => this.onChange(v)}
        placeholder={this.state.ph}
        maxLength={this.state.ml}
        className="my-3"
      />
     </> 
    )
  }
}

export default InputText;