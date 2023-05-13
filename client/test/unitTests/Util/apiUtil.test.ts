import { renderHook } from '@testing-library/react';
import useAssets from 'util/apiUtil';
import { Asset } from 'models/Asset';
import {
  generateMockGraphQLtreeWithAssets,
  wrapWithInitialState,
} from '../testUtils';

jest.unmock('util/apiUtil');
jest.mock('util/gitLabQueries', () => ({
  __esModule: true,
  default: 'query',
}));

const mockAssets: Asset[] = [
  {
    name: 'file1',
    path: '/path/file1',
    isDir: false,
  },
  {
    name: 'file2',
    path: '/path/file2',
    isDir: false,
  },
  {
    name: 'dir1',
    path: '/path/dir1',
    isDir: true,
  },
];

jest.mock('react-relay', () => ({
  __esModule: true,
  useLazyLoadQuery: () => generateMockGraphQLtreeWithAssets(mockAssets),
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
      expect(assets.length).toBe(mockAssets.length);
    },
    { wrapper: initUser }
  );
});
