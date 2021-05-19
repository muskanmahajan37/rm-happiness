import styled from 'styled-components'

export const Button = styled.button`
  height: 4.8rem;
  border-radius: 4.8rem;
  border: 0;
  padding: 0 1.5rem;
  background: #0376ff;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;

  transition: filter 0.2s;

  svg {
    width: 20px;
    height: 20px;
  }

  svg:first-child {
    margin-right: 0.8rem;
  }

  svg.closeIcon {
    margin-left: 0.8rem;
  }

  &:hover {
    filter: brightness(0.95);
  }

  img {
    margin-right: 1rem;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
`
