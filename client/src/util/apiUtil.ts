import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { apiUtilDirectoryListQuery } from 'util/__generated__/apiUtilDirectoryListQuery.graphql';

interface Asset {
  name: string;
  path: string;
  isDir: boolean;
}

const getFilesQuery = graphql`
  query apiUtilDirectoryListQuery($path: String!) {
    project(fullPath: "gitlab-org/gitlab-foss") {
      webUrl
      path
      repository {
        paginatedTree(path: $path, recursive: false) {
          nodes {
            blobs {
              nodes {
                name
                path
              }
            }
            trees {
              nodes {
                name
                path
              }
            }
          }
        }
      }
    }
  }
`;

interface Asset {
  name: string;
  path: string;
  isDir: boolean;
}

const mapToAssets = (
  arr: { name: string; path: string }[],
  isDir: boolean
): Asset[] =>
  arr
    .filter((node): node is { name: string; path: string } => node != null)
    .map(({ name, path }) => ({
      name,
      path,
      isDir,
    })) as Asset[];

const useAssets = (dirPath: string): Asset[] => {
  const data = useLazyLoadQuery<apiUtilDirectoryListQuery>(getFilesQuery, {
    path: dirPath,
  });

  const nodes = data.project?.repository?.paginatedTree?.nodes ?? [];
  if (nodes.length === 0) {
    return [];
  }

  type entry = {
    name: string;
    path: string;
  };

  return [
    ...mapToAssets(
      nodes.flatMap((node) => node?.blobs?.nodes ?? []) as entry[],
      false
    ),
    ...mapToAssets(
      nodes.flatMap((node) => node?.trees?.nodes ?? []) as entry[],
      true
    ),
  ];
};

export default useAssets;
