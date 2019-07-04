import React from 'react';
import { SignosBox, TextBox, ContentBox, Flex } from './style';



const Signos = ({ signos, loading}) => (
    
    <SignosBox>
        <ContentBox>
            <Flex>
                <img src={`/assets/${signos.name}.png`} alt = ''/>
                <strong >{signos.name}</strong>
            </Flex>

            <TextBox>
                {loading ? <center> <i className="fa fa-spinner fa-pulse" /> </center> : signos.description}
            </TextBox>
        </ContentBox>
    </SignosBox>
);

export default Signos;