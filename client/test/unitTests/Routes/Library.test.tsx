import * as React from 'react';
import Library from 'route/library/Library';
import tabs from 'route/library/LibraryTabData';
import { mockURLforLIB } from '../__mocks__/util_mocks';
import {
  InitRouteTests,
  itDisplaysContentOfTabs,
  itHasCorrectURLOfTabsWithIframe,
  TabLabelURLPair,
} from '../testUtils';

const urlsByTabs: TabLabelURLPair[] = tabs.map((tab) => ({
  label: tab.label,
  url: mockURLforLIB,
}));

describe('Library with no props', () => {
  InitRouteTests(<Library />);

  itDisplaysContentOfTabs(tabs);

  itHasCorrectURLOfTabsWithIframe(
    urlsByTabs.filter((pair) => pair.label !== 'Functions')
  );
});
