'use client'

import { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

function App() {
  const [file, setFile] = useState(null)

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (file) {
      console.log('Selected file:', file)
      const formData = new FormData();
      formData.append('file', file)
      const response = await axios.post(import.meta.env.VITE_API_URL + "/upload", formData);

      console.log(response)
    }
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload an image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleFileChange}
                accept="image/*"
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!file}>
              Upload
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
