import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { apiUtilDirectoryListQuery } from 'util/__generated__/apiUtilDirectoryListQuery.graphql';

interface Asset {
  name: string | null | undefined;
  path: string | null | undefined;
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
              edges {
                node {
                  name
                  path
                }
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

const useAssets = (path: string) => {
  const data = useLazyLoadQuery<apiUtilDirectoryListQuery>(getFilesQuery, {
    path,
  });
  if (data === null) {
    return null;
  }

  const assets: Asset[] = [];
  data.project?.repository?.paginatedTree?.nodes?.forEach((node) => {
    node?.blobs?.edges?.forEach((edge) => {
      assets.push({
        name: edge?.node?.name,
        path: edge?.node?.path,
        isDir: false,
      });
    });
    node?.trees?.nodes?.forEach((tree) => {
      assets.push({
        name: tree?.name,
        path: tree?.path,
        isDir: true,
      });
    });
  });
  return assets;
};

export default useAssets;
