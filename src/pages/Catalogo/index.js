import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Produtos() {

    const [data, setDate] = useState([])

    useEffect(() => {
        axios.get('http://hp-api.herokuapp.com/api/characters')
            .then(res => {
                console.log("Getting from ::::", res.data)
                setDate(res.data)
            }).catch(err => console.log(err))
    }, [])

    const arr = data.map((data, index) => {
        return (
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.desc}</td>
            </tr>
        )
    })

    return (
        <div class="api">
            <h1>BLABLABLA</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                {arr}
            </table>

        </div>
    )
}

export default Produtos;