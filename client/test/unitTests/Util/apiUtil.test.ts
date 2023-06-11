import { renderHook } from '@testing-library/react';
import useAssets from 'util/apiUtil';
import { Asset } from 'models/Asset';
import {
  generateMockGraphQLtreeWithAssets,
  wrapWithInitialState,
} from '../testUtils';
import { mockAssets, testPath } from '../__mocks__/util_mocks';

jest.unmock('util/apiUtil');
jest.mock('util/queries/gitLab', () => ({
  __esModule: true,
  default: 'query',
}));

const mock3Assets: Asset[] = mockAssets;

const initUser = wrapWithInitialState({
  auth: {
    userName: 'user1',
  },
});

let fakeAssets: Asset[] = [];

jest.mock('react-relay', () => ({
  __esModule: true,
  useLazyLoadQuery: () => generateMockGraphQLtreeWithAssets(fakeAssets),
}));

describe('useAssets', () => {
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

  it('handles multiple assets returned from server', () => {
    fakeAssets = mock3Assets;
    renderHook(
      () => {
        const assets = useAssets(testPath);
        expect(assets.length).toBe(mock3Assets.length);
        assets.forEach((asset, index) => {
          expect(asset.name).toBe(mock3Assets[index].name);
          expect(asset.path).toBe(mock3Assets[index].path);
        });
      },
      { wrapper: initUser }
    );
  });

  it('handles only 1 asset returned from server', () => {
    mock3Assets.forEach((asset) => {
      fakeAssets = [asset];
      renderHook(
        () => {
          const assets = useAssets(testPath);
          expect(assets.length).toBe(1);
          expect(assets[0].name).toBe(asset.name);
          expect(assets[0].path).toBe(asset.path);
        },
        { wrapper: initUser }
      );
    });
  });

  it('displays correct descriptions', () => {
    const path = '/tools';
    fakeAssets = [
      {
        name: 'test1',
        path: `${path}/test1`,
        description: 'test1 description',
      },
      {
        name: 'test2',
        path: `${path}/test2`,
        description: 'test2 description',
      },
      {
        name: 'test3',
        path: `${path}/test3`,
      },
    ];
    renderHook(
      () => {
        const assets = useAssets(path);
        expect(assets.length).toBe(fakeAssets.length);
        expect(assets[0].description).toBe('test1 description');
        expect(assets[1].description).toBe('test2 description');
        expect(assets[2].description).toBe(undefined);
      },
      { wrapper: initUser }
    );
  });

  // Add more tests here to determin path and username has been set correctly
});
