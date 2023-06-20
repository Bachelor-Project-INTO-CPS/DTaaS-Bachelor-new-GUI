/**
 * @generated SignedSource<<e8595738a44a2f8349370a8ef4c319ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type gitLabDirectoryListQuery$variables = {
  groupAndProject: string;
  path: string;
};
export type gitLabDirectoryListQuery$data = {
  readonly project: {
    readonly repository: {
      readonly paginatedTree: {
        readonly nodes: ReadonlyArray<{
          readonly trees: {
            readonly nodes: ReadonlyArray<{
              readonly name: string;
              readonly path: string;
            } | null> | null;
          };
        } | null> | null;
      };
    } | null;
  } | null;
};
export type gitLabDirectoryListQuery = {
  response: gitLabDirectoryListQuery$data;
  variables: gitLabDirectoryListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "groupAndProject"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "path"
},
v2 = [
  {
    "kind": "Variable",
    "name": "fullPath",
    "variableName": "groupAndProject"
  }
],
v3 = [
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "path",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "gitLabDirectoryListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "project",
        "plural": false,
        "selections": [
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
                "args": (v3/*: any*/),
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
                            "selections": [
                              (v4/*: any*/),
                              (v5/*: any*/)
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "gitLabDirectoryListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Project",
        "kind": "LinkedField",
        "name": "project",
        "plural": false,
        "selections": [
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
                "args": (v3/*: any*/),
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
                            "selections": [
                              (v4/*: any*/),
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "id",
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "273b083d22aa66c76b1a24f4b6f6c337",
    "id": null,
    "metadata": {},
    "name": "gitLabDirectoryListQuery",
    "operationKind": "query",
    "text": "query gitLabDirectoryListQuery(\n  $path: String!\n  $groupAndProject: ID!\n) {\n  project(fullPath: $groupAndProject) {\n    repository {\n      paginatedTree(path: $path, recursive: false) {\n        nodes {\n          trees {\n            nodes {\n              name\n              path\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b6aa5ac24780fe94f572eac3ef741fe9";

export default node;
