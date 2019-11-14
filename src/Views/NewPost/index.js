import React from "react"

// components
import { Nave, LabelAndInput } from "../../Components";

function NewPost(){
  return(
    <div>
      <Nave></Nave>
      <LabelAndInput type="text" name="Title" placeholder="type a title"></LabelAndInput>
      <LabelAndInput type="file" name="Image"></LabelAndInput>
      <LabelAndInput type="textarea" rows={8} name="Body" placeholder="type a body"></LabelAndInput>
    </div>
  )
}

export default NewPost;