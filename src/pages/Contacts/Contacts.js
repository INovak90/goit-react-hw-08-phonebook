import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/Form/Form';
import { Flex, Heading } from '@chakra-ui/react';
import ContactCard from './ContactCard';
import { Section } from './Contacts.styled';

const Contacts = () => {
  return (
    <Section>
      <Heading marginBottom={'12px'} color="white">
        Contacts
      </Heading>
      <ContactForm />
      <Filter />
      <Flex gap="10px" marginTop="10px" wrap="wrap">
        <ContactCard />
      </Flex>
    </Section>
  );
};

export default Contacts;
