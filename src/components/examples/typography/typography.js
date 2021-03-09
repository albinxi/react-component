import * as _ from 'lodash';
import React from 'react';
import { BasicCard, CardHeader, CardBody } from '../../card/card';

import './typography.example.scss';

export const Typography = (props) => {
  return (
    <div className="container">
      <div className="block-header sticky">
        <h2> Typography
          <small>All related typography examples</small>
        </h2>
      </div>
      {/* Heading */}
      <BasicCard
        transparent={true}
        style="typography-example">
        <CardHeader
          color="navigation"
          style="p-15"
          title="Heading style"
          subtitle="Font size declared in variables.scss. Dom element declared in core.element.scss"
        />
        <CardBody style="p-5">
          <ol>
            <li className="grid split-2-customized">
              <h1>Heading size 1</h1>
              <div className="desc">
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">HTML: </span>
                  <code className="text-left">{`<h1> Heading size 1 </h1>`}</code>
                </div>
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">SCSS: </span>
                  <code className="text-left">{`font-size: $h1-font-size;`}</code>
                </div>
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">Declare:</span>
                  <code className="text-left">{`$h1-font-size: 32px !default;`}</code>
                </div>
              </div>
            </li>
            <li className="grid split-2-customized">
              <h2>Heading size 2</h2>
              <div className="desc">
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">HTML: </span>
                  <code className="text-left">{`<h2> Heading size 2 </h2>`}</code>
                </div>
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">SCSS: </span>
                  <code className="text-left">{`font-size: $h2-font-size;`}</code>
                </div>
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">Declare:</span>
                  <code className="text-left">{`$h2-font-size: 28px !default;`}</code>
                </div>
              </div>
            </li>
            <li className="grid split-2-customized">
              <h3>Heading size 3</h3>
              <div className="desc">
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">HTML: </span>
                  <code className="text-left">{`<h3> Heading size 3 </h3>`}</code>
                </div>
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">SCSS: </span>
                  <code className="text-left">{`font-size: $h3-font-size;`}</code>
                </div>
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">Declare:</span>
                  <code className="text-left">{`$h3-font-size: 24px !default;`}</code>
                </div>
              </div>
            </li>
            <li className="grid split-2-customized">
              <h4>Heading size 4</h4>
              <div className="desc">
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">HTML: </span>
                  <code className="text-left">{`<h4> Heading size 4 </h4>`}</code>
                </div>
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">SCSS: </span>
                  <code className="text-left">{`font-size: $h1-font-size;`}</code>
                </div>
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">Declare:</span>
                  <code className="text-left">{`$h4-font-size: 20px !default;`}</code>
                </div>
              </div>
            </li>
            <li className="grid split-2-customized">
              <h5>Heading size 5</h5>
              <div className="desc">
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">HTML: </span>
                  <code className="text-left">{`<h5> Heading size 5 </h5>`}</code>
                </div>
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">SCSS: </span>
                  <code className="text-left">{`font-size: $h5-font-size;`}</code>
                </div>
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">Declare:</span>
                  <code className="text-left">{`$h5-font-size: 16px !default;`}</code>
                </div>
              </div>
            </li>
            <li className="grid split-2-customized">
              <h6>Heading size 6</h6>
              <div className="desc">
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">HTML: </span>
                  <code className="text-left">{`<h6> Heading size 6 </h6>`}</code>
                </div>
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">SCSS: </span>
                  <code className="text-left">{`font-size: $h6-font-size;`}</code>
                </div>
                <div>
                  <span className="inline-text p-r-10 w-70 text-right">Declare:</span>
                  <code className="text-left">{`$h6-font-size: 12px !default;`}</code>
                </div>
              </div>
            </li>
          </ol>
        </CardBody>
      </BasicCard>
      {/* Inline text */}
      <BasicCard
        transparent={true}
        style="typography-example">
        <CardHeader
          color="navigation"
          style="p-15"
          title="Inline text"
          subtitle="Font size declared in variables.scss. Dom element declared in core.element.scss"
        />
        <CardBody style="p-5">
          <ol>
            <li className="grid split-2">
              <div className="desc">
                <p>Marked Text</p>
                <p>
                  Lorem ipsum dolor sit amet, <mark>consectetur adipiscing elit</mark>, sed do eiusmod tempor incididunt ut labore et <mark>dolore magna</mark> aliqua.
                </p>
              </div>
              <div className="desc no-padding m-0">
                <span className="inline-text p-r-10 w-70 text-right">HTML:</span>
                <code className="text-left">{`<mark> Marked Text </mark>`}</code>
              </div>
            </li>
            <li className="grid split-2">
              <div className="desc">
                <p>Deleted Text</p>
                <p>
                  Lorem ipsum dolor sit amet, <del>consectetur adipiscing elit</del>, sed do eiusmod tempor incididunt ut labore et <del>dolore magna</del> aliqua.
                </p>
              </div>
              <div className="desc">
                <span className="inline-text p-r-10 w-70 text-right">HTML:</span>
                <code className="text-left">{`<del> Deleted Text </del>`}</code>
              </div>
            </li>
            <li className="grid split-2">
              <div className="desc">
                <p>Abbreviations Text</p>
                <p>
                  Lorem ipsum dolor sit amet, <abbr title="sit amet">consectetur adipiscing elit</abbr>,
                  sed do eiusmod tempor incididunt ut labore et <abbr title="tempor incididunt ut labore">dolore magna</abbr> aliqua.
                </p>
              </div>
              <div className="desc">
                <span className="inline-text p-r-10 w-70 text-right">HTML:</span>
                <code className="text-left">{`<abbr title="more info ...">Abbreviations Text</abbr>`}</code>
              </div>
            </li>
          </ol>
        </CardBody>
      </BasicCard>
      {/* Blockquote */}
      <BasicCard
        transparent={true}
        style="typography-example">
        <CardHeader
          color="navigation"
          style="p-15"
          title="Blockquotes"
          subtitle="Font size declared in variables.scss. Dom element declared in core.element.scss"
        />
        <CardBody style="p-5">
          <p><mark>Default blockquote example</mark></p>
          <blockquote>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </div>
          </blockquote>
          <p className="m-t-40"><mark>Block with subtitle example</mark></p>
          <blockquote >
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </div>
            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
          <p className="m-t-40 text-right"><mark>Opposite direction blockquote</mark></p>
          <blockquote className="reverse">
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </div>
            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </CardBody>
      </BasicCard>
    </div>
  );
}
