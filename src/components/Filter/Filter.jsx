import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';
import { Box } from '../Box';

export const Filter = ({ value, onChange }) => (
  <Box mt={10}>
    <Label>
      Find contacts by name
      <Input type="text" value={value} placeholder="Search..." onChange={onChange} />
    </Label> 
  </Box>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
