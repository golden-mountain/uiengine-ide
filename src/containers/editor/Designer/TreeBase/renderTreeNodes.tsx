import React from "react";
import _ from "lodash";
import { Title } from "./Title";

import { Tree } from "antd";
const { TreeNode } = Tree;

const intialItems = (node: IResourceTreeNode, parent: IResourceTreeNode) => {
  node._parent_ = parent;
  node._path_ =
    _.has(parent, "_path_") && parent.nodeType !== "root"
      ? `${parent._path_}/${node.name}`
      : node.name;
  node._key_ = node._key_ || node._path_;
};

export const renderTreeNodes = (
  treeNodes: Array<IResourceTreeNode>,
  props: any,
  parent: any = null
) => {
  return treeNodes
    ? treeNodes.map((item: any) => {
        const title = item.title || item.name;
        // to improve performance, this is not about Nodes itself
        intialItems(item, parent);

        if (item.children) {
          return (
            <TreeNode
              title={
                <Title dataRef={item} {...props}>
                  {title}
                </Title>
              }
              key={item._key_}
              dataRef={item}
            >
              {renderTreeNodes(item.children, props, item)}
              {/* <Nodes treeNodes={item.children} parent={item} {...props} /> */}
            </TreeNode>
          );
        }
        return (
          <TreeNode
            title={
              <Title dataRef={item} {...props}>
                {title}
              </Title>
            }
            key={item._key_}
            dataRef={item}
          />
        );
      })
    : null;
};