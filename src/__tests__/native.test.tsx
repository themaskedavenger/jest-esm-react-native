import React from 'react';
import { render } from '@testing-library/react-native';

import Screen1 from '../Screen';

describe('ESM issue', () => {
  test('Screen1', async () => {
    const { queryByText } = render(<Screen1 text="Hello World!" />);
    expect(queryByText('Hello World!')).not.toBeNull();
  });
});
