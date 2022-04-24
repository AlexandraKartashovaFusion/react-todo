/* eslint-disable import/no-anonymous-default-export */
import styled from '@emotion/styled';
import ListItem from '@mui/material/ListItem';

export default styled(ListItem)`
    background-color: #7D9093;
    border-radius: 10px;
    height: 12vh;
    display: flex;
    justify-content: center;

    .form {
      display: flex;
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

