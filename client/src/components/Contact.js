import React,{useState} from 'react';


const Contact=(props)=>{
    const[value,setValue]=useState({
        name:"",
        email:"",
        message:""
    })

    function changeHandler(e){
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    function submitHandler(e){
        e.preventDefault();
        alert("Thank you for the deatils")
        props.history.push("/BubblePage")
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type="text"
                name="name"
                value={value.name}
                placeholder="name"
                onChange={changeHandler}>
                </input>
                <br/>

                <input type="text"
                name="email"
                value={value.email}
                placeholder="email"
                onChange={changeHandler}>
                </input>
                <br/>

                <input type="text"
                name="message"
                value={value.message}
                placeholder="message"
                onChange={changeHandler}>
                </input>
                <br/>

                <button>Submit</button>

            </form>
        </div>
    )
}

export default Contact;