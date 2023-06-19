import React from 'react';
import { useFormik } from 'formik';
import { Heading, Input, Button, Flex, Center } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authorization/authOperations';
import { Label, Section } from './login.styled';

const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(register(values));
    },
  });
  return (
    <Section>
      <Heading textAlign={'center'} marginBottom={'12px'} color="white">
        Registration
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <Center>
          <Flex direction="column" gap={5}>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                color="white"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                color="white"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.password}
                color="white"
              />
            </div>
            <Center>
              <Button
                type="submit"
                height="38px"
                width="150px"
                isLoading={false}
                loadingText="Submitting"
                colorScheme="teal"
                variant="outline"
                color="white"
                _hover={{ bg: 'red.500', color: 'white' }}
              >
                Submit
              </Button>
            </Center>
          </Flex>
        </Center>
      </form>
    </Section>
  );
};

export default Register;
