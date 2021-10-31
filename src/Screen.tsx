/**
 * @file Test screen.
 */

import React, { ReactElement } from 'react';
import Text from 'react-native/Libraries/Text/Text';
import View from 'react-native/Libraries/Components/View/View';

export type Screen1Props = { text: string };

const Screen1 = ({ text }: Screen1Props): ReactElement => (
  <View>
    <Text>
      {text}
    </Text>
  </View>
);

export default Screen1;
