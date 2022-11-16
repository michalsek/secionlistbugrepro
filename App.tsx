import 'react-native-reanimated';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  SectionListRenderItemInfo,
} from 'react-native';
import { times } from 'lodash';

const data: Array<{ key: string }> = times(25).map((key: number) => ({
  key: `${key}`,
}));

data.unshift({
  key: global.HermesInternal ? 'Hermes On' : 'Hermes Off',
});

function renderItem({ item }: SectionListRenderItemInfo<{ key: string }>) {
  return (
    <View style={styles.item}>
      <Text>{item.key}</Text>
    </View>
  );
}

const App = () => {
  return <SectionList sections={[{ data }]} renderItem={renderItem} inverted />;
};

export default App;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#abcdef',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
