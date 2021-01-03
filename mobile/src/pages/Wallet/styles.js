import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
background: #001018;
flex:1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
display:flex;
flex-direction:column;
justify-content:center;
background-color:#3ad17a;
align-items:center;
height:250px;
`;
export const Title = styled.Text`
margin-top:30px;
color:#fff;
`;
export const Saldo = styled.Text`
color:#fff;
font-size:30px;
font-weight:300;
padding-top:10px;
`;
export const Bold = styled.Text`
font-weight:600;
padding-left:5px;

`;
export const SubTitle = styled.Text`
padding-top:15px;
color:#fff;
font-size:13px;
font-weight:400;
`;

export const GroupBtn = styled.View`
flex-direction:row;
padding:20px 0 10px 0;
`;
export const BtnAdd = styled.TouchableOpacity`
margin:10px;
padding:10px 20px;

border:1px solid #ffffffaa;
border-radius:30px;
`;
export const TxtBtn = styled.Text`
color:#fff;
font-size:12px;
font-weight:200;
`;
export const BtnRmv = styled.TouchableOpacity``;