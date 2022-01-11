import { useForm } from "react-hook-form";
import axios from "axios";
import Head from 'next/head'
import TopNav from "../components/TopNav"
import SideNav from "../components/SideNav"
import Footer from '../components/Footer'
import { useState } from "react";
import { Alert } from "react-bootstrap";

export default function Form() {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);

  const [successMessage, setSuccessMessage] = useState()
  const [errorMessage, setErrorMessage] = useState()

  // function to output form data
  // we need to pass it to onSubmit of form element
  async function onSubmit(data) {
    try {
      const res = await axios.put("http://localhost:3000/api/form", data)
      if (res.data.status == 200) {
        setSuccessMessage(res.data.message)
        setErrorMessage("")
        setShowAlertSuccess(true);
        setTimeout(() => {
          setShowAlertSuccess(false);
        }, 2000);
      } else {
        setErrorMessage(res.data.message)
        setSuccessMessage("")
        setShowAlertError(true);
        setTimeout(() => {
          setShowAlertError(false);
        }, 2000);
      }
    } catch (error) {
      console.log("Error Update");
      console.log(error);
    }
  }

  return (
    <>
      <style jsx>
        {`
          
        `}
      </style>

      <Head>
        <title>Form | Next Bootstrap Admin</title>
        <meta name="description" content="Next Bootstrap" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://next-bootstrapp.vercel.app/" />
        <meta property="og:title" content="Next Bootstrap" />
        <meta property="og:description" content="Next Bootstrap" />
        <meta property="og:image" content="https://next-bootstrapp.vercel.app/metalogo.png"></meta>
      </Head>

      <main className="sb-nav-fixed">

        <TopNav />

        <div id="layoutSidenav">

          <SideNav />

          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <h1 className="mt-4">Form</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>

                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="card shadow border-0 rounded-lg mb-4">
                      <div className="card-header"><h3 className="text-center font-weight-light my-2">Login</h3></div>
                      <div className="card-body">
                        {showAlertSuccess ? 
                          // if show alert success TRUE, show alert
                          <Alert variant="success"> <p className="mb-0"> {successMessage} </p> </Alert>
                          // if show alert success FALSE
                          : "" 
                        }
                        {showAlertError ? 
                          // if show alert error TRUE, show alert
                          <Alert variant="danger"> <p className="mb-0"> {errorMessage} </p> </Alert>
                          // if show alert error FALSE
                          : "" 
                        }

                        {/* // {errorMessage ? <span className="fs-6 text-danger">{errorMessage}</span> : ""} */}
                        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="mb-3">
                            <label htmlFor="name">Name</label>
                            {/* include validation with required or other standard HTML validation rules */}
                            <input {...register("name", { required: true })} className="form-control my-2" id="name" type="text" placeholder="name" />
                            {/* errors will return when field validation fails  */}
                            {errors.name && <span className="fs-6 text-danger">This field is required</span>}
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            {/* include validation with required or other standard HTML validation rules */}
                            <input {...register("email", { required: true })} className="form-control my-2" id="email" type="email" placeholder="email" />
                            {/* errors will return when field validation fails  */}
                            {errors.email && <span className="fs-6 text-danger">This field is required</span>}
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <button
                              type="submit"
                              className="btn btn-primary">Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </main>

            <Footer />

          </div>
        </div>

      </main>
    </>
  )
}
