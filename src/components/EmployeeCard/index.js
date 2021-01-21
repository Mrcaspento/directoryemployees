import React from "react";

const EmployeeCard= (props) => {

return(
    <table className="table table-dark table-striped">
        <tr>
            <th>Name: </th> {props.name}
            <th>Gender:</th>{props.gender}
            <th>Picture:</th>
            <th>Location:</th>
            <th>Email:</th>
        </tr>
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.gender}</td>
                <td><img alt={props.name} src={props.picture} /></td>
                <td>{props.location}</td>
                <td>{props.email}</td>
            </tr>
        </tbody>
    </table>
)

}
export default EmployeeCard;