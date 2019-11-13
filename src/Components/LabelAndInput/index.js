import React from "react";
import {FormGroup,Label,Input} from "reactstrap"

function LabelAndInput(props) {
    
  return(
    <FormGroup >
      <Label>{props.name}</Label>
      <Input  type={props.type} rows={props.rows} placeholder={props.placeholder} />
    </FormGroup>
  )
}
export default LabelAndInput;