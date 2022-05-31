import styled from '@emotion/styled';
import ListItem from '@mui/material/ListItem';

export default styled(ListItem)`
  background-color: ${({theme}) => theme.palette.grey.A400};
  border-radius: ${({theme}) => theme.borderRadius.medium};
  height: 12vh;
  display: flex;
  justify-content: center;

  .form {
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
    justify-content: space-around;
  }

  .text-field {
    color: white;
    width: 50vw;
  }

  .buttons {
    width: 10vw;
    margin-left: 20px;
  }
`;

