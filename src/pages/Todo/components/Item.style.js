
import styled from '@emotion/styled';
import ListItem from '@mui/material/ListItem';

export default styled(ListItem)`
  background-color: #A1A18A;
  border-radius: 5px;
  margin-left: 34px;
  height: 6vh;
  width: 46vw;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;

  .buttons {
    width: 8vw;
    margin-left: 10px !important;
  }

  .text {
    text-decoration: line-through;
  }

  .textBolt {
    font-weight: 700;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    width: 15vw;
  }
`;
