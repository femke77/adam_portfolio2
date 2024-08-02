import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';


export default function Contact() {
  const [
    formState, setFormState
  ] = useState ({name: '', email: '', message: ''})
  const [ userMessage, setUserMessage ] = useState ('')
  const handleInputChange = (e) => {
    setFormState ({ ...formState, [e.target.name]: e.target.value })
  }
  const handleValidation = (e) => {
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setUserMessage("Invalid email");
      } else {
        setUserMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setUserMessage("Required field");
      } else {
        setUserMessage("");
      }
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault ()
    setUserMessage("Email Sent")
    setFormState({name: '', email: '', message: ''})
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your Name Here" name='name' value = {formState.name} onBlur={handleValidation} onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name='email' value = {formState.email} onBlur={handleValidation} onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={3} name='message' value = {formState.message} onBlur={handleValidation} onChange={handleInputChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      { userMessage && (
        <p>{userMessage}</p>
      )}
    </Form>
  );
}
