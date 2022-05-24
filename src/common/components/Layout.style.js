import styled from '@emotion/styled';

export default styled('header')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;

  a {
    margin-right: 20px;
  }

  .active {
    color: green;
    cursor: default;
  }
`;
