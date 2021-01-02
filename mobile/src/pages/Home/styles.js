import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
background: #001018;
flex:1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
height:50px;
padding: 0 16px;
flex-direction:row;
align-items:center;
justify-content: space-between;
`;

export const BallanceContainer = styled.View``;
export const BallanceTitle = styled.Text`
color:rgba(255,255,255,0.8);
font-size:14px;
text-align:center;
`;

export const Ballance = styled.Text`
color:#fff;
text-align:center;
font-size:20px;
font-weight:bold;
`; 
/*
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrapper:{
        backgroundColor:"#001019",
        flex:1,
    },
    header:{
        height:'50px',
        flexDirection:'row',
        padding:'0 16px',
    },
    titleBallance:{
        color:'rgba(255,255,255,0.8)'
        
    }

})*/