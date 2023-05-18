import graphql from 'babel-plugin-relay/macro';

export const getDirectoriesQuery = graphql`
  query gitLabDirectoryListQuery($path: String!, $groupAndProject: ID!) {
    project(fullPath: $groupAndProject) {
      repository {
        paginatedTree(path: $path, recursive: false) {
          nodes {
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

export const getReadmesQuery = graphql`
  query gitLabReadmeQuery($paths: [String!]!, $groupAndProject: ID!) {
    project(fullPath: $groupAndProject) {
      repository {
        blobs(paths: $paths) {
          nodes {
            rawTextBlob
            name
            path
            fileType
          }
        }
      }
    }
  }
`;
