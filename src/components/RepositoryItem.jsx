import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText'

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container} >
    <StyledText bold>{props.id}</StyledText>
    <StyledText>{props.fullName}</StyledText>
    <StyledText blue>{props.description}</StyledText>
    <StyledText>{props.language}</StyledText>
    <StyledText small>{props.stargazersCount}</StyledText>
    <StyledText small>{props.forksCount}</StyledText>
    <StyledText small>{props.reviewCount}</StyledText>
    <StyledText small>{props.ratingAverage}</StyledText>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 20, 
    paddingBottom: 5,
    paddingTop: 5,
  },
})

export default RepositoryItem;