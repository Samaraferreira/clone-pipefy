import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  padding: 0 40px;
  background: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.headerColor};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
