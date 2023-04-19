
import styled from 'styled-components'

export const CircleSC = styled.div`
  align-self: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 1rem;
`;

export const ContactTitleSC = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 0 0 1rem 0;

  @media (max-width: 500px) {
    flex-direction: column;
   h2, h3, h4{
      margin: 1rem 0;
    }
}
`;



export const InfoWrapperSC = styled.div`
  display: flex ;
  flex-direction: column ;
`;

export const ContactNameSC = styled.h2`
  padding: 0;
  margin: 0;
  line-height: 1.5rem;
  font-size: 1.5rem;
`;

