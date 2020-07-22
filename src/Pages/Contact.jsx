import React, { useState, useContext } from "react";
import {
  Box,
  ResponsiveContext,
  Heading,
  FormField,
  TextInput,
  TextArea,
  Button,
  Form,
  Anchor,
  Text
} from "grommet";

export default () => {
  const size = useContext(ResponsiveContext);
  const [value, setValue] = useState({});

  return (
    <Box
      width={size !== "small" && "800px"}
      margin={size === "small" ? "small" : { bottom: "6em" }}
    >
      <Heading
        style={{ fontSize: "5em", fontFamily: "IBM Plex Mono" }}
        margin={{ top: "xlarge" }}
      >
        Contact
      </Heading>
      <Text size="large">
        <Anchor color="black" href="mailto:eliunited@gmail.com">
          @me
        </Anchor>
      </Text>
      {/* <Form
            value={value}
            onChange={(nextValue) => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({ value }) => {}}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <FormField label="Your Name">
              <TextInput />
            </FormField>
            <FormField label="Your Email">
              <TextInput />
            </FormField>
            <FormField label="How did you find us?">
              <TextInput />
            </FormField>
            <Box margin={{ vertical: "large" }} height="medium">
              <TextArea placeholder="Your Message" size="large" fill={true} />
            </Box>
            <Box direction="row" gap="small">
              <Button type="submit" primary label="Submit" />
              <Button type="reset" label="Reset" />
            </Box>
          </Form> */}
    </Box>
  );
};
