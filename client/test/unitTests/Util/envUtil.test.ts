import {
  useURLforDT,
  useURLforLIB,
  useWorkbenchLinkValues,
  cleanURL,
  getURLbasename,
} from 'util/envUtil';
import { renderHook } from '@testing-library/react';
import { wrapWithInitialState } from '../testUtils';

jest.unmock('util/envUtil');

describe('envUtil', () => {
  const testDT = 'testDT';
  const testLIB = '';
  const testAppURL = 'https://example.com';
  const testBasename = 'testBasename';
  const testWorkbenchEndpoints = [
    'one',
    '/two',
    'three/',
    '/four/',
    '/five/guy/',
  ];
  const testUsername = 'username';

  window.env = {
    REACT_APP_ENVIRONMENT: 'test',
    REACT_APP_URL: testAppURL,
    REACT_APP_URL_BASENAME: testBasename,
    REACT_APP_URL_DTLINK: testDT,
    REACT_APP_URL_LIBLINK: testLIB,
    REACT_APP_WORKBENCHLINK_TERMINAL: testWorkbenchEndpoints[0],
    REACT_APP_WORKBENCHLINK_VNCDESKTOP: testWorkbenchEndpoints[1],
    REACT_APP_WORKBENCHLINK_VSCODE: testWorkbenchEndpoints[2],
    REACT_APP_WORKBENCHLINK_JUPYTERLAB: testWorkbenchEndpoints[3],
    REACT_APP_WORKBENCHLINK_JUPYTERNOTEBOOK: testWorkbenchEndpoints[4],
  };

  const renderWithUsername = wrapWithInitialState({
    auth: {
      userName: testUsername,
    },
  });

  test('useURL should return the correct enviroment variables', () => {
    renderHook(
      () => {
        expect(useURLforDT()).toBe(
          `${testAppURL}/${testBasename}/${testUsername}/${testDT}`
        );
        expect(useURLforLIB()).toBe(
          `${testAppURL}/${testBasename}/${testUsername}/${testLIB}`
        );
        expect(getURLbasename()).toBe(testBasename);
      },
      { wrapper: renderWithUsername }
    );
  });

  test('useWorkbenchLinkValues should return an array', () => {
    renderHook(
      () => expect(Array.isArray(useWorkbenchLinkValues())).toBe(true),
      {
        wrapper: renderWithUsername,
      }
    );
  });

  // Test that array elements have the expected shape
  test('useWorkbenchLinkValues should return an array of objects with "key" and "link" properties', () => {
    renderHook(
      () =>
        expect(
          useWorkbenchLinkValues().every(
            (el) => typeof el.key === 'string' && typeof el.link === 'string'
          )
        ).toBe(true),
      { wrapper: renderWithUsername }
    );
  });

  // Test that the links are correctly constructed
  test('should construct the links correctly', () => {
    renderHook(
      () =>
        useWorkbenchLinkValues().forEach((el, i) => {
          expect(el.link).toEqual(
            `${testAppURL}/${testBasename}/${testUsername}/${cleanURL(
              testWorkbenchEndpoints[i]
            )}`
          );
        }),
      { wrapper: renderWithUsername }
    );
  });

  test('cleanURL should remove leading and trailing slashes', () => {
    expect(cleanURL('/test/')).toBe('test');
    expect(cleanURL('/test')).toBe('test');
    expect(cleanURL('test/')).toBe('test');
    expect(cleanURL('test')).toBe('test');
  });

  test('still handles if basename is set to empty string', () => {
    window.env.REACT_APP_URL_BASENAME = '';
    renderHook(
      () => {
        expect(useURLforDT()).toBe(`${testAppURL}/${testUsername}/${testDT}`);
        expect(useURLforLIB()).toBe(`${testAppURL}/${testUsername}/${testLIB}`);
        expect(getURLbasename()).toBe('');
      },
      { wrapper: renderWithUsername }
    );
  });
});
