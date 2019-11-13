import React from "react";
import "./style.css";
import LabelAndInput from "../LabelAndInput";
function FormularioNewPost() {
  /*e.target.files*/
  return (
    <div>
      <LabelAndInput type="text" name="Title" placeholder="type a title"></LabelAndInput>
      <LabelAndInput type="file" name="Image"></LabelAndInput>
      <LabelAndInput type="textarea" rows={8} name="Body" placeholder="type a body"></LabelAndInput>

    </div>
  );
}
export default FormularioNewPost;
