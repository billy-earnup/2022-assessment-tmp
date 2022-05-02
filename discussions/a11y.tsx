/*eslint-disable*/
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
/**
 * 
 * This is the Accessibility (a11y) test
 * The goal of this test is to ascertain whether the candidate knows the basics of making accessible
 * User Interfaces
 * 
 * This is not meant to be a rubric'd challenge. The goal is to get the candidate talking and attempt to subjectively
 * evaluate how comfortable they are working through these kind of problems. Even if they don't get everything "correct",
 * take special note of _how_ the candidate talks through the problem
 */
const MyForm = ({ onComplete }) => {
  return (
    // This div could be a semantic area like <main> or <section> or we could use an area role
    // This is a "Could be better"
    <div>
      {/* 
        * This is more of an actual issue. This should be an h1 since it's the only heading on the page
        * Bonus points if the candidate knows (or looked at the API docs) they can override the component tag while preserving the styling
      */}
      <Typography variant="h2">Please enter your contact info</Typography>

      {/* 
        * Super common a11y oversight is forgetting to associate labels with inputs
        * Reminder: inputs should have a "name" attribute that matches to "for" attribute in the label
        * In react this is htmlFor https://reactjs.org/docs/dom-elements.html#htmlfor
      */}
      <label>First Name</label>
      <input type="text" name="first-name" />

      {/* 
        * Same as above, but we can improve this further even still
        * "email" is a specific data type for html input tags
        * Using the specific data type will help give semantic clues,
        * and inform auto-completes and other tooling about the type of data
       */}
      <label>Email</label>
      <input type="text" name="email" />

      {/* 
        * Images should have an alt tag describing them.
        * This is extra bad because the image contains legalese the user is consenting to
        * This could be further improved by linking to a PDF and ommitting the img tag entirely
        * or by providing an alternate text-only version
      */}
      <img src="./terms-pdf.jpg" />
      <label>I consent to the terms of the above statement.</label>
      <input type="checkbox" name="terms-consent" />
    </div>
  );
};

export default MyForm;
