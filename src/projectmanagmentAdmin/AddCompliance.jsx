import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddCompliance() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    subjects: "",
    Discription: "",
    date: "",
    posted_by: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://projectmanagement-employe-1.onrender.com/api/compliences",
        formData
      );

      console.log("Submitted successfully:", response.data);
      // alert("Compliance submitted successfully ✅");
      toast.success("Compliance submitted successfully ✅");

      navigate("/admin/compliance"); // redirect after success
    } catch (error) {
      console.error("Error submitting compliance:", error);
      // alert("Something went wrong ❌");
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-main-content">
        <Header></Header>
        <Container className="mt-5">
          <Row className="justify-content-md-center">
            <Col md={8}>
              <h3 className="mb-4">Add Compliance</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="subject" className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subjects"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="description" className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="Discription"
                    placeholder="Enter description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="date" className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="postedBy" className="mb-3">
                  <Form.Label>Posted By</Form.Label>
                  <Form.Control
                    type="text"
                    name="posted_by"
                    placeholder="Enter name"
                    value={formData.postedBy}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button
                  variant="secondary"
                  className="ms-2"
                  onClick={() => navigate("/admin/compliance")}
                >
                  Cancel
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AddCompliance;
