import React, { useState } from "react"
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {Formik, FormikContext, useFormik} from "formik"

export default function CreateUser(props) {

    const [name, setName] = useState(" ");
    const [salary, setSalary] = useState(" ");
    const [designation, setDesignation] = useState(" ");
    const [createdAt, setCreateDate] = useState(" ");
    const [isLoading, setLoading] = useState(false)
    const history = useHistory();
    const formik = useFormik({
        initialValues : {
            name : "",
            salary : "",
            designation : "",
            createdAt : ""

        },
        validate : (values) => {
            const errors ={};
            if(!values.name){
                errors.name ="Required"
            }
            if(!values.salary){
                errors.salary ="Required"
            }
            if(!values.designation){
                errors.designation ="Required"
            }
            if(!values.createdAt){
                errors.createdAt ="Required"
            }
            return errors;

        },
        onSubmit : async (values) => {
            try {
                setLoading(true)
                await axios.post("https://60efffcaf587af00179d3c47.mockapi.io/userdata", {name: values.name, salary:values.salary, designation:values.designation, createdAt:values.createdAt })
                setLoading(false)
                history.push("/user")
            }
            catch {
                console.error();
                setLoading(false)
            }
        }
    })

    return (
        <div id="layoutSidenav_content">
            <div class="container-fluid px-4">
                <h1 class="mt-4">Create User</h1>
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item"><Link to="/user">User</Link ></li>
                    <li class="breadcrumb-item active">Create User</li>
                </ol>
                <div class="card mb-4">
                    <div class="card-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div className='row'>
                                <div className="col-lg-6">
                                    <label>User name</label>
                                    <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} className="form-control"></input>
                                    {
                                        formik.errors.name ? <span style={{color:"red"}}>Required</span> : ""
                                    }  
                                </div>
                                <div className="col-lg-6">
                                    <label>Salary</label>
                                    <input type="text" name="salary" value={formik.values.salary} onChange={formik.handleChange} className="form-control"></input>
                                    {
                                        formik.errors.salary ? <span style={{color:"red"}}>Required</span> : ""
                                    }
                                </div>
                                <div className="col-lg-6">
                                    <label>Designation</label>
                                    <input type="text" name="designation" value={formik.values.designation} onChange={formik.handleChange} className="form-control"></input>
                                    {
                                        formik.errors.designation ? <span style={{color:"red"}}>Required</span> : ""
                                    }
                                </div>
                                <div className="col-lg-6">
                                    <label>Date</label>
                                    <input type="date" name="createdAt" value={formik.values.createdAt} onChange={formik.handleChange} className="form-control"></input>
                                    {
                                        formik.errors.createdAt ? <span style={{color:"red"}}>Required</span> : ""
                                    }
                                </div>
                                <div className="col-lg-12">
                                    <input type="submit" value="submit" className="btn btn-primary mt-3" disabled={isLoading}></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div style={{ height: "100vh" }}></div>
                <div class="card mb-4"><div class="card-body">When scrolling, the navigation stays at the top of the page. This is the end of the static navigation demo.</div></div>
            </div>
        </div>
    )
}