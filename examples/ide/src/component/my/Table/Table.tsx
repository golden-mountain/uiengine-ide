import React from "react";
import _ from "lodash";
import THeader from "./THeader";
import TBody from "./TBody";
import TFooter from "./TFooter";
import "./index.less";

const Table = (props: any) => {
  let { children, ...rest } = props;
  // console.log(_.get(props, "uinode.schema.$children.0.props.title"));
  return (
    <div className="ant-table-wrapper">
      <div className="ant-spin-nested-loading">
        <div className="ant-spin-container">
          <div className="ant-table ant-table-default ant-table-scroll-position-left">
            <div className="ant-table-content">
              <div className="ant-table-body">
                <table className="my-table">
                  <THeader columns={_.get(props, "uinode.schema.$children")} />
                  <TBody>{children}</TBody>
                  <TFooter></TFooter>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
