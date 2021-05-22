import React,{useState} from 'react'


function Form(props) {
    const [formData, setFormData] = React.useState({
        searchterm: "",
    });


    const handleChange = (event) => {

        setFormData({...FormData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.moviesearch(formData.searchterm)
    }

    return (
       
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Form
