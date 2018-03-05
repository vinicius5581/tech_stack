import React, { Component } from 'react';
import { Text } from 'react-native';
import CardSection from './CardSection';

class ListItem extends Component {
  render() {
    const { library } = this.props;
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text className={titleStyle}>{library.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
}


export default ListItem;
