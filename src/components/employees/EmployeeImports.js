import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { importEmployees } from '../../slices/EmployeeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function EmployeeImports() {
    const [selectedFile, setSelectedFile] = useState(null);
    const employees = useSelector((state) => state.employees);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const uploadFile = () => {
        dispatch(importEmployees(selectedFile));    
    }
    useEffect(() => {
        if (employees.isUploaded) {
            navigate('/employees/list');
        }
    }, [employees.isUploaded]);
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Employees Import</h2>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Default file input example</Form.Label>
                        <Form.Control type="file" onChange={(event) => setSelectedFile(event.target.files[0])}/>
                    </Form.Group>
                    <Button variant="primary" onClick={uploadFile}>Upload</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default EmployeeImports;