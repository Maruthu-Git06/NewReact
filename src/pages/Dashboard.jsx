import React, { useState, useCallback } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { FaFileUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const handleGenerate = () => {
    navigate("/report");
  };

  return (
    <Container fluid className="p-4">
      <Row>
        <Col lg={6}>
          <Form.Select>
            <option>Default select</option>
            <option>React</option>
            <option>Java</option>
            <option>HTML</option>
            <option>Python</option>
          </Form.Select>

        </Col>
      </Row>
      <hr style={{ borderTop: "2px solid #ccc", margin: "20px 0" }} />

      <Row>
        {/* Left Column - File Upload */}
        <Col lg={5}>
          <Card className="mb-4 shadow-sm">
            <Card.Header>
                <strong>Upload File (Drag & Drop)</strong>
            </Card.Header>
            <Card.Body>
                <div
                    {...getRootProps()}
                    style={{
                    border: '2px dashed #0d6efd',
                    borderRadius: '10px',
                    padding: '30px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    color: isDragActive ? '#0056b3' : '#333',
                    height: '240px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                    }}
                >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                    <p> Drop the file here...</p>
                    ) : (
                        <>
                        <FaFileUpload size={48} className="mb-2" />
                        <p> Drag and drop a file here, or click to select</p>
                        </>                  
                    )}
                </div>
                {file && <p className="mt-3 text-success">Selected: {file.name}</p>}
                <Button variant="success" className="mt-2">Upload</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={1} className="d-flex flex-column align-items-center justify-content-center">
            <div >
                <p>OR</p>
            </div>
        </Col>

        {/* Right Column - Copy/Paste Content */}
        <Col lg={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Header>
              <strong>Paste Content</strong>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formTextarea">
                  <Form.Label>Enter or paste your content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={8}
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Paste your content here..."
                  />
                </Form.Group>
                <Button variant="success" className="mt-2">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <div className="d-flex justify-content-end">
          <Button className="mt-2" style={{backgroundColor:"#61dafb", color:"black"}} onClick={handleGenerate}>Generate</Button>
        </div>      
      </Row>
    </Container>
  );
};

export default Dashboard;
