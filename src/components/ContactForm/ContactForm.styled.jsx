import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  margin-top: 3px;
  padding: 5px 15px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const Button = styled.button`
  margin-top: 10px;

  display: inline-flex;

border-radius: ${p => p.theme.radii.normal};
border: ${p => p.theme.colors.blue};
  background: ${p => p.theme.colors.blue};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: capitalize;
  cursor: pointer;
   &:hover, &:focus {
        color: ${p => p.theme.colors.white};
        background: ${p => p.theme.colors.blue};
        border: ${p => p.theme.colors.blue};
        outline: transparent;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
        };
`;

export const Label = styled.label`
  display: block;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  :not(:first-child) {
    margin-top: 5px;
  }
`;

export const Form = styled.form`
  margin-top: 10px;
`;
