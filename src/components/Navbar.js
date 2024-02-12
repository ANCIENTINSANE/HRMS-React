import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import "./Navbar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faUser,
  faMinus,
  faCalendarCheck,
  faIndianRupeeSign,
  faChartSimple,
  faComputer,
  faTableColumns,
  faTableCellsLarge
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

library.add(
  faPlus,
  faUser,
  faMinus,
  faCalendarCheck,
  faIndianRupeeSign,
  faChartSimple,
  faComputer,
  faTableColumns,
  faTableCellsLarge
);

const NavbarComponent = () => {
  const expand = false;
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState({
    isShowEmployees: false,
    isShowAttendance: false,
    isShowPayroll: false,
    isShowReports: false,
    isShowJob: false,
    isShowMasters: false,
    isShowAppMasters: false,
  });

  const [dropdownClicked, setDropdownClicked] = useState(false);

  const toggleDropdownState = (dropdown) => {
    setToggleDropdown((prevState) => {
      const updatedState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === dropdown ? !prevState[key] : false;
        return acc;
      }, {});
      setDropdownClicked(updatedState[dropdown]);
      return updatedState;
    });
    setDropdownClicked(true);
  };

  const handleDropdownSelect = (eventKey) => {
    // Close other dropdowns when one is clicked
    setToggleDropdown({
      isShowEmployees: eventKey === "isShowEmployees",
      isShowAttendance: eventKey === "isShowAttendance",
      isShowPayroll: eventKey === "isShowPayroll",
      isShowReports: eventKey === "isShowReports",
      isShowJob: eventKey === "isShowJob",
      isShowMasters: eventKey === "isShowMasters",
      isShowAppMasters: eventKey === "isShowAppMasters",
    });
  };

  const renderDropdownIcon = (dropdown) => {
    const iconClass = toggleDropdown[dropdown]
      ? "nav-menu-minus"
      : "nav-menu-plus";

    return (
      <span
        className={`${iconClass}`}
        onClick={() => toggleDropdownState(dropdown)}
      >
        {toggleDropdown[dropdown] ? (
          <FontAwesomeIcon icon={faMinus} />
        ) : (
          <FontAwesomeIcon icon={faPlus} />
        )}
      </span>
    );
  };

  const renderDropdownTitle = (title, dropdownKey) => {
    const titleClass =
      dropdownClicked && toggleDropdown[dropdownKey]
        ? "background-color-change"
        : "";

    return <span className={`${titleClass}`}>{title}</span>;
  };

  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid style={{ justifyContent: "left" }}>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={() => setIsShowNavbar(true)}/>
          <Navbar.Brand>
            <img
              width="200px"
              style={{ marginLeft: "15px" }}
              alt=""
              src="https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png"
            />
          </Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
            show={isShowNavbar}
            onHide={() => setIsShowNavbar(false)}
            style={{ width: "24rem" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                ITPS
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className="nav-menu">
                  <Row>
                    <Col>
                      <span style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faTableColumns}
                          className="nav-menu-icon"
                          onClick={() => toggleDropdownState("isShowEmployees")}
                        />
                      </span>
                    </Col>
                    <Col>
                      <Nav.Link>Dashboard</Nav.Link>
                    </Col>
                  </Row>
                </div>
                <div className="nav-menu">
                  <Row>
                    <Col>
                      <span style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faUser}
                          className="nav-menu-icon"
                          onClick={() => toggleDropdownState("isShowEmployees")}
                        />
                      </span>
                    </Col>
                    <Col>
                      <NavDropdown
                        title={renderDropdownTitle(
                          "Employees",
                          "isShowEmployees"
                        )}
                        id={`offcanvasNavbarDropdown-expand-${toggleDropdown.isShowEmployees}`}
                        show={toggleDropdown.isShowEmployees}
                        onToggle={() => toggleDropdownState("isShowEmployees")}
                        onSelect={() => handleDropdownSelect("isShowEmployees")}
                      >
                        <NavDropdown.Item onClick={() => setIsShowNavbar(false)}><Link to={'/employees/create'}>Employee Create</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setIsShowNavbar(false)}><Link to={'/employees/list'}>Employee List</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setIsShowNavbar(false)}><Link to={'/employees/imports'}>Employee Imports</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setIsShowNavbar(false)}><Link to={'/employees/awards'}>Awards List</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setIsShowNavbar(false)}><Link to={'/employees/notice'}>Notice List</Link></NavDropdown.Item>
                      </NavDropdown>
                    </Col>
                    <Col> {renderDropdownIcon("isShowEmployees")} </Col>
                  </Row>
                </div>
                <div className="nav-menu">
                  <Row>
                    <Col>
                      <span style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faCalendarCheck}
                          className="nav-menu-icon"
                          onClick={() =>
                            toggleDropdownState("isShowAttendance")
                          }
                        />
                      </span>
                    </Col>
                    <Col>
                      <NavDropdown
                        title={renderDropdownTitle(
                          "Attendance",
                          "isShowAttendance"
                        )}
                        id={`offcanvasNavbarDropdown-expand-${toggleDropdown.isShowAttendance}`}
                        show={toggleDropdown.isShowAttendance}
                        onToggle={() => toggleDropdownState("isShowAttendance")}
                        onSelect={() =>
                          handleDropdownSelect("isShowAttendance")
                        }
                      >
                        <NavDropdown.Item>Attendance Import</NavDropdown.Item>
                        <NavDropdown.Item>Manual Punching</NavDropdown.Item>
                        <NavDropdown.Item>Leave Application</NavDropdown.Item>
                        <NavDropdown.Item>Absent Details</NavDropdown.Item>
                        <NavDropdown.Item>
                          Attendance Verification
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Col>
                    <Col>{renderDropdownIcon("isShowAttendance")}</Col>
                  </Row>
                </div>
                <div className="nav-menu">
                  <Row>
                    <Col>
                      <span style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faIndianRupeeSign}
                          className="nav-menu-icon"
                          onClick={() => toggleDropdownState("isShowPayroll")}
                        />
                      </span>
                    </Col>
                    <Col>
                      <NavDropdown
                        title={renderDropdownTitle("Payroll", "isShowPayroll")}
                        id={`offcanvasNavbarDropdown-expand-${toggleDropdown.isShowPayroll}`}
                        show={toggleDropdown.isShowPayroll}
                        onToggle={() => toggleDropdownState("isShowPayroll")}
                        onSelect={() => handleDropdownSelect("isShowPayroll")}
                      >
                        <NavDropdown.Item>Payslip</NavDropdown.Item>
                        <NavDropdown.Item>Salary Setup</NavDropdown.Item>
                        <NavDropdown.Item>Salary Process</NavDropdown.Item>
                        <NavDropdown.Item>Employee Loan</NavDropdown.Item>
                        <NavDropdown.Item>Employee Conveyance</NavDropdown.Item>
                        <NavDropdown.Item>Tax File Upload</NavDropdown.Item>
                      </NavDropdown>
                    </Col>
                    <Col> {renderDropdownIcon("isShowPayroll")}</Col>
                  </Row>
                </div>
                <div className="nav-menu">
                  <Row>
                    <Col>
                      <span style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faChartSimple}
                          className="nav-menu-icon"
                          onClick={() => toggleDropdownState("isShowReports")}
                        />
                      </span>
                    </Col>
                    <Col>
                      <NavDropdown
                        title={renderDropdownTitle("Reports", "isShowReports")}
                        id={`offcanvasNavbarDropdown-expand-${toggleDropdown.isShowReports}`}
                        show={toggleDropdown.isShowReports}
                        onToggle={() => toggleDropdownState("isShowReports")}
                        onSelect={() => handleDropdownSelect("isShowReports")}
                      >
                        <NavDropdown.Item>Attendance</NavDropdown.Item>
                        <NavDropdown.Item>
                          Payslip Bulk Download
                        </NavDropdown.Item>
                        <NavDropdown.Item>Monthly Salary</NavDropdown.Item>
                        <NavDropdown.Item>Yearly Salary</NavDropdown.Item>
                        <NavDropdown.Item>
                          Salary Deduction Details
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Col>
                    <Col>{renderDropdownIcon("isShowReports")}</Col>
                  </Row>
                </div>
                <div className="nav-menu">
                  <Row>
                    <Col>
                      <span style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faComputer}
                          className="nav-menu-icon"
                          onClick={() => toggleDropdownState("isShowJob")}
                        />
                      </span>
                    </Col>
                    <Col>
                      <NavDropdown
                        title={renderDropdownTitle("Job", "isShowJob")}
                        id={`offcanvasNavbarDropdown-expand-${toggleDropdown.isShowJob}`}
                        show={toggleDropdown.isShowJob}
                        onToggle={() => toggleDropdownState("isShowJob")}
                        onSelect={() => handleDropdownSelect("isShowJob")}
                      >
                        <NavDropdown.Item>Candidate Create</NavDropdown.Item>
                        <NavDropdown.Item>Candidate List</NavDropdown.Item>
                        <NavDropdown.Item>Job Openings List</NavDropdown.Item>
                        <NavDropdown.Item>
                          Job Application List
                        </NavDropdown.Item>
                        <NavDropdown.Item>Trainings List</NavDropdown.Item>
                      </NavDropdown>
                    </Col>
                    <Col>{renderDropdownIcon("isShowJob")}</Col>
                  </Row>
                </div>
                <div className="nav-menu">
                  <Row>
                    <Col>
                      <span style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faTableCellsLarge}
                          className="nav-menu-icon"
                          onClick={() => toggleDropdownState("isShowMasters")}
                        />
                      </span>
                    </Col>
                    <Col>
                      <NavDropdown
                        title={renderDropdownTitle("Masters", "isShowMasters")}
                        id={`offcanvasNavbarDropdown-expand-${toggleDropdown.isShowMasters}`}
                        show={toggleDropdown.isShowMasters}
                        onToggle={() => toggleDropdownState("isShowMasters")}
                        onSelect={() => handleDropdownSelect("isShowMasters")}
                      >
                        <NavDropdown.Item>Company</NavDropdown.Item>
                        <NavDropdown.Item>Location</NavDropdown.Item>
                        <NavDropdown.Item>Branch</NavDropdown.Item>
                        <NavDropdown.Item>Department</NavDropdown.Item>
                        <NavDropdown.Item>Department Assign</NavDropdown.Item>
                        <NavDropdown.Item>Designations</NavDropdown.Item>
                        <NavDropdown.Item>Conveyance</NavDropdown.Item>
                        <NavDropdown.Item>Leave</NavDropdown.Item>
                        <NavDropdown.Item>Holidays</NavDropdown.Item>
                        <NavDropdown.Item>City</NavDropdown.Item>
                      </NavDropdown>
                    </Col>
                    <Col>{renderDropdownIcon("isShowMasters")}</Col>
                  </Row>
                </div>
                <div className="nav-menu">
                  <Row>
                    <Col>
                      <span style={{ display: "flex" }}>
                        <FontAwesomeIcon
                          icon={faComputer}
                          className="nav-menu-icon"
                          onClick={() => toggleDropdownState("isShowAppMasters")}
                        />
                      </span>
                    </Col>
                    <Col>
                      <NavDropdown
                        title={renderDropdownTitle("App Masters", "isShowAppMasters")}
                        id={`offcanvasNavbarDropdown-expand-${toggleDropdown.isShowAppMasters}`}
                        show={toggleDropdown.isShowAppMasters}
                        onToggle={() => toggleDropdownState("isShowAppMasters")}
                        onSelect={() => handleDropdownSelect("isShowAppMasters")}
                      >
                        <NavDropdown.Item>Add Users</NavDropdown.Item>
                        <NavDropdown.Item>List of users</NavDropdown.Item>
                        <NavDropdown.Item>Common Settings</NavDropdown.Item>
                        <NavDropdown.Item>Roles</NavDropdown.Item>
                      </NavDropdown>
                    </Col>
                    <Col>{renderDropdownIcon("isShowAppMasters")}</Col>
                  </Row>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
