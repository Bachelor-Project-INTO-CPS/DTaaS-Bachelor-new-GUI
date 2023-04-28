export function getURLforDT(): string {
  return window.env.REACT_APP_URL_DT;
}

export function getURLforLIB(): string {
  return window.env.REACT_APP_URL_LIB;
}

export interface IWorkbenchLink {
  key: string;
  link: string;
}

export function getWorkbenchLinkValues(): IWorkbenchLink[] {
  const prefix = 'REACT_APP_WORKBENCHLINK_';
  const workbenchLinkValues: IWorkbenchLink[] = [];

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
