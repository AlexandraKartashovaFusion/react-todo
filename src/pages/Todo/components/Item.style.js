
import styled from '@emotion/styled';

export default styled.div`
  .container {
    background-color: ${({theme}) => theme.colors.item};
    border-radius: ${({theme}) => theme.borderRadius.small};
    margin-left: 25px;
    margin-right: 25px;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
  }

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

  .done-item {
    box-shadow: ${({ theme }) =>  theme.shadows.dark};
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15vw;
  }
`;
