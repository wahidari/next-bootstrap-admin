import { useState, useEffect } from 'react';
import Head from 'next/head'
import TopNav from "../components/TopNav"
import SideNav from "../components/SideNav"
import Footer from '../components/Footer'
import Link from 'next/link'
//jquery Modules
import $ from "jquery"
import 'jquery/dist/jquery.min.js'
//Datatable Modules
import "datatables.net-bs5/js/dataTables.bootstrap5.min.js"
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css"
import Image from 'next/image';
//Delete Modal
import DeleteModal from '../components/DeleteModal';
import { Button, Modal } from 'react-bootstrap';

const data = [
  {
    "index": 0,
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "name": "Magdalena Parrish",
    "gender": "female",
    "company": "XELEGYL",
    "email": "magdalenaparrish@xelegyl.com",
    "phone": "+1 (963) 563-3944",
    "address": "300 Morgan Avenue, Whitehaven, Missouri, 9446"
  },
  {
    "index": 1,
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "name": "Kathy Howard",
    "gender": "female",
    "company": "EXOSIS",
    "email": "kathyhoward@exosis.com",
    "phone": "+1 (920) 583-2342",
    "address": "523 Wolf Place, Kaka, Kansas, 9315"
  },
  {
    "index": 2,
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "name": "Banks Jimenez",
    "gender": "male",
    "company": "STREZZO",
    "email": "banksjimenez@strezzo.com",
    "phone": "+1 (862) 526-2251",
    "address": "305 Sharon Street, Rehrersburg, Hawaii, 8431"
  },
  {
    "index": 3,
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "name": "Harrell Pierce",
    "gender": "male",
    "company": "MIRACULA",
    "email": "harrellpierce@miracula.com",
    "phone": "+1 (932) 403-3342",
    "address": "362 Pioneer Street, Lutsen, Oregon, 8373"
  },
  {
    "index": 4,
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "name": "Connie Mitchell",
    "gender": "female",
    "company": "CINASTER",
    "email": "conniemitchell@cinaster.com",
    "phone": "+1 (820) 500-2833",
    "address": "776 Poplar Avenue, Winfred, New Hampshire, 6251"
  },
  {
    "index": 5,
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "name": "Potts Raymond",
    "gender": "male",
    "company": "MARTGO",
    "email": "pottsraymond@martgo.com",
    "phone": "+1 (956) 532-3607",
    "address": "802 Ryder Avenue, Fairhaven, Pennsylvania, 2910"
  },
  {
    "index": 6,
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "name": "Cote Mathews",
    "gender": "male",
    "company": "FARMAGE",
    "email": "cotemathews@farmage.com",
    "phone": "+1 (813) 460-2296",
    "address": "948 Sheffield Avenue, Malo, Louisiana, 1846"
  },
  {
    "index": 7,
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "name": "Atkins Daugherty",
    "gender": "male",
    "company": "CONJURICA",
    "email": "atkinsdaugherty@conjurica.com",
    "phone": "+1 (973) 600-2385",
    "address": "866 Linden Street, Rockbridge, Alaska, 6992"
  },
  {
    "index": 8,
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "name": "Caroline Alvarez",
    "gender": "female",
    "company": "UXMOX",
    "email": "carolinealvarez@uxmox.com",
    "phone": "+1 (903) 556-3146",
    "address": "578 Jewel Street, Longoria, New York, 5572"
  },
  {
    "index": 9,
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "name": "Nettie Woodward",
    "gender": "female",
    "company": "MOTOVATE",
    "email": "nettiewoodward@motovate.com",
    "phone": "+1 (864) 403-2872",
    "address": "439 Division Place, Cetronia, Florida, 1941"
  },
  {
    "index": 10,
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "name": "Cunningham Jefferson",
    "gender": "male",
    "company": "QUANTALIA",
    "email": "cunninghamjefferson@quantalia.com",
    "phone": "+1 (857) 499-2361",
    "address": "503 Broome Street, Lacomb, South Dakota, 8047"
  },
  {
    "index": 11,
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "name": "Francesca Joyce",
    "gender": "female",
    "company": "MAROPTIC",
    "email": "francescajoyce@maroptic.com",
    "phone": "+1 (885) 445-3731",
    "address": "815 Lloyd Court, Cataract, Minnesota, 111"
  },
  {
    "index": 12,
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "name": "May Hurst",
    "gender": "male",
    "company": "IDEALIS",
    "email": "mayhurst@idealis.com",
    "phone": "+1 (868) 419-3656",
    "address": "301 Cumberland Street, Bladensburg, Delaware, 4148"
  },
  {
    "index": 13,
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "name": "Marilyn Hyde",
    "gender": "female",
    "company": "CORECOM",
    "email": "marilynhyde@corecom.com",
    "phone": "+1 (861) 558-2798",
    "address": "143 Losee Terrace, Belva, Guam, 9323"
  },
  {
    "index": 14,
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "name": "Solis Robbins",
    "gender": "male",
    "company": "EPLOSION",
    "email": "solisrobbins@eplosion.com",
    "phone": "+1 (913) 557-3949",
    "address": "377 Wakeman Place, Tilden, Northern Mariana Islands, 8000"
  },
  {
    "index": 15,
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "name": "Erma Farmer",
    "gender": "female",
    "company": "CORPULSE",
    "email": "ermafarmer@corpulse.com",
    "phone": "+1 (845) 524-3975",
    "address": "900 Harbor Lane, Falmouth, New Mexico, 6206"
  },
  {
    "index": 16,
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "name": "Elisa Petty",
    "gender": "female",
    "company": "NEUROCELL",
    "email": "elisapetty@neurocell.com",
    "phone": "+1 (948) 409-3635",
    "address": "341 Hamilton Avenue, Harviell, Illinois, 3888"
  },
  {
    "index": 17,
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "name": "Hazel Sharp",
    "gender": "female",
    "company": "TOURMANIA",
    "email": "hazelsharp@tourmania.com",
    "phone": "+1 (921) 447-2674",
    "address": "573 Richards Street, Winston, Washington, 5009"
  },
  {
    "index": 18,
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "name": "Hensley Cunningham",
    "gender": "male",
    "company": "GYNK",
    "email": "hensleycunningham@gynk.com",
    "phone": "+1 (921) 480-3163",
    "address": "900 Hopkins Street, Stockdale, Massachusetts, 3689"
  },
  {
    "index": 19,
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "name": "Mullins Mathis",
    "gender": "male",
    "company": "LEXICONDO",
    "email": "mullinsmathis@lexicondo.com",
    "phone": "+1 (804) 593-3364",
    "address": "246 Cove Lane, Macdona, Michigan, 3993"
  }
]

export default function Table() {

  // set up DataTable 
  useEffect(() => {
    $(document).ready(function () {
      $('#example').DataTable();
    });
  }, []);

  // set delete modal state
  const [showModal, setShowModal] = useState(false);
  // set data to delete 
  const [dataToDelete, setDataToDelete] = useState();
  // handle delete modal submitted 
  function handleSubmit() {
    setShowModal(false);
    alert("Submit Delete")
  }
  // handle delete modal closed
  const handleClose = () => setShowModal(false);
  // handle delete modal showed / closed
  function handleShow (data) {
    setDataToDelete(data)
    setShowModal(true)
  };

  return (
    <>
      <style jsx>
        {`
          
        `}
      </style>

      <Head>
        <title>Table | Next Bootstrap Admin</title>
        <meta name="description" content="Next Bootstrap" />
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
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
                <h1 className="mt-4">Tables</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a className="text-decoration-none">Dashboard</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">Tables</li>
                </ol>
                <div className="card mb-4">
                  <div className="card-body">
                    DataTables is a plugin that is used to generate the demo table below. For more information about DataTables, visit the
                    <a target="_blank" href="https://datatables.net/" rel="noreferrer" className="text-decoration-none"> DataTables documentation</a>
                    .
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-table me-1"></i>
                    DataTable Example
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table id="example" className="table table-hover">
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Company</th>
                            <th>Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((item, index) => 
                            <tr key={index + 1}>
                              <td>{index + 1}</td>
                              <td>
                                <Image src={item.picture} alt={item.name} className="img-fluid" width="32" height="32" />
                              </td>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.gender}</td>
                              <td>{item.age}</td>
                              <td>{item.company}</td>
                              <td>
                                <a href="#" className="me-2 text-decoration-none">
                                  Edit
                                </a>  
                                <a href="#" className="text-danger text-decoration-none" onClick={() => handleShow(item.name)} >
                                  Hapus
                                </a>  
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* <!-- Delete Modal --> */}
            {/* <DeleteModal show={showModal}
              onClick={handleSubmit}
              onHide={handleClose}
              data={dataToDelete}>
            </DeleteModal> */}
            <Modal show={showModal} onHide={() => handleClose()} centered>
              <Modal.Header closeButton>
                <Modal.Title>
                  Delete Data
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Sure Want to Delete <span className="fw-bold">{dataToDelete}</span> ?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>Close</Button>
                <Button variant="danger" onClick={() => handleSubmit()} >Delete</Button>
              </Modal.Footer>
            </Modal>
            
            <Footer />

          </div>
        </div>
        
      </main>
    </>
  )
}
