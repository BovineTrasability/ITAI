import { useState } from "react";
import { TableBody } from "./TableBody";
// import { animal } from "../data/animales";

export const Table = () => {

    return (
        <div className="p-2">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Peso(kg) </th>
                        <th> Vacunacion </th>
                    </tr>
                </thead>
                <tbody>
                    <TableBody />
                </tbody>
            </table>
        </div>
    )
}

