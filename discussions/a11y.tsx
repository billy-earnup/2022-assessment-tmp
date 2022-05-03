/*eslint-disable*/
import React, { useState } from "react";
import { Typography } from "@material-ui/core";

const MyForm = ({ onComplete }) => {
  return (
    <div>
      <Typography variant="h2">Please enter your contact info</Typography>

      <label>First Name</label>
      <input type="text" name="first-name" />

      <label>Email</label>
      <input type="text" name="email" />

      <img src="./terms-pdf.jpg" />
      <label>I consent to the terms of the above statement.</label>
      <input type="checkbox" name="terms-consent" />
    </div>
  );
};

export default MyForm;
