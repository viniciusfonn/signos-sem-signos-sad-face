import styled from 'styled-components';

export const Container = styled.div`
    max-width: 496px;
    height:615px;
    margin: 0 auto;
    

    h1 {
        margin-top: 0px;
        margin-left: 28px;
        margin-bottom: 9px;
        font-size: 36px;
        font-family: Roboto;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #41c96a;
    }
    h1:after {
        content: '';
        display: block;
        width: 437px;
        height: 1px;
        background-color: #d8d8d8;
        margin: 28px 0 0 0;
    }
`;

export const LeftButton = styled.div`
    border-right: 3px solid #000;
    border-bottom: 3px solid #000;
    content: "";
    display: inline-block;
    height: 1em;
    vertical-align: bottom;
    width: 1em;
    transform: rotate(130deg);
`;

export const RightButton = styled.div`
    border-right: 3px solid #000;
    border-bottom: 3px solid #000;
    content: "";
    display: inline-block;
    height: 1em;
    vertical-align: bottom;
    width: 1em;
    transform: rotate(-45deg);
    margin-left:200px;
`;

export const Flex = styled.div`
    display: flex;
    position: relative;
    top: 90px;
    justify-content: center;
`;

