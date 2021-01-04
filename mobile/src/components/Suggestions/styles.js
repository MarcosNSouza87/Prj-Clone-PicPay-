import styled from 'styled-components/native'

export const Main = styled.View`
    flex-direction:column;
    background:#1e222d;
`;

export const Tipes = styled.View`
    flex-direction:row;
`;

export const Action = styled.TouchableOpacity`
width:80px;
margin:3px;
`;

export const Title = styled.Text`
    color:#fff;
`;



export const Container = styled.ScrollView.attrs( ()=>({
    horizontal:true,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle:{
        alignItems:'center',
        paddingLeft:16,
    }
}))`
    height:110px;
`;

export const Option = styled.TouchableOpacity`
    width:80px;
    margin-top:5px;
    margin-right:16px;
    align-items:center;
    height:100px;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
    color:#fff;
    font-weight:bold;
    margin-top:5px;
    font-size:11px;
    text-align:center;
    width:60px;
`;
