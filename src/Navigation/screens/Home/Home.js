import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import styled, {css} from 'styled-components/native';

const LookAndCreate = ['조회하기', '생성하기'];
const DeleteAndRetouch = ['삭제하기', '수정하기'];

const whiteText = css`
  color: black;
`;

const Center = css`
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

const MainContentsContainer = styled.View`
  height: 30%;
  flex-direction: row;
`;

const MainContents = styled.TouchableOpacity`
  flex: 1;
  border: 0.2px solid black;
`;

const TextContainer = styled.View`
  flex: 1;
  ${Center}
`;

const Header = styled.View`
  width: 100%;
  height: 7%;
  background-color: yellowgreen;
  ${Center}
`;

const HeaderText = styled.Text`
  ${whiteText}
`;

const ContentsText = styled.Text(HeaderText);

const Home = ({navigation}) => {
  return (
    <Container>
      <Header>
        <HeaderText>Header</HeaderText>
      </Header>
      <MainContentsContainer>
        {LookAndCreate.map(content => {
          return (
            <MainContents
              onPress={() => {
                Navigation.navigate('Lookup');
              }}>
              <TextContainer>
                <ContentsText>{content}</ContentsText>
              </TextContainer>
            </MainContents>
          );
        })}
      </MainContentsContainer>
      <MainContentsContainer>
        {DeleteAndRetouch.map(content => {
          return (
            <MainContents>
              <TextContainer>
                <ContentsText>{content}</ContentsText>
              </TextContainer>
            </MainContents>
          );
        })}
      </MainContentsContainer>
    </Container>
  );
};

export default Home;
