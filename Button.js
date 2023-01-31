import * as React from 'react';
import Button from '@mui/material/Button';
export default function Button( {ButtonText,width,height,backgroundColor,border,color} ){
  return (
  <>
  <Button style={{width,height,backgroundColor,border,color}}>{ButtonText}</Button>
  </>

  )
}