import graphql from 'babel-plugin-relay/macro';
import { useSelector } from 'react-redux';
import { useLazyLoadQuery } from 'react-relay';
import { RootState } from 'store/store';
import { apiUtilDirectoryListQuery } from 'util/__generated__/apiUtilDirectoryListQuery.graphql';
import { getGitlabGroup } from 'util/envUtil';

interface Asset {
  name: string;
  path: string;
  isDir: boolean;
}

const getFilesQuery = graphql`
  query apiUtilDirectoryListQuery($path: String!, $groupAndProject: ID!) {
    project(fullPath: $groupAndProject) {
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

/**
 * Retrives a list of assets from the given directory path in a GitLab repository.
 * Uses ENV variables to deterimine the group and graphQL endpoint for requests.
 * The project must be the same as the username used for logging in.
 * @param dirPath relative path to the directory in the repository
 * @returns An array of `Asset` objects
 */
const useAssets = (dirPath: string): Asset[] => {
  const group = getGitlabGroup();
  const project = useSelector((state: RootState) => state.auth).userName;

  const data = useLazyLoadQuery<apiUtilDirectoryListQuery>(getFilesQuery, {
    path: dirPath,
    groupAndProject: `${group}/${project}`,
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
