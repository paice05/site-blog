import React from "react";

// components
import { FormGroup, Label, Input } from "reactstrap"

function LabelAndInput(props) {
    
  return(
    <FormGroup >
      <Label>{props.name}</Label>
      <Input  type={props.type} rows={props.rows} placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>
    </FormGroup>
  )
}
export default LabelAndInput;