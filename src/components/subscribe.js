import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Subscribe = () => {
  return (
    <>
    <div className='subscribeContainer' >
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter your email here..."
          aria-label="email address"
          aria-describedby="email address"
        />
        <Button variant="outline-light" id="button-addon2">
          Subscribe
        </Button>
      </InputGroup>
      </div>
    </>
  );
};