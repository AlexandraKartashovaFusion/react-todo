import styled from '@emotion/styled';

export default styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;

  .actions_button {
    min-width: 160px;
  }

  .active-button {
    color: red;
    background: darken($background-color, 10%);
    width: 500px
  }

  .icon {
    margin-left: 5px;
  }
`;
