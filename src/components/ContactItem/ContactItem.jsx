import PropTypes from 'prop-types';
import { ListItem, ContactsText, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem key={id}>
      <ContactsText>
        {name}: {number}
      </ContactsText>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
