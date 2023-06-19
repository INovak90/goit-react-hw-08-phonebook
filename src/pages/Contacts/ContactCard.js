import { ListItem, Text } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contactsOperations';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import * as selectors from '../../redux/selectors';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@chakra-ui/react';
import { DeleteIcon, PhoneIcon, StarIcon } from '@chakra-ui/icons';

const notify = () =>
  toast.success('The contact has been deleted.', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

const ContactCard = () => {
  const contacts = useSelector(selectors.selectContacts);
  const isLoading = useSelector(selectors.selectIsLoading);
  const filter = useSelector(selectors.selectFilter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return visibleContacts.map(({ name, id, number }) => {
    return (
      <ListItem key={id}>
        <Text><StarIcon/>{name}:</Text>
        <Text><PhoneIcon/>{number}</Text>
        <Button
          display="flex"
          gap="2px"
          size="xs"
          _hover={{ bg: 'red.500', color: 'white' }}
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
            if (!isLoading) {
              notify();
            }
          }}
        >
          <DeleteIcon />
          Delete
        </Button>
      </ListItem>
    );
  });
};

export default ContactCard;
