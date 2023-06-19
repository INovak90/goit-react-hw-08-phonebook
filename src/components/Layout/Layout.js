import { Link, Outlet } from 'react-router-dom';
import { Box, Flex, Spacer, Avatar, Button, Tag } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/authorization/authOperations';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';
import { Suspense } from 'react';


export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <header>
        <Box w="100%" p={4} color="white">
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box
              gap="2"
              _hover={{ bg: 'red.500', color: 'white' }}
              borderRadius="5px"
              p="5px"
            >
              <Link to="/">Home</Link>
            </Box>
            {isLoggedIn && (
              <Box
                borderRadius="5px"
                p="5px"
                _hover={{ bg: 'red.500', color: 'white' }}
              >
                <Link to="/contacts">Contacts</Link>
              </Box>
            )}
            <Spacer />
            {isLoggedIn ? (
              <Box borderRadius="5px" p="5px">
                <Flex gap={2}>
                  <Tag colorScheme="white">{user.email}</Tag>
                  <Button
                    onClick={onLogOut}
                    size="sm"
                    colorScheme="white"
                    borderRadius="full"
                    _hover={{ bg: 'red.500', color: 'white' }}
                  >
                    <Avatar
                      src=""
                      colorScheme="white"
                      size="xs"
                      name={user.name}
                      ml={-1}
                      mr={2}
                    />
                    Logout
                  </Button>
                </Flex>
              </Box>
            ) : (
              <>
                {' '}
                <Box
                  gap="2"
                  _hover={{ bg: 'red.500', color: 'white' }}
                  borderRadius="5px"
                  p="5px"
                >
                  <Link to="/login">Log in</Link>
                </Box>
                <Box
                  _hover={{ bg: 'red.500', color: 'white' }}
                  borderRadius="5px"
                  p="5px"
                >
                  <Link to="/register">Registration</Link>
                </Box>{' '}
              </>
            )}
          </Flex>
        </Box>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
