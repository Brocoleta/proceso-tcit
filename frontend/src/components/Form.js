import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const FormContainer = ({ addPost }) => {
  const [formArguments, setFormArguments] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e, { name, value }) => {
    setFormArguments({ ...formArguments, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(formArguments);
    setFormArguments({
      name: "",
      description: "",
    });
  };

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            placeholder="Name"
            name="name"
            value={formArguments.name}
            onChange={handleChange}
          />
          <Form.Input
            placeholder="Description"
            name="description"
            value={formArguments.description}
            onChange={handleChange}
          />
          <Form.Button content="Submit" />
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

export default FormContainer;
