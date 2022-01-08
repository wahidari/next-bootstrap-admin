import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function DeleteModal({ show, data, onHide, onClick}) {
    
    return (
        <Modal show={show} onHide={() => onHide()}>

            <Modal.Header closeButton>
                <Modal.Title>
                    Delete Data
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                Sure Want to Delete <span className="fw-bold">{data}</span> ?
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => onHide()}>Close</Button>
                <Button variant="danger" onClick={() => onClick()} >Delete</Button>
            </Modal.Footer>

        </Modal>
    )
}
