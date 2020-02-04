const postcssPresetEnv = require("postcss-preset-env");
const postcssSorting = require("postcss-sorting");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("autoprefixer"),
    postcssPresetEnv(/* pluginOptions */),
    postcssSorting({
      order: [
        "custom-properties",
        "dollar-variables",
        "declarations",
        "at-rules",
        "rules"
      ],
      "properties-order": [
        "display",
        "flex-direction",
        "flex",
        "justify-content",
        "align-items",
        "align-content",
        "position",
        "z-index",
        "top",
        "bottom",
        "left",
        "right",
        "transform",
        "margin",
        "margin-top",
        "margin-bottom",
        "margin-left",
        "margin-right",
        "padding",
        "padding-top",
        "padding-bottom",
        "padding-left",
        "padding-right"
      ],
      "unspecified-properties-position": "bottom"
    })
  ]
};
