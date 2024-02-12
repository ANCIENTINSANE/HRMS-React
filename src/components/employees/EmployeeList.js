import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmployees, resetCreated } from '../../slices/EmployeeSlice';
import Table from 'react-bootstrap/Table';
import { Col, Container, Row } from 'react-bootstrap';

function EmployeeList() {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees);
    useEffect(() => {
        dispatch(resetCreated());
        dispatch(getAllEmployees());
    }, []);
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="my-4 text-center">Employee List</h2>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Emp No.</th>
                                <th>Full Name</th>
                                <th>Father's Name</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Company Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.data?.map((employee, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{employee.employeeNo}</td>
                                    <td>{employee.fullName}</td>
                                    <td>{employee.fatherName}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.city}</td>
                                    <td>{employee.companyName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default EmployeeList;