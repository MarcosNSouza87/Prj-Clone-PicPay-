import React from 'react';

import {Wrapper,Container,Header,Title,Saldo,
    Bold,SubTitle,GroupBtn,BtnAdd,BtnRmv,TxtBtn} from './styles';

export default function Wallet(){
    return (
        <Wrapper >
            <Container>
                <Header>
                    <Title>Saldo Picpay</Title>
                    <Saldo>R$<Bold>0,00</Bold></Saldo>
                    <SubTitle>
                        Seu saldo está rendendo 100% de CDI
                    </SubTitle>
                    <GroupBtn>
                        <BtnAdd onPress={()=>{}}><TxtBtn>Adicionar</TxtBtn></BtnAdd>
                        <BtnAdd onPress={()=>{}}><TxtBtn>Remover</TxtBtn></BtnAdd>
                    </GroupBtn>
                </Header>
            </Container>
        </Wrapper>
    )
}