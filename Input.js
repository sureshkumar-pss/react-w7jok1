import * as React from 'react';
export default function Input({type,placeholder}){
  return (
    <>
     <div className="form-group">
      <input type={type} placeholder={placeholder}></input>
      </div>
    </>
  );
}