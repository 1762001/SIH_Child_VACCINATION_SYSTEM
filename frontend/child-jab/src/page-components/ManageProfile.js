import React from 'react'
import FileUploadCenter from '../components/FileUploadCenter'
import {Container, Row, Col, Card} from 'react-bootstrap'

function ManageProfile() {
    return (
        <>
        <Container>
           <Col md={10}>
           <Card border="secondary" bg="light" text="dark">
               <Card.Header>Upload Profile Here...</Card.Header>
               <Card.Body>
         <FileUploadCenter></FileUploadCenter>
         </Card.Body>
         </Card>
         </Col>  
         </Container>
        </>

    )
}

export default ManageProfile
