import * as React from 'react';
import Library from 'route/library/Library';
import tabs from 'route/library/LibraryTabData';
import { InitRouteTests, itDisplaysContentOfTabs } from '../testUtils';

describe('Library with no props', () => {
  InitRouteTests(<Library />);

  itDisplaysContentOfTabs(tabs);
});
