import React from "react"
import { Link } from "react-router-dom"
export default function Dashboard() {
    return (
        <div>
            <div id="layoutSidenav_content">
                <div class="container-fluid px-4">
                    <h1 class="mt-4">Dashboard</h1>
                    <ol class="breadcrumb mb-4">
                        <li class="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                        <li class="breadcrumb-item active"><Link to="/user">User</Link></li>
                    </ol>
                    <div class="card mb-4">
                        <div class="card-body">
                            <p class="mb-0">
                                This page is an example of using <strong>CRUD OPERATION</strong> and
                                 <code> Validating </code>
                                fields with
                                 <code> FORMIK </code>
                                ,  navigate to <strong>User</strong>  page to see an example.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}