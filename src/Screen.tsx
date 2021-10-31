/**
 * @file Test screen.
 */

import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';

export type Screen1Props = { text: string };

const Screen1 = ({ text }: Screen1Props): ReactElement => (
  <View>
    <Text>
      {text}
    </Text>
  </View>
);

export default Screen1;
