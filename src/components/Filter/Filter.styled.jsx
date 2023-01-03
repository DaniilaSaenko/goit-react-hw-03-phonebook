import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  margin-top: 3px;
  padding: 5px 15px;
  border-radius: ${p => p.theme.radii.normal};
`;
export const Label = styled.label`
  display: block;
  font-size: ${p => p.theme.fontSizes.m};
`;
