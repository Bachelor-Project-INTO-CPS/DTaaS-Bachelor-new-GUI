import { graphql } from 'relay-runtime';

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

export default getFilesQuery;
