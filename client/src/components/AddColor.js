import React, { useState } from "react";
import {axiosWithAuth} from './utils/axiosWithAuth';

  
const AddColor=(props)=>{
    const [color, setColor] = useState({
        color:"",
        code:{hex:""}
    })
    
    const handleChanges = (e) => {
        setColor({...color,
         [e.target.name]:e.target.value
         })
         console.log(color);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/colors',color)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
        props.history.push('/BubblePage')
    }
    return(
        <div className="spacer">
            {<form onSubmit={handleSubmit}>
            <label htmlFor="colorName">ColorName</label>
            <input onChange={handleChanges}
                    type="text"
                    value={color.colorName}
                    placeholder="colorName"
                    name="colorName"
                    required>
            </input>
            
            <label htmlFor="hexCode">HexCode</label>
            <input onChange={e=>{
                setColor({
                    ...color,
                    code:{hex:e.target.value}
                })
            }}
                    type="text"
                    value={color.code.hex}
                    placeholder="HexCode"
                    name="hexCode"
                    required>
            </input>
            <button>Submit</button>
        </form>}
    
        </div>
    )
}

export default AddColor;