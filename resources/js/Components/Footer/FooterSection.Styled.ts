import styled from 'styled-components';

export const StyledFooterSection = styled.section`
   display: flex;
   justify-content: center;
`;

export const LogoContainer = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);  // Centers the logo vertically
`;

export const FooterImage = styled.img`
    width: 100%;
    height: 156px;
    position: absolute;
    bottom: 0;
    z-index: 1;  // Ensures the logo is above the footer image

`;
