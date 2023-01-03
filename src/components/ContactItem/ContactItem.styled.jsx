import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 5px;
  position: relative;
  padding-left: 20px;

  ::before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 7px;
    height: 7px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.theme.colors.blue};
  }
`;

export const ContactsText = styled.p`
  font-size: ${p => p.theme.fontSizes.ml};
  min-width: 300px;
`;

export const Button = styled.button`
  display: inline-flex;
  margin-left: 20px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.colors.blue};
  background: ${p => p.theme.colors.blue};
  cursor: pointer;
     &:hover, &:focus {
        color: ${p => p.theme.colors.white};
        background: ${p => p.theme.colors.blue};
        border: ${p => p.theme.colors.blue};
        outline: transparent;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
        };
`;
