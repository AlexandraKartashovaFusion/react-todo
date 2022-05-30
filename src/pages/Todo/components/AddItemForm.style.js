import styled from '@emotion/styled';
import ListItem from '@mui/material/ListItem';

export default styled(ListItem)`
  background-color: ${props => props.theme.palette.grey.A400};
  border-radius: 10px;
  height: 12vh;
  display: flex;
  justify-content: center;

  .form {
    display: flex;
    margin-left: 20px;
  }

  .text-field {
    color: white;
    width: 30vw;
  }

  .buttons {
    width: 10vw;
    margin-left: 20px;
  }
`;

