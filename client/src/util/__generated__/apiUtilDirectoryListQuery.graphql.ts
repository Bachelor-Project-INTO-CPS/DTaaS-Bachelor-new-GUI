/**
 * @generated SignedSource<<bca372aea120b5f41e5a9844a2d9a68d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type apiUtilDirectoryListQuery$variables = {
  path: string;
};
export type apiUtilDirectoryListQuery$data = {
  readonly project: {
    readonly path: string;
    readonly repository: {
      readonly paginatedTree: {
        readonly nodes: ReadonlyArray<{
          readonly blobs: {
            readonly nodes: ReadonlyArray<{
              readonly name: string;
              readonly path: string;
            } | null> | null;
          };
          readonly trees: {
            readonly nodes: ReadonlyArray<{
              readonly name: string;
              readonly path: string;
            } | null> | null;
          } | null;
        } | null> | null;
      } | null;
    } | null;
    readonly webUrl: string | null;
  } | null;
};
export type apiUtilDirectoryListQuery = {
  response: apiUtilDirectoryListQuery$data;
  variables: apiUtilDirectoryListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "path"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "path",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  (v1/*: any*/)
],
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "fullPath",
        "value": "gitlab-org/gitlab-foss"
      }
    ],
    "concreteType": "Project",
    "kind": "LinkedField",
    "name": "project",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "webUrl",
        "storageKey": null
      },
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "path",
                "variableName": "path"
              },
              {
                "kind": "Literal",
                "name": "recursive",
                "value": false
              }
            ],
            "concreteType": "TreeConnection",
            "kind": "LinkedField",
            "name": "paginatedTree",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Tree",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "BlobConnection",
                    "kind": "LinkedField",
                    "name": "blobs",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Blob",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": (v2/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TreeEntryConnection",
                    "kind": "LinkedField",
                    "name": "trees",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TreeEntry",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": (v2/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "project(fullPath:\"gitlab-org/gitlab-foss\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "apiUtilDirectoryListQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "apiUtilDirectoryListQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "ca0db0f07455f5da27f40d05dc97c48d",
    "id": null,
    "metadata": {},
    "name": "apiUtilDirectoryListQuery",
    "operationKind": "query",
    "text": "query apiUtilDirectoryListQuery(\n  $path: String!\n) {\n  project(fullPath: \"gitlab-org/gitlab-foss\") {\n    webUrl\n    path\n    repository {\n      paginatedTree(path: $path, recursive: false) {\n        nodes {\n          blobs {\n            nodes {\n              name\n              path\n            }\n          }\n          trees {\n            nodes {\n              name\n              path\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6bbd2fed8122c3b1533404a573f2e73e";

export default node;
