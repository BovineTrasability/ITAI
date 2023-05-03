import { useState } from "react";

const animal = [{
    'id': '11',
    'peso': '123',
    'vacunacion': 'completa',
},]

export const TableBody = ( init = [] ) => {

    const [data, setData] = useState(animal);

    return (
        <>
            {
                data.map(element => (
                    <tr>
                        <td>{element.id}</td>
                        <td>{element.peso}</td>
                        <td>{element.vacunacion} <button className="btn btn-primary"> Vacunacion </button> </td>
                        <td>
                            <button className="btn btn-danger" onClick={''}> Edit </button> {"  "}
                            <button className="btn btn-primary" onClick={''}> Delete</button>
                        </td>
                    </tr>
                ))
            }
        </>
    )
}

