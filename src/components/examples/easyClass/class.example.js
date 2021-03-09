import * as _ from 'lodash';
import React from 'react';
import { BasicCard, CardHeader, CardBody } from '../../card/card';
import { AccordionGroup, Accordion } from '../../accordion/accordion';

import './class.example.scss';

export const ClassExample = (props) => {

  return (
    <div className="container layout-example">
      <div className="block-header sticky">
        <h2> Class definition for layout
          <small>Find all reference in _layout.scss</small>
        </h2>
      </div>
      <AccordionGroup>
        <Accordion title="Grid Layout - 2 Columns" active={true}>
          <BasicCard transparent={true}>
            <CardBody style='p-5'>
              <p><mark>Default size</mark></p>
              <div className="grid split-2 use-content" content={`class="grid split-2"`}>
                <div className="demo text-center">50%</div>
                <div className="demo text-center">50%</div>
              </div>
              <p><mark>Specified size</mark></p>
              <div className="grid split-2 size-1of3 use-content" content={`class="grid split-2 size-1of3"`}>
                <div className="demo text-center">34%</div>
                <div className="demo text-center">66%</div>
              </div>
              <div className="grid split-2 size-2of3 use-content" content={`class="grid split-2 size-2of3"`}>
                <div className="demo text-center">66%</div>
                <div className="demo text-center">34%</div>
              </div>
              <div className="grid split-2 size-1of4 use-content" content={`class="grid split-2 size-1of4"`}>
                <div className="demo text-center">25%</div>
                <div className="demo text-center">75%</div>
              </div>
              <div className="grid split-2 size-3of4 use-content" content={`class="grid split-2 size-3of4"`}>
                <div className="demo text-center">75%</div>
                <div className="demo text-center">25%</div>
              </div>
            </CardBody>
          </BasicCard>
        </Accordion>

        <Accordion title="Grid Layout - 3 Columns">
          <BasicCard transparent={true}>
            <CardBody style='p-5'>
              <p><mark>Default size</mark></p>
              <div className="grid split-3 use-content" content={`class="grid split-3"`}>
                <div className="demo text-center">33%</div>
                <div className="demo text-center">33%</div>
                <div className="demo text-center">33%</div>
              </div>
              <p><mark>Specified size</mark></p>
              <div className="grid split-3 size-1of2 use-content" content={`class="grid split-3 size-1of2"`}>
                <div className="demo text-center">50%</div>
                <div className="demo text-center">25%</div>
                <div className="demo text-center">25%</div>
              </div>
              <div className="grid split-3 size-1of2-center use-content" content={`class="grid split-3 size-1of2-center"`}>
                <div className="demo text-center">25%</div>
                <div className="demo text-center">50%</div>
                <div className="demo text-center">25%</div>
              </div>
              <div className="grid split-3 size-1of2-last use-content" content={`class="grid split-3 size-1of2-last"`}>
                <div className="demo text-center">25%</div>
                <div className="demo text-center">25%</div>
                <div className="demo text-center">50%</div>
              </div>
              <div className="grid split-3 size-3-2-1 use-content" content={`class="grid split-3 size-3-2-1"`}>
                <div className="demo text-center">50%</div>
                <div className="demo text-center">34%</div>
                <div className="demo text-center">16%</div>
              </div>
              <div className="grid split-3 size-3-1-2 use-content" content={`class="grid split-3 size-3-1-2"`}>
                <div className="demo text-center">50%</div>
                <div className="demo text-center">16%</div>
                <div className="demo text-center">34%</div>
              </div>
            </CardBody>
          </BasicCard>
        </Accordion>

        <Accordion title="Grid Layout - 4 Columns">
          <BasicCard transparent={true}>
            <CardBody style='p-5'>
              <p><mark>Default size</mark></p>
              <div className="grid split-4 use-content" content={`class="grid split-4"`}>
                <div className="demo text-center">25%</div>
                <div className="demo text-center">25%</div>
                <div className="demo text-center">25%</div>
                <div className="demo text-center">25%</div>
              </div>
            </CardBody>
          </BasicCard>
        </Accordion>

        <Accordion title="Grid Layout - 5 Columns">
          <BasicCard transparent={true}>
            <CardBody style='p-5'>
              <p><mark>Default size</mark></p>
              <div className="grid split-5 use-content" content={`class="grid split-5"`}>
                <div className="demo text-center">20%</div>
                <div className="demo text-center">20%</div>
                <div className="demo text-center">20%</div>
                <div className="demo text-center">20%</div>
                <div className="demo text-center">20%</div>
              </div>
            </CardBody>
          </BasicCard>
        </Accordion>

        <Accordion title="Flex Layout - Row &amp; Row reverse" active={true}>
          <BasicCard transparent={true}>
            <CardBody style="p-5">
              <div className="flex-layout use-content" content={`wrapper class="flex-layout row"`}>
                <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column A</div>
                <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column B</div>
                <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column C</div>
                <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column D</div>
              </div>
            </CardBody>
          </BasicCard>
          <BasicCard transparent={true}>
            <CardBody style="p-5">
              <div className="flex-layout row-reverse use-content" content={`wrapper class="flex-layout row-reverse"`}>
                <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column A</div>
                <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column B</div>
                <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column C</div>
                <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column D</div>
              </div>
            </CardBody>
          </BasicCard>
        </Accordion>

        <Accordion title="Flex Layout - Column &amp; Column reverse">
          <BasicCard transparent={true}>
            <CardBody style="p-5">
              <div className="flex-layout row">
                <div className="flex-layout columns use-content w-p-50" content={`wrapper class="flex-layout columns"`}>
                  <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column A</div>
                  <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column B</div>
                  <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column C</div>
                  <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column D</div>
                </div>
                <div className="flex-layout columns-reverse use-content w-p-50 m-0" content={`wrapper class="flex-layout columns-reverse"`}>
                  <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column A</div>
                  <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column B</div>
                  <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column C</div>
                  <div className="column demo use-content p-t-30 w-100" content={`class="column"`}>Column D</div>
                </div>
              </div>
            </CardBody>
          </BasicCard>
        </Accordion>

        <Accordion title="Flex Layout - Grow">
          <BasicCard transparent={true}>
            <CardBody style="p-5">
              <div className="flex-layout grow use-content w-p-100" content={`wrapper class="flex-layout grow"`}>
                <div className="column demo use-content p-t-30" content={`class="column"`}>Column A</div>
                <div className="column demo use-content p-t-30" content={`class="column"`}>Column B</div>
                <div className="column demo use-content p-t-30" content={`class="column"`}>Column C</div>
              </div>
            </CardBody>
          </BasicCard>
        </Accordion>

        <Accordion title="Vertical Layout - Vertical columns" active={true}>
          <BasicCard transparent={true}>
            <CardBody style="p-5">
              <div className="use-content w-p-100" content={`wrapper class="vertical-layout size-2"`}></div>
              <div className="vertical-layout size-2 w-p-100 m-t-20">
                <div className="demo">Column A</div>
                <div className="demo">Column B</div>
                <div className="demo">Column C</div>
                <div className="demo">Column D</div>
                <div className="demo">Column E</div>
                <div className="demo">Column F</div>
              </div>
            </CardBody>
          </BasicCard>
          <BasicCard transparent={true}>
            <CardBody style="p-5">
              <div className="use-content w-p-100" content={`wrapper class="vertical-layout size-3"`}></div>
              <div className="vertical-layout size-3 w-p-100 m-t-20">
                <div className="demo">Column A</div>
                <div className="demo">Column B</div>
                <div className="demo">Column C</div>
                <div className="demo">Column D</div>
                <div className="demo">Column E</div>
                <div className="demo">Column F</div>
              </div>
            </CardBody>
          </BasicCard>
        </Accordion>

      </AccordionGroup>
    </div>
  );
}
