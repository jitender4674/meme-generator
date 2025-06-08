import React from 'react'
import { useState,useRef } from 'react';
import Draggable from 'react-draggable';
import html2canvas from 'html2canvas';


const Text = () => {

    const [editMode,setEditMode] = useState(false);
    const[val, setVal] = useState("Double click to edit");
    const nodeRef = useRef(null);
    
  return (
    <>
    <Draggable nodeRef = {nodeRef}>
        <div ref = {nodeRef}>
            {editMode ? (<input value={val} onDoubleClick={() => setEditMode(false)} onChange={(e) => setVal(e.target.value)}/>): (<h1 onDoubleClick={()=> setEditMode(true)}>{val}</h1>)}
        </div>
    </Draggable>
    
    </>
  )
};

export default Text;