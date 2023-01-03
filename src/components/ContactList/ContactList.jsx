import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';
import { Box } from '../Box';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Box mt={10} ml={30} as="ul">
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          onDelete={onDelete}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
