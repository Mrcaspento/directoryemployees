import React from 'react';
// import './style.css'



const EmployeeForm = (props) => { 
return(

<form className = "search">
    <label htmlFor="search">Employee Name:</label>
    <input
    value = {props.handleInputChange}
    name= "search"
    type="text"
    className="form-control"
    placeholder="Type in a type of Employee you would like to find"
    />
    <datalist>
        {props.employees.map(employee => (
            <option value={employee} key={employee} />
        ))}
    </datalist>
    <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success"> Search </button>
</form>
)
}
export default EmployeeForm;