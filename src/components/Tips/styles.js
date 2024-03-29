import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs( ()=>({
    horizontal:true,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle:{
        paddingLeft:16,
    },
}))`
    margin-top:25px;
`;

export const Option = styled.TouchableOpacity`
    background: ${({bgColor}) => bgColor};
    width:120px;
    height:180px;
    border-radius:8px;
    padding: 18px;
    justify-content:space-between;
    margin-right:16px;
    padding-bottom:25px;
`;
export const Title = styled.Text`
    color:#fff;
    font-size:12px;
    font-weight:500;
`;
export const Img = styled.Image`
    align-self:center;
    
`;