
import styled from '@emotion/styled';

export default styled.div`
  background-color: #A1A18A;
  border-radius: 5px;
  margin-left: 25px;
  margin-right: 25px;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;

  .buttons {
    height: 4vh;
    width: 8vw;
    margin-left: 10px;
  }

  .text {
    text-decoration: line-through;
  }

  .text-bolt {
    font-weight: 700;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15vw;
  }
`;
