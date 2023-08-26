import styled from 'styled-components';

export const OuterWrapper = styled.div`
    width: 100%;
    /*display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;*/
    background-color: var(--color-beige);
`
export const InnerWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        width: 80%;
  }
`