import { renderHook } from '@testing-library/react';
import useAssets from 'util/apiUtil';
import { Asset } from 'models/Asset';
import {
  generateMockGraphQLtreeWithAssets,
  wrapWithInitialState,
} from '../testUtils';

jest.unmock('util/apiUtil');
jest.mock('util/queries/gitLabQueries', () => ({
  __esModule: true,
  default: 'query',
}));

const testPath = '/path';

const mock3Assets: Asset[] = [
  {
    name: 'file1',
    path: `${testPath}/file1`,
    isDir: false,
  },
  {
    name: 'file2',
    path: `${testPath}/file2`,
    isDir: false,
  },
  {
    name: 'dir1',
    path: `${testPath}/dir1`,
    isDir: true,
  },
];

const initUser = wrapWithInitialState({
  auth: {
    userName: 'user1',
  },
});

let fakeAssets: Asset[] = [];

jest.mock('react-relay', () => ({
  __esModule: true,
  useLazyLoadQuery: () =>
    fakeAssets.length !== 0
      ? generateMockGraphQLtreeWithAssets(fakeAssets)
      : [],
}));

it('returns assets for given directory path', async () => {
  fakeAssets = mock3Assets;
  renderHook(
    () => {
      const assets = useAssets(testPath);
      expect(assets.length).toBe(mock3Assets.length);
    },
    { wrapper: initUser }
  );
});

it('returns empty array if no assets found', async () => {
  fakeAssets = [];
  renderHook(
    () => {
      const assets = useAssets(testPath);
      expect(assets.length).toBe(0);
    },
    { wrapper: initUser }
  );
});

it('detects directories', async () => {
  fakeAssets = mock3Assets;
  renderHook(
    () => {
      const assets = useAssets(testPath);
      expect(assets[2].isDir).toBe(true);
    },
    { wrapper: initUser }
  );
});

it('detects files', async () => {
  fakeAssets = mock3Assets;
  renderHook(
    () => {
      const assets = useAssets(testPath);
      expect(assets[0].isDir).toBe(false); // Not the most robust test, but it works
    },
    { wrapper: initUser }
  );
});

it('handles only 1 file', () => {
  fakeAssets = [mock3Assets[0]];
  renderHook(
    () => {
      const assets = useAssets(testPath);
      expect(assets.length).toBe(1);
    },
    { wrapper: initUser }
  );
});

it('handles only 1 directory', () => {
  fakeAssets = [mock3Assets[2]];
  renderHook(
    () => {
      const assets = useAssets(testPath);
      expect(assets.length).toBe(1);
    },
    { wrapper: initUser }
  );
});

// Add more tests here to determin path and username has been set correctly
