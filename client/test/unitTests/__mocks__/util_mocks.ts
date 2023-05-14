export const mockURLforDT = 'https://example.com/URL_DT';
export const mockURLforLIB = 'https://example.com/URL_LIB';

jest.mock('util/envUtil', () => ({
  useURLforDT: () => mockURLforDT,
  useURLforLIB: () => mockURLforLIB,
  useWorkbenchLinkValues: () => [
    { key: '1', link: 'link1' },
    { key: '2', link: 'link2' },
    { key: '3', link: 'link3' },
  ],
}));
