export function getURLforDT(): string {
  return window.env.REACT_APP_URL_DT;
}

export function getURLforLIB(): string {
  return window.env.REACT_APP_URL_LIB;
}

export function getWorkbenchLinkValues(): { key: string; link: string }[] {
  const prefix = 'REACT_APP_WORKBENCHLINK_';
  const workbenchLinkValues: { key: string; link: string }[] = [];

  Object.keys(window.env)
    .filter((key) => key.startsWith(prefix))
    .forEach((key) => {
      const value = window.env[key];
      if (value !== undefined) {
        const keyWithoutPrefix = key.slice(prefix.length);
        workbenchLinkValues.push({ key: keyWithoutPrefix, link: value });
      }
    });

  return workbenchLinkValues;
}
