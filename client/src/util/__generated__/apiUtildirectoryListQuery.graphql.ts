/**
 * @generated SignedSource<<1ed7a33998dc194009274528589f6aad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type apiUtildirectoryListQuery$variables = {
  path: string;
};
export type apiUtildirectoryListQuery$data = {
  readonly project: {
    readonly path: string | null;
    readonly repository: {
      readonly paginatedTree: {
        readonly nodes: ReadonlyArray<{
          readonly blobs: {
            readonly edges: ReadonlyArray<{
              readonly node: {
                readonly name: string | null;
                readonly path: string | null;
              } | null;
            } | null> | null;
          } | null;
          readonly trees: {
            readonly nodes: ReadonlyArray<{
              readonly name: string | null;
              readonly path: string | null;
            } | null> | null;
          } | null;
        } | null> | null;
      } | null;
    } | null;
    readonly webUrl: string | null;
  } | null;
};
export type apiUtildirectoryListQuery = {
  response: apiUtildirectoryListQuery$data;
  variables: apiUtildirectoryListQuery$variables;
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
                        "concreteType": "BlobEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Blob",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": (v2/*: any*/),
                            "storageKey": null
                          }
                        ],
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
    "name": "apiUtildirectoryListQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "apiUtildirectoryListQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "96ba8b00b5dff8b787e5303b3cc327e4",
    "id": null,
    "metadata": {},
    "name": "apiUtildirectoryListQuery",
    "operationKind": "query",
    "text": "query apiUtildirectoryListQuery(\n  $path: String!\n) {\n  project(fullPath: \"gitlab-org/gitlab-foss\") {\n    webUrl\n    path\n    repository {\n      paginatedTree(path: $path, recursive: false) {\n        nodes {\n          blobs {\n            edges {\n              node {\n                name\n                path\n              }\n            }\n          }\n          trees {\n            nodes {\n              name\n              path\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "82350c2cd5ad599efd25b76c08bea96e";

export default node;
