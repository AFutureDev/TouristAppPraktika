import React from 'react';
import { View, Text, FlatList, useWindowDimensions } from 'react-native';
import PartyCarouselItem from '../PartyCarouselItem';

const Party = (props) => {
  const party = props.party;
  const width = useWindowDimensions().width;
  return (
    <View>
      <FlatList
        data={party}
        renderItem={({ item }) => <PartyCarouselItem party={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 180}
        snapToAlignment="center"
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Party;
