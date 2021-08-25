import React, { useEffect, useState } from "react"
import './App.css';
import axios from "axios"

import { Link } from "react-router-dom"

export default function User(props) {

    const [userList, setUserList] = useState([])
    const [isLoading, setLoading] = useState(true)
    useEffect(async () => {
        try {
            let user = await axios.get("https://60efffcaf587af00179d3c47.mockapi.io/userdata")

            setUserList([...user.data])

            setLoading(false)
        }
        catch (error) {
            console.log(error);
            setLoading(false)
        }


    }, [])

    let handleDelete = async (id) => {
        let confirm = window.confirm("Are you sure want to delete ?")
        if (confirm) {
            try {
                await axios.delete(`https://60efffcaf587af00179d3c47.mockapi.io/userdata/${id}`)
                let rowIndex = userList.findIndex(obj => obj.id == id);
                userList.splice(rowIndex, 1);
                setUserList([...userList])

            }
            catch {
                console.log("error");
            }
        }
    }
    return (

        <div id="layoutSidenav_content">
            <div class="container-fluid px-4">
                <h1 class="mt-4">Users</h1>
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                    <li class="breadcrumb-item active">users</li>
                </ol>
                <div class="card mb-4">
                    <div class="card-body">
                        <p class="mb-0">
                            This page is an example of using static navigation. By removing the
                            <code>.sb-nav-fixed</code>
                            class from the
                            <code>body</code>
                            , the top navigation and side navigation will become static on scroll. Scroll down this page to see an example.
                        </p>
                        <Link to="/create-user" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" >
                            <i class="fas fa-download fa-sm text-white-50"></i> CreateUser</Link>
                        <div class="card shadow mb-4">
                            {
                                isLoading ? <div class="spinner-border text-primary" role="status">
                                <span class="sr-only">Loading...</span>
                              </div> : 
                            
                            <div class="card-body">
                                 
                                {userList.map((user) => {
                                    return <div className="card-body2">
                                        
                                        <div className="content">
                                            <img className="image" src={user.avatar} alt="profilePic"></img>
                                            <div>
                                                <h3 >{user.name}</h3>
                                                <h5 >{user.designation}</h5>
                                                <h5 >{user.id}</h5>
                                                <h5 >{user.salary}</h5>
                                                <p class="time">${(user.createdAt)}</p>
                                                <Link to={`/user/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                                                <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                })
                                }
                        
                            </div>
}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


