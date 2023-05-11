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

const useAssets = (dirPath: string) => {
  const data = useLazyLoadQuery<apiUtilDirectoryListQuery>(getFilesQuery, {
    path: dirPath,
  });

  const nodes = data.project?.repository?.paginatedTree?.nodes ?? [];
  if (nodes.length === 0) {
    return [];
  }

  return nodes.flatMap((node) =>
    [
      ...(node?.blobs?.nodes ?? []).filter(
        (file): file is { name: string; path: string } => file != null
      ),
      ...(node?.trees?.nodes ?? []).filter(
        (dir): dir is { name: string; path: string } => dir != null
      ),
    ].map(({ name, path, ...rest }) => ({
      name,
      path,
      isDir: Object.prototype.hasOwnProperty.call(rest, 'tree'),
    }))
  );
};

export default useAssets;
