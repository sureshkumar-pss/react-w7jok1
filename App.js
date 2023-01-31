import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo.js'
import ModelTwo from './ModelTwo.js'
import Button from './Button.js'
import Input from './Input.js'
export default function App(){
  return (
    <>
    <h1>Models</h1>
    <Demo modelButtonName="button" modelHeading="MODEL DIALOGE" modelBody="HI this is model body in mui" updateIcon="Update" deleteIcon="Delete"/>
    <ModelTwo />
    <h1>Buttons</h1>
    <Button ButtonText="primary" width="150px" border="1px solid black" height="50px" backgroundColor="violet" color="black" /> <br /><br />
    <Button ButtonText="secondary" width="200px" border="2px solid black" height="70px"backgroundColor="grey" color="white" /><br />
    <h1>Forms</h1>
    <Input   type="date"  />
    <Input  type="password" placeholder="password"/>
    <Input type="time" />
</>
  )
}