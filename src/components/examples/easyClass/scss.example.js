import * as _ from 'lodash';
import React from 'react';
import { BasicCard, CardHeader, CardBody } from '../../card/card';

import { Direction } from '../../config/class.config';

import './class.example.scss';

export const ScssClass = (props) => {
  return (
    <div className="container scss-example">
      <div className="block-header sticky">
        <h2> Scss Definition
          <small>Scss settings for global</small>
        </h2>
      </div>
      <BasicCard transparent={true}>
        <CardHeader
          color="navigation"
          style="p-10"
          title="Direction"
          subtitle="Global direction values for LTR and RTL."
        />
        <CardBody style='p-5'>
          <ol>
            <li className="grid">
              <div className="desc split-2-auto">
                <code className="p-r-20 w-200">{`${Direction.scss.left}:`}</code>
                <code>{`left`}</code>
              </div>
              <div className="desc split-2-auto">
                <code className="p-r-20 w-200">{`${Direction.scss.right}:`}</code>
                <code>{`right`}</code>
              </div>
            </li>
            <li className="grid">
              <div className="desc"><mark>Example to use:</mark></div>
              <div className="desc split-2-auto">
                <code className="p-r-20 w-260">{`margin-#{${Direction.scss.left}}: 5px;`}</code>
                <code>{`// margin-left: 5px;`}</code>
              </div>
              <div className="desc split-2-auto">
                <code className="p-r-20 w-260">{`margin-#{${Direction.scss.right}}: 5px;`}</code>
                <code>{`// margin-right: 5px;`}</code>
              </div>
              <div className="desc split-2-auto">
                <code className="p-r-20 w-260">{`padding-#{${Direction.scss.left}}: 5px;`}</code>
                <code>{`// padding-left: 5px;`}</code>
              </div>
              <div className="desc split-2-auto">
                <code className="p-r-20 w-260">{`padding-#{${Direction.scss.right}}: 5px;`}</code>
                <code>{`// padding-right: 5px;`}</code>
              </div>
              <div className="desc split-2-auto">
                <code className="p-r-20 w-260">{`text-align: #{${Direction.scss.left}};`}</code>
                <code>{`// text-align: left;`}</code>
              </div>
              <div className="desc split-2-auto">
                <code className="p-r-20 w-260">{`text-align: #{${Direction.scss.right}};`}</code>
                <code>{`// text-align: right;`}</code>
              </div>
              <div className="desc split-2-auto">
                <code className="p-r-20 w-260">{`#{${Direction.scss.left}}: 5px;`}</code>
                <code>{`// left: 5px;`}</code>
              </div>
              <div className="desc split-2-auto">
                <code className="p-r-20 w-260">{`#{${Direction.scss.right}}: 5px;`}</code>
                <code>{`// right: 5px;`}</code>
              </div>
              <div className="desc split-2-auto">
                <code className="p-r-20 w-260">{`float: #{${Direction.scss.left}};`}</code>
                <code>{`// float: left;`}</code>
              </div>
              <div className="desc split-2-auto">
                <code className="p-r-20 w-260">{`float: #{${Direction.scss.right}};`}</code>
                <code>{`// float: right;`}</code>
              </div>
            </li>
          </ol>
        </CardBody>
      </BasicCard>

      <BasicCard transparent={true}>
        <CardHeader
          color="navigation"
          style="p-10"
          title="Direction"
          subtitle="Global direction values for LTR and RTL."
        />
      </BasicCard>
    </div>
  );
}
