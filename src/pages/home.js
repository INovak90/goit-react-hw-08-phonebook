import { Box, Container } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box as="main">
      <Container
        px="20px"
        pb="50px"
        minH="calc(100vh - 150px)"
        maxW={['100%', 480, 768, 992, 1280, 1536]}
        display="flex"
        justifyContent="center"
        alignItems="center"
      ></Container>
    </Box>
  );
};

export default Home;
