import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Wrapper, Container, Header,BallanceContainer,BallanceTitle,Ballance } from './styles';


export default function Home(){
    return (
        <Wrapper >
            <Container>
                <Header >
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e"/>

                    <BallanceContainer >
                        <BallanceTitle>Meu Saldo</BallanceTitle>
                        <Ballance>R$ 0,00</Ballance>
                    </BallanceContainer>

                    <AntDesign name="gift" size={30} color="#10c86e"/>
                </Header>
            </Container>
        </Wrapper>
    )
}