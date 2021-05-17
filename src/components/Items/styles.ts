import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0 0 68px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 1rem 0rem 1rem 1rem;
  background: var(--gray);
  width: 100%;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    border: none;
    margin-top: 0.6rem;
  }

  img {
    width: 25px;
    height: 25px;
    border: none;
    margin-right: 1rem;
  }
`
