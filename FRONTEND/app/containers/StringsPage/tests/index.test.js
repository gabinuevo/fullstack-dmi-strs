import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import StringsPage from '../index';

describe('<StringsPage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <StringsPage />
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
