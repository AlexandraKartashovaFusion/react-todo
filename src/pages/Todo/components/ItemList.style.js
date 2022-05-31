import styled from '@emotion/styled';

export default styled.div`
  background-color: ${({theme}) => theme.palette.grey.A400};
  display: flex !important;
  flex-direction: column !important;
  overflow-y: auto;
  height: 100%;
  max-height: 70vh;
  margin-top: 20px;
  border-radius: ${({theme}) => theme.borderRadius.medium};
  padding-top: 10px;
  padding-bottom: 20px;
  margin-top: 10px !important;
`;
