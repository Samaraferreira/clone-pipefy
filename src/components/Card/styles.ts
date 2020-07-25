import styled, { css } from 'styled-components';

interface LabelProps {
  color: string;
}

interface ContainerProps {
  isDragging: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 ${(props) => props.theme.colors.shadow};
  border-top: 20px solid ${(props) => props.theme.colors.secondary};
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span<LabelProps>`
  width: 40px;
  height: 6px;
  border-radius: 2px;
  display: inline-block;
  background: ${(props) => props.color};
`;
