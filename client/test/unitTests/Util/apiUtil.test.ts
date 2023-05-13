import { renderHook } from '@testing-library/react';
import useAssets from 'util/apiUtil';
import { wrapWithInitialState } from '../testUtils';

jest.unmock('util/apiUtil');
jest.mock('util/gitLabQueries', () => ({
  __esModule: true,
  default: 'query',
}));

jest.mock('react-relay', () => ({
  __esModule: true,
  useLazyLoadQuery: () => ({
    project: {
      repository: {
        paginatedTree: {
          nodes: [
            {
              blobs: {
                nodes: [
                  {
                    name: 'asset1.txt',
                    path: '/path/to/asset1',
                  },
                ],
              },
            },
            {
              trees: {
                nodes: [
                  {
                    name: 'directory1',
                    path: '/path/to/directory1',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  }),
}));

it('returns assets for given directory path', async () => {
  const initUser = wrapWithInitialState({
    auth: {
      userName: 'user1',
    },
  });
  renderHook(
    () => {
      const assets = useAssets('/path');
      expect(assets.length).toBe(2);
    },
    { wrapper: initUser }
  );
});
