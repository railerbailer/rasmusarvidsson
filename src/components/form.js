import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
<Form.Field
  type="email"
  id="form-input-control-last-name"
  control={Input}
  label="Email"
  placeholder="Example@example.com"
/>;
const ContactForm = () => (
  <Form>
    <Form.Group widths="equal">
      <Form.Field
        type="text"
        id="form-input-control-first-name"
        control={Input}
        label="Name"
        placeholder="Name"
      />

      <Form.Field
        type="email"
        id="form-input-control-last-name"
        control={Input}
        label="Email"
        placeholder="Example@example.com"
      />
    </Form.Group>
    <Form.Field
      id="form-textarea-control-opinion"
      control={TextArea}
      label="Message"
      placeholder="Message"
    />
    <Form.Field
      id="form-button-control-public"
      control={Button}
      content="Confirm"
      label="Label with htmlFor"
    />
  </Form>
);

export default ContactForm;
