import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50px;
  width: 320px;
  padding: 20px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0 1px 4px 0 ${(props) => props.theme.colors.shadow};

  z-index: 20;

  form {
    display: flex;
    flex-direction: column;

    span {
      display: flex;
      justify-content: space-between;

      svg {
        cursor: pointer;
        color: ${(props) => props.theme.colors.text};
      }
    }

    input {
      margin: 8px 0;
      width: 100%;
      height: 45px;
      padding: 8px 16px;
      border: 0;
      background: ${(props) => props.theme.colors.secondary};
    }

    button {
      width: 100%;
      height: 45px;
      border-radius: 4px;
      font-weight: 500;
      font-size: 16px;
      background: ${(props) => props.theme.colors.button};
      color: #fff;
    }

    button:hover {
      opacity: 0.9;
    }
  }
`;
