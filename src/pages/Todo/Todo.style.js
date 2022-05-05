import List from '@mui/material/List';
import styled from '@emotion/styled';

export default styled(List)`
  display: flex;
  flex-direction: column;
  height: 85vh;
  width: 70vw;
  margin-top: 5%;
  margin-left: 16%;
  border-radius: 10px;

  .actions {
    display: flex;
    justify-content: space-between;
    /* margin-top: 6px; */
  }

  .actions_button {
    min-width: 160px;
  }

  .icon {
    margin-left: 5px;
  }
`;
