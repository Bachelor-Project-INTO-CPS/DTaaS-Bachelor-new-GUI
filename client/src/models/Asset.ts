export interface Asset {
  name: string;
  description?: string;
  path: string;
  isDir: boolean;
}

export function isEqual(a1: Asset, a2: Asset){
  return a1.path === a2.path;
}