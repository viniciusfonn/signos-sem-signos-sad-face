import styled from 'styled-components';

export const SignosBox = styled.div`
    width: 434px;
    height: 444px;
    margin: 0 auto;
    border-radius: 8px;
    background-color: #FDEBCC;
    border: 3px solid #f9b502;
   
`;

export const ContentBox = styled.div `
    display: flex;
    flex-direction: column;
    padding-top: 60px;
`;

export const Flex = styled.div `
    display: flex;
    justify-content: center;

    img {
        width: 55px;
        height: 55px;
    }

    strong {
        font-family: Roboto;
        font-size: 30px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #f17f01;
        /* text-transform: uppercase; */
    }
`;

export const TextBox = styled.div`
    width: 327px;
    height: 264px;
    margin: 35px 50px 50px 50px;
    font-family: Roboto;
    font-size: 22px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: justify;
    color: #000000;

`;