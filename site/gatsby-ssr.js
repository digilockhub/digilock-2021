/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react")
exports.onRenderBody = ({
                          setHeadComponents
                        }) => {
  setHeadComponents([
    <script
        key="1"
        type="text/javascript"
        src="https://cmp.osano.com/169lVRSmxyYsO3WPy/98ece184-4165-4026-a287-d3876bd45a4c/osano.js"
    />,
    <script
        key="2"
        type="text/javascript"
        src="//js.hsforms.net/forms/v2.js"
    />
  ])
}

