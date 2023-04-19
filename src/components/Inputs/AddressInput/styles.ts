import styled from "styled-components";

export const AddressGridSC = styled.div`
display: grid;
grid-gap: 1rem;
grid-template-columns: repeat(2, 1fr);
  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fit, minmax(0, 100%));
}
`;