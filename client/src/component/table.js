import React, { useEffect, useState } from 'react'
import axios from "axios"
import * as reactBootStrap from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import '../css/table.css'

const Table = () => {

    const [post, setpost] = useState({ dataArray: [] })

    const [params] = useSearchParams()
    const filename = params.get("filename") ?? ""

    useEffect(() => {

        const target = `http://localhost:5000/files/data?filename=${filename}`


        const fetchDataArray = async () => {

            const { data } = await axios(target);

            setpost({ dataArray: data })
        }
        fetchDataArray()
    }, [])


    return (
        <div data-testid="table" >
            <div className='tableConteiner'>
                <div className='table'>
                    <reactBootStrap.Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th>Text</th>
                                <th>Number</th>
                                <th>Hex</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                post.dataArray && post.dataArray.map(
                                    (allFilesArray) => ([allFilesArray].map((filesArray) => (
                                        [filesArray].map((files) => (
                                            files.map((element) => (
                                                <tr>
                                                    <td>{element.file}</td>
                                                    <td>{element.text}</td>
                                                    <td>{element.number}</td>
                                                    <td>{element.hex}</td>
                                                </tr>
                                            ))
                                        )

                                        )
                                    )))
                                )
                            }
                        </tbody>
                    </reactBootStrap.Table>
                </div>
            </div>
        </div>
    )
}
export default Table