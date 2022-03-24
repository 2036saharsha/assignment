import React,{useState, useEffect} from 'react'
import axios from 'axios'
function DataFetch() {
    const [user,setUser] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                setUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
  return (
    <div style={{color:'green'}}>
        <ul>
            {
                user.map(users=> 
                    <li key={users.id}>Name : {users.name}
                        <ul>
                            <li style={{padding:'20px'}}>Email : {users.email}</li>
                        </ul>
                    </li>
                )
            }
        </ul>
    </div>
  )
}

export default DataFetch