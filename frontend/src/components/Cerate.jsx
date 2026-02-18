import {React, useState, useEffect, use} from 'react'
import AxiosIstance from './Axios'


const Create = () => {
    const [country, setCountry] = useState([])
    console.log(country);

    const GetData = async () => {
        AxiosIstance.get('/countries').then( (res) => {
            setCountry(res.data)
        })
    } 
    useEffect(() => {
        GetData()
    }, [])

    return(
        <div>
            this is the create page
        </div>
    )
}

export default Create