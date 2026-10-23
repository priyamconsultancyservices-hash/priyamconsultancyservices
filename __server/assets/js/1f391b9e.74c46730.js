exports.ids = ["7182"];
exports.modules = {
6175(module) {
// Exports
module.exports = {
	"admonition": `admonition_xJq3`,
	"admonitionHeading": `admonitionHeading_Gvgb`,
	"admonitionIcon": `admonitionIcon_Rf37`,
	"admonitionContent": `admonitionContent_BuS1`
};


},
8864(module) {
// Exports
module.exports = {
	"copyButtonCopied": `copyButtonCopied_Vdqa`,
	"copyButtonIcons": `copyButtonIcons_IEyt`,
	"copyButtonIcon": `copyButtonIcon_TrPX`,
	"copyButtonSuccessIcon": `copyButtonSuccessIcon_cVMy`
};


},
4259(module) {
// Exports
module.exports = {
	"wordWrapButtonIcon": `wordWrapButtonIcon_b1P5`,
	"wordWrapButtonEnabled": `wordWrapButtonEnabled_uzNF`
};


},
9588(module) {
// Exports
module.exports = {
	"buttonGroup": `buttonGroup_M5ko`
};


},
1702(module) {
// Exports
module.exports = {
	"codeBlockContainer": `codeBlockContainer_Ckt0`
};


},
6128(module) {
// Exports
module.exports = {
	"codeBlock": `codeBlock_bY9V`,
	"codeBlockStandalone": `codeBlockStandalone_MEMb`,
	"codeBlockLines": `codeBlockLines_e6Vv`,
	"codeBlockLinesWithNumbering": `codeBlockLinesWithNumbering_o6Pm`
};


},
7851(module) {
// Exports
module.exports = {
	"codeBlockContent": `codeBlockContent_QJqH`,
	"codeBlockTitle": `codeBlockTitle_OeMC`,
	"codeBlock": `codeBlock_a8dz`
};


},
5464(module) {
// Exports
module.exports = {
	"codeLine": `codeLine_lJS_`,
	"codeLineNumber": `codeLineNumber_Tfdd`,
	"codeLineContent": `codeLineContent_feaV`
};


},
3406(module) {
// Exports
module.exports = {
	"details": `details_b_Ee`
};


},
901(module) {
// Exports
module.exports = {
	"lastUpdated": `lastUpdated_JAkA`,
	"noPrint": `noPrint_WFHX`
};


},
1930(module) {
// Exports
module.exports = {
	"iconEdit": `iconEdit_Z9Sw`
};


},
8081(module) {
// Exports
module.exports = {
	"img": `img_ev3q`
};


},
7691(module) {
// Exports
module.exports = {
	"containsTaskList": `containsTaskList_mC6p`
};


},
1696(module) {
// Exports
module.exports = {
	"mdxPageWrapper": `mdxPageWrapper_j9I6`
};


},
5490(module) {
// Exports
module.exports = {
	"tableOfContents": `tableOfContents_bqdL`,
	"docItemContainer": `docItemContainer_F8PC`
};


},
6062(module) {
// Exports
module.exports = {
	"details": `details_lb9f`,
	"isBrowser": `isBrowser_bmU9`,
	"collapsibleContent": `collapsibleContent_i85q`
};


},
8426(module, exports) {
/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


},
9526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BrowserOnly)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_useIsBrowser__rspack_import_2 = __webpack_require__(9863);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// Similar comp to the one described here:
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
function BrowserOnly({ children, fallback }) {
    const isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_2/* ["default"] */.A)();
    if (isBrowser) {
        if (typeof children !== 'function' && "production" === 'development') {}
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: children?.()
        });
    }
    return fallback ?? null;
}


},
2369(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconDanger)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconDanger(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 12 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
        })
    });
}


},
2198(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconInfo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconInfo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 14 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
        })
    });
}


},
9862(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconNote)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconNote(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 14 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
        })
    });
}


},
8469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconTip)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconTip(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 12 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
        })
    });
}


},
3884(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconCaution)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconCaution(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
        })
    });
}


},
9379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionLayout)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(8287);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(6175);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function AdmonitionContainer({ type, className, children, id }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (0,clsx__rspack_import_3/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.common.admonition */.G.common.admonition, _docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.common.admonitionType */.G.common.admonitionType(type), (_styles_module_css__rspack_import_2_default().admonition), className),
        id: id,
        children: children
    });
}
function AdmonitionHeading({ icon, title }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (_styles_module_css__rspack_import_2_default().admonitionHeading),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                className: (_styles_module_css__rspack_import_2_default().admonitionIcon),
                children: icon
            }),
            title
        ]
    });
}
function AdmonitionContent({ children }) {
    return children ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (_styles_module_css__rspack_import_2_default().admonitionContent),
        children: children
    }) : null;
}
function AdmonitionLayout(props) {
    const { type, icon, title, children, className, id } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(AdmonitionContainer, {
        type: type,
        className: className,
        id: id,
        children: [
            title || icon ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AdmonitionHeading, {
                title: title,
                icon: icon
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AdmonitionContent, {
                children: children
            })
        ]
    });
}


},
6132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeCaution)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(4164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(9379);
/* import */ var _theme_Admonition_Icon_Warning__rspack_import_4 = __webpack_require__(3884);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--warning';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Warning__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.caution",
        description: "The default label used for the Caution admonition (:::caution)",
        children: "caution"
    })
};
// TODO remove before v4: Caution replaced by Warning
// see https://github.com/facebook/docusaurus/issues/7558
function AdmonitionTypeCaution(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
9798(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeDanger)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(4164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(9379);
/* import */ var _theme_Admonition_Icon_Danger__rspack_import_4 = __webpack_require__(2369);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--danger';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Danger__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.danger",
        description: "The default label used for the Danger admonition (:::danger)",
        children: "danger"
    })
};
function AdmonitionTypeDanger(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
7033(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeInfo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(4164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(9379);
/* import */ var _theme_Admonition_Icon_Info__rspack_import_4 = __webpack_require__(2198);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--info';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Info__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.info",
        description: "The default label used for the Info admonition (:::info)",
        children: "info"
    })
};
function AdmonitionTypeInfo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
3381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeNote)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(4164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(9379);
/* import */ var _theme_Admonition_Icon_Note__rspack_import_4 = __webpack_require__(9862);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--secondary';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Note__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.note",
        description: "The default label used for the Note admonition (:::note)",
        children: "note"
    })
};
function AdmonitionTypeNote(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
7460(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeTip)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(4164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(9379);
/* import */ var _theme_Admonition_Icon_Tip__rspack_import_4 = __webpack_require__(8469);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--success';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Tip__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.tip",
        description: "The default label used for the Tip admonition (:::tip)",
        children: "tip"
    })
};
function AdmonitionTypeTip(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
2789(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeWarning)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(4164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(9379);
/* import */ var _theme_Admonition_Icon_Warning__rspack_import_4 = __webpack_require__(3884);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--warning';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Warning__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.warning",
        description: "The default label used for the Warning admonition (:::warning)",
        children: "warning"
    })
};
function AdmonitionTypeWarning(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
4245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _theme_Admonition_Type_Note__rspack_import_2 = __webpack_require__(3381);
/* import */ var _theme_Admonition_Type_Tip__rspack_import_3 = __webpack_require__(7460);
/* import */ var _theme_Admonition_Type_Info__rspack_import_4 = __webpack_require__(7033);
/* import */ var _theme_Admonition_Type_Warning__rspack_import_5 = __webpack_require__(2789);
/* import */ var _theme_Admonition_Type_Danger__rspack_import_6 = __webpack_require__(9798);
/* import */ var _theme_Admonition_Type_Caution__rspack_import_7 = __webpack_require__(6132);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






const admonitionTypes = {
    note: _theme_Admonition_Type_Note__rspack_import_2/* ["default"] */.A,
    tip: _theme_Admonition_Type_Tip__rspack_import_3/* ["default"] */.A,
    info: _theme_Admonition_Type_Info__rspack_import_4/* ["default"] */.A,
    warning: _theme_Admonition_Type_Warning__rspack_import_5/* ["default"] */.A,
    danger: _theme_Admonition_Type_Danger__rspack_import_6/* ["default"] */.A
};
// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
const admonitionAliases = {
    secondary: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Type_Note__rspack_import_2/* ["default"] */.A, {
            title: "secondary",
            ...props
        }),
    important: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Type_Info__rspack_import_4/* ["default"] */.A, {
            title: "important",
            ...props
        }),
    success: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Type_Tip__rspack_import_3/* ["default"] */.A, {
            title: "success",
            ...props
        }),
    caution: _theme_Admonition_Type_Caution__rspack_import_7/* ["default"] */.A
};
/* export default */ const __rspack_default_export = ({
    ...admonitionTypes,
    ...admonitionAliases
});


},
2320(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Admonition)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(5441);
/* import */ var _theme_Admonition_Types__rspack_import_2 = __webpack_require__(4245);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function getAdmonitionTypeComponent(type) {
    const component = _theme_Admonition_Types__rspack_import_2/* ["default"] */.A[type];
    if (component) {
        return component;
    }
    console.warn(`No admonition component found for admonition type "${type}". Using Info as fallback.`);
    return _theme_Admonition_Types__rspack_import_2/* ["default"].info */.A.info;
}
function Admonition(unprocessedProps) {
    const props = (0,_docusaurus_theme_common__rspack_import_3/* .processAdmonitionProps */.c)(unprocessedProps);
    const AdmonitionTypeComponent = getAdmonitionTypeComponent(props.type);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AdmonitionTypeComponent, {
        ...props
    });
}


},
2979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_2 = __webpack_require__(4164);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function CodeBlockButton({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        type: "button",
        ...props,
        className: (0,clsx__rspack_import_2/* ["default"] */.A)('clean-btn', className)
    });
}


},
6794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CopyButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_8 = __webpack_require__(4164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _docusaurus_theme_common_internal__rspack_import_7 = __webpack_require__(1643);
/* import */ var _theme_CodeBlock_Buttons_Button__rspack_import_3 = __webpack_require__(2979);
/* import */ var _theme_Icon_Copy__rspack_import_4 = __webpack_require__(1417);
/* import */ var _theme_Icon_Success__rspack_import_5 = __webpack_require__(5723);
/* import */ var _styles_module_css__rspack_import_6 = __webpack_require__(8864);
/* import */ var _styles_module_css__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_6);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function title() {
    return (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.CodeBlock.copy',
        message: 'Copy',
        description: 'The copy button label on code blocks'
    });
}
function ariaLabel(isCopied) {
    return isCopied ? (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.CodeBlock.copied',
        message: 'Copied',
        description: 'The copied button label on code blocks'
    }) : (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.CodeBlock.copyButtonAriaLabel',
        message: 'Copy code to clipboard',
        description: 'The ARIA label for copy code blocks button'
    });
}
async function copyToClipboard(text) {
    // The clipboard API is only defined in secure contexts (HTTPS / localhost).
    // See https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(text);
    }
    // Fall back to copy-text-to-clipboard for non-secure contexts (e.g. HTTP
    // on a local network). The fallback is lazily loaded to avoid bundle
    // overhead for the common HTTPS case.
    const { default: copy } = await __webpack_require__.e(/* import() */ "3693").then(__webpack_require__.bind(__webpack_require__, 3436));
    return copy(text);
}
function useCopyButton() {
    const { metadata: { code } } = (0,_docusaurus_theme_common_internal__rspack_import_7/* .useCodeBlockContext */.Ph)();
    const [isCopied, setIsCopied] = (0,react__rspack_import_1.useState)(false);
    const copyTimeout = (0,react__rspack_import_1.useRef)(undefined);
    const copyCode = (0,react__rspack_import_1.useCallback)(()=>{
        copyToClipboard(code).then(()=>{
            setIsCopied(true);
            copyTimeout.current = window.setTimeout(()=>{
                setIsCopied(false);
            }, 1000);
        });
    // Errors are intentionally not caught so they remain unhandled and can
    // be captured by observability tools (e.g. Sentry, PostHog).
    }, [
        code
    ]);
    (0,react__rspack_import_1.useEffect)(()=>()=>window.clearTimeout(copyTimeout.current), []);
    return {
        copyCode,
        isCopied
    };
}
function CopyButton({ className }) {
    const { copyCode, isCopied } = useCopyButton();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Buttons_Button__rspack_import_3/* ["default"] */.A, {
        "aria-label": ariaLabel(isCopied),
        title: title(),
        className: (0,clsx__rspack_import_8/* ["default"] */.A)(className, (_styles_module_css__rspack_import_6_default().copyButton), isCopied && (_styles_module_css__rspack_import_6_default().copyButtonCopied)),
        onClick: copyCode,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
            className: (_styles_module_css__rspack_import_6_default().copyButtonIcons),
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Copy__rspack_import_4/* ["default"] */.A, {
                    className: (_styles_module_css__rspack_import_6_default().copyButtonIcon)
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Success__rspack_import_5/* ["default"] */.A, {
                    className: (_styles_module_css__rspack_import_6_default().copyButtonSuccessIcon)
                })
            ]
        })
    });
}


},
8535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (WordWrapButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_7 = __webpack_require__(4164);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _docusaurus_theme_common_internal__rspack_import_6 = __webpack_require__(1643);
/* import */ var _theme_CodeBlock_Buttons_Button__rspack_import_3 = __webpack_require__(2979);
/* import */ var _theme_Icon_WordWrap__rspack_import_4 = __webpack_require__(8592);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(4259);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function WordWrapButton({ className }) {
    const { wordWrap } = (0,_docusaurus_theme_common_internal__rspack_import_6/* .useCodeBlockContext */.Ph)();
    const canShowButton = wordWrap.isEnabled || wordWrap.isCodeScrollable;
    if (!canShowButton) {
        return false;
    }
    const title = (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.CodeBlock.wordWrapToggle',
        message: 'Toggle word wrap',
        description: 'The title attribute for toggle word wrapping button of code block lines'
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Buttons_Button__rspack_import_3/* ["default"] */.A, {
        onClick: ()=>wordWrap.toggle(),
        className: (0,clsx__rspack_import_7/* ["default"] */.A)(className, wordWrap.isEnabled && (_styles_module_css__rspack_import_5_default().wordWrapButtonEnabled)),
        "aria-label": title,
        title: title,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_WordWrap__rspack_import_4/* ["default"] */.A, {
            className: (_styles_module_css__rspack_import_5_default().wordWrapButtonIcon),
            "aria-hidden": "true"
        })
    });
}


},
1281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockButtons)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_6 = __webpack_require__(4164);
/* import */ var _docusaurus_BrowserOnly__rspack_import_2 = __webpack_require__(9526);
/* import */ var _theme_CodeBlock_Buttons_CopyButton__rspack_import_3 = __webpack_require__(6794);
/* import */ var _theme_CodeBlock_Buttons_WordWrapButton__rspack_import_4 = __webpack_require__(8535);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(9588);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





// Code block buttons are not server-rendered on purpose
// Adding them to the initial HTML is useless and expensive (due to JSX SVG)
// They are hidden by default and require React  to become interactive
function CodeBlockButtons({ className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_BrowserOnly__rspack_import_2/* ["default"] */.A, {
        children: ()=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (0,clsx__rspack_import_6/* ["default"] */.A)(className, (_styles_module_css__rspack_import_5_default().buttonGroup)),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Buttons_WordWrapButton__rspack_import_4/* ["default"] */.A, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Buttons_CopyButton__rspack_import_3/* ["default"] */.A, {})
                ]
            })
    });
}


},
5412(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(7810);
/* import */ var _docusaurus_theme_common__rspack_import_6 = __webpack_require__(8287);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(1643);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(1702);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function CodeBlockContainer({ as: As, ...props }) {
    const prismTheme = (0,_docusaurus_theme_common__rspack_import_3/* .usePrismTheme */.A)();
    const prismCssVariables = (0,_docusaurus_theme_common_internal__rspack_import_4/* .getPrismCssVariables */.M$)(prismTheme);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(As, {
        ...props,
        style: prismCssVariables,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(props.className, (_styles_module_css__rspack_import_2_default().codeBlockContainer), _docusaurus_theme_common__rspack_import_6/* .ThemeClassNames.common.codeBlock */.G.common.codeBlock)
    });
}


},
8854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockJSX)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(4164);
/* import */ var _theme_CodeBlock_Container__rspack_import_2 = __webpack_require__(5412);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(6128);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



// TODO Docusaurus v4: move this component at the root?
// This component only handles a rare edge-case: <pre><MyComp/></pre> in MDX
// <pre> tags in markdown map to CodeBlocks. They may contain JSX children.
// When children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX({ children, className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Container__rspack_import_2/* ["default"] */.A, {
        as: "pre",
        tabIndex: 0,
        className: (0,clsx__rspack_import_4/* ["default"] */.A)((_styles_module_css__rspack_import_3_default().codeBlockStandalone), 'thin-scrollbar', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
            className: (_styles_module_css__rspack_import_3_default().codeBlockLines),
            children: children
        })
    });
}


},
6249(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockString)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(1022);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(1643);
/* import */ var _docusaurus_theme_common_internal__rspack_import_5 = __webpack_require__(4885);
/* import */ var _theme_CodeBlock_Layout__rspack_import_2 = __webpack_require__(2919);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function useCodeBlockMetadata(props) {
    const { prism } = (0,_docusaurus_theme_common__rspack_import_3/* .useThemeConfig */.p)();
    return (0,_docusaurus_theme_common_internal__rspack_import_4/* .createCodeBlockMetadata */.mU)({
        code: props.children,
        className: props.className,
        metastring: props.metastring,
        magicComments: prism.magicComments,
        defaultLanguage: prism.defaultLanguage,
        language: props.language,
        title: props.title,
        showLineNumbers: props.showLineNumbers
    });
}
// TODO Docusaurus v4: move this component at the root?
function CodeBlockString(props) {
    const metadata = useCodeBlockMetadata(props);
    const wordWrap = (0,_docusaurus_theme_common_internal__rspack_import_5/* .useCodeWordWrap */.f)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common_internal__rspack_import_4/* .CodeBlockContextProvider */.l8, {
        metadata: metadata,
        wordWrap: wordWrap,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Layout__rspack_import_2/* ["default"] */.A, {})
    });
}


},
1698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockContent)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common_internal__rspack_import_6 = __webpack_require__(1643);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(7810);
/* import */ var prism_react_renderer__rspack_import_2 = __webpack_require__(1765);
/* import */ var _theme_CodeBlock_Line__rspack_import_3 = __webpack_require__(815);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(6128);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






// TODO Docusaurus v4: remove useless forwardRef
const Pre = /*#__PURE__*/ react__rspack_import_1.forwardRef((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("pre", {
        ref: ref,
        /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */ tabIndex: 0,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(props.className, (_styles_module_css__rspack_import_4_default().codeBlock), 'thin-scrollbar')
    });
});
function Code(props) {
    const { metadata } = (0,_docusaurus_theme_common_internal__rspack_import_6/* .useCodeBlockContext */.Ph)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(props.className, (_styles_module_css__rspack_import_4_default().codeBlockLines), metadata.lineNumbersStart !== undefined && (_styles_module_css__rspack_import_4_default().codeBlockLinesWithNumbering)),
        style: {
            ...props.style,
            counterReset: metadata.lineNumbersStart === undefined ? undefined : `line-count ${metadata.lineNumbersStart - 1}`
        }
    });
}
function CodeBlockContent({ className: classNameProp }) {
    const { metadata, wordWrap } = (0,_docusaurus_theme_common_internal__rspack_import_6/* .useCodeBlockContext */.Ph)();
    const prismTheme = (0,_docusaurus_theme_common__rspack_import_7/* .usePrismTheme */.A)();
    const { code, language, lineNumbersStart, lineClassNames } = metadata;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(prism_react_renderer__rspack_import_2/* .Highlight */.f4, {
        theme: prismTheme,
        code: code,
        language: language,
        children: ({ className, style, tokens: lines, getLineProps, getTokenProps })=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Pre, {
                ref: wordWrap.codeBlockRef,
                className: (0,clsx__rspack_import_5/* ["default"] */.A)(classNameProp, className),
                style: style,
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Code, {
                    children: lines.map((line, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Line__rspack_import_3/* ["default"] */.A, {
                            line: line,
                            getLineProps: getLineProps,
                            getTokenProps: getTokenProps,
                            classNames: lineClassNames[i],
                            showLineNumbers: lineNumbersStart !== undefined
                        }, i))
                })
            })
    });
}


},
2919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockLayout)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_7 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common_internal__rspack_import_6 = __webpack_require__(1643);
/* import */ var _theme_CodeBlock_Container__rspack_import_2 = __webpack_require__(5412);
/* import */ var _theme_CodeBlock_Title__rspack_import_8 = __webpack_require__(2949);
/* import */ var _theme_CodeBlock_Content__rspack_import_3 = __webpack_require__(1698);
/* import */ var _theme_CodeBlock_Buttons__rspack_import_4 = __webpack_require__(1281);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(7851);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function CodeBlockLayout({ className }) {
    const { metadata } = (0,_docusaurus_theme_common_internal__rspack_import_6/* .useCodeBlockContext */.Ph)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_CodeBlock_Container__rspack_import_2/* ["default"] */.A, {
        as: "div",
        className: (0,clsx__rspack_import_7/* ["default"] */.A)(className, metadata.className),
        children: [
            metadata.title && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: (_styles_module_css__rspack_import_5_default().codeBlockTitle),
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Title__rspack_import_8/* ["default"] */.A, {
                    children: metadata.title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (_styles_module_css__rspack_import_5_default().codeBlockContent),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Content__rspack_import_3/* ["default"] */.A, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Buttons__rspack_import_4/* ["default"] */.A, {})
                ]
            })
        ]
    });
}


},
6785(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockLineToken)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
// Pass-through components that users can swizzle and customize
function CodeBlockLineToken({ line, token, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        ...props
    });
}


},
815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockLine)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(4164);
/* import */ var _theme_CodeBlock_Line_Token__rspack_import_2 = __webpack_require__(6785);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(5464);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



// This <br/ seems useful when the line has no content to prevent collapsing.
// For code blocks with "diff" languages, this makes the empty lines collapse to
// zero height lines, which is undesirable.
// See also https://github.com/facebook/docusaurus/pull/11565
function LineBreak() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {});
}
// Replaces single lines with '\n' by '' so that we don't end up with
// duplicate line breaks (the '\n' + the artificial <br/> above)
// see also https://github.com/facebook/docusaurus/pull/11565
function fixLineBreak(line) {
    const singleLineBreakToken = line.length === 1 && line[0].content === '\n' ? line[0] : undefined;
    if (singleLineBreakToken) {
        return [
            {
                ...singleLineBreakToken,
                content: ''
            }
        ];
    }
    return line;
}
function CodeBlockLine({ line: lineProp, classNames, showLineNumbers, getLineProps, getTokenProps }) {
    const line = fixLineBreak(lineProp);
    const lineProps = getLineProps({
        line,
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(classNames, showLineNumbers && (_styles_module_css__rspack_import_3_default().codeLine))
    });
    const lineTokens = line.map((token, key)=>{
        const tokenProps = getTokenProps({
            token
        });
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Line_Token__rspack_import_2/* ["default"] */.A, {
            ...tokenProps,
            line: line,
            token: token,
            children: tokenProps.children
        }, key);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        ...lineProps,
        children: [
            showLineNumbers ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: (_styles_module_css__rspack_import_3_default().codeLineNumber)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: (_styles_module_css__rspack_import_3_default().codeLineContent),
                        children: lineTokens
                    })
                ]
            }) : lineTokens,
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(LineBreak, {})
        ]
    });
}


},
2949(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockTitle)
});
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Just a pass-through component that users can swizzle and customize
function CodeBlockTitle({ children }) {
    return children;
}


},
5908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlock)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_useIsBrowser__rspack_import_2 = __webpack_require__(9863);
/* import */ var _theme_CodeBlock_Content_Element__rspack_import_3 = __webpack_require__(8854);
/* import */ var _theme_CodeBlock_Content_String__rspack_import_4 = __webpack_require__(6249);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



/**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */ function maybeStringifyChildren(children) {
    if (react__rspack_import_1.Children.toArray(children).some((el)=>/*#__PURE__*/ (0,react__rspack_import_1.isValidElement)(el))) {
        return children;
    }
    // The children is now guaranteed to be one/more plain strings
    return Array.isArray(children) ? children.join('') : children;
}
function CodeBlock({ children: rawChildren, ...props }) {
    // The Prism theme on SSR is always the default theme but the site theme can
    // be in a different mode. React hydration doesn't update DOM styles that come
    // from SSR. Hence force a re-render after mounting to apply the current
    // relevant styles.
    const isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_2/* ["default"] */.A)();
    const children = maybeStringifyChildren(rawChildren);
    const CodeBlockComp = typeof children === 'string' ? _theme_CodeBlock_Content_String__rspack_import_4/* ["default"] */.A : _theme_CodeBlock_Content_Element__rspack_import_3/* ["default"] */.A;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CodeBlockComp, {
        ...props,
        children: children
    }, String(isBrowser));
}


},
4230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeInline)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
// Simple component used to render inline code blocks
// its purpose is to be swizzled and customized
// MDX 1 used to have a inlineCode comp, see https://mdxjs.com/migrating/v2/
function CodeInline(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
        ...props
    });
}


},
7003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Draft)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(3276);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(8287);
/* import */ var _theme_Admonition__rspack_import_2 = __webpack_require__(2320);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function Draft({ className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition__rspack_import_2/* ["default"] */.A, {
        type: "caution",
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_3/* .DraftBannerTitle */.Yh, {}),
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(className, _docusaurus_theme_common__rspack_import_5/* .ThemeClassNames.common.draftBanner */.G.common.draftBanner),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_3/* .DraftBannerMessage */.TT, {})
    });
}


},
1250(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Unlisted)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(3276);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(8287);
/* import */ var _theme_Admonition__rspack_import_2 = __webpack_require__(2320);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function UnlistedBanner({ className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition__rspack_import_2/* ["default"] */.A, {
        type: "caution",
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_3/* .UnlistedBannerTitle */.Rc, {}),
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(className, _docusaurus_theme_common__rspack_import_5/* .ThemeClassNames.common.unlistedBanner */.G.common.unlistedBanner),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_3/* .UnlistedBannerMessage */.Uh, {})
    });
}
function Unlisted(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_3/* .UnlistedMetadata */.AE, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(UnlistedBanner, {
                ...props
            })
        ]
    });
}


},
1151(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (ContentVisibility)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _theme_ContentVisibility_Draft__rspack_import_2 = __webpack_require__(7003);
/* import */ var _theme_ContentVisibility_Unlisted__rspack_import_3 = __webpack_require__(1250);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function ContentVisibility({ metadata }) {
    const { unlisted, frontMatter } = metadata;
    // Reading draft/unlisted status from frontMatter is useful to display
    // the banners in dev mode (in dev, metadata.unlisted is always false)
    // See https://github.com/facebook/docusaurus/issues/8285
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            (unlisted || frontMatter.unlisted) && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_ContentVisibility_Unlisted__rspack_import_3/* ["default"] */.A, {}),
            frontMatter.draft && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_ContentVisibility_Draft__rspack_import_2/* ["default"] */.A, {})
        ]
    });
}


},
5236(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Details)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common_Details__rspack_import_2 = __webpack_require__(6092);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(3406);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses = 'alert alert--info';
function Details({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common_Details__rspack_import_2/* .Details */.B, {
        ...props,
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(InfimaClasses, (_styles_module_css__rspack_import_3_default().details), props.className)
    });
}


},
7277(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (EditMetaRow)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_5 = __webpack_require__(4164);
/* import */ var _theme_EditThisPage__rspack_import_2 = __webpack_require__(9017);
/* import */ var _theme_LastUpdated__rspack_import_3 = __webpack_require__(2165);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(901);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function EditMetaRow({ className, editUrl, lastUpdatedAt, lastUpdatedBy }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (0,clsx__rspack_import_5/* ["default"] */.A)('row', className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: (0,clsx__rspack_import_5/* ["default"] */.A)('col', (_styles_module_css__rspack_import_4_default().noPrint)),
                children: editUrl && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_EditThisPage__rspack_import_2/* ["default"] */.A, {
                    editUrl: editUrl
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: (0,clsx__rspack_import_5/* ["default"] */.A)('col', (_styles_module_css__rspack_import_4_default().lastUpdated)),
                children: (lastUpdatedAt || lastUpdatedBy) && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_LastUpdated__rspack_import_3/* ["default"] */.A, {
                    lastUpdatedAt: lastUpdatedAt,
                    lastUpdatedBy: lastUpdatedBy
                })
            })
        ]
    });
}


},
9017(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (EditThisPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(8287);
/* import */ var _docusaurus_Link__rspack_import_3 = __webpack_require__(5310);
/* import */ var _theme_Icon_Edit__rspack_import_4 = __webpack_require__(3024);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function EditThisPage({ editUrl }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_3/* ["default"] */.A, {
        to: editUrl,
        className: _docusaurus_theme_common__rspack_import_5/* .ThemeClassNames.common.editThisPage */.G.common.editThisPage,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Edit__rspack_import_4/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                id: "theme.common.editThisPage",
                description: "The link label to edit the current page",
                children: "Edit this page"
            })
        ]
    });
}


},
1417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconCopy)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconCopy(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fill: "currentColor",
            d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
        })
    });
}


},
3024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconEdit)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(4164);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(1930);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function IconEdit({ className, ...restProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        fill: "currentColor",
        height: "20",
        width: "20",
        viewBox: "0 0 40 40",
        className: (0,clsx__rspack_import_3/* ["default"] */.A)((_styles_module_css__rspack_import_2_default().iconEdit), className),
        "aria-hidden": "true",
        ...restProps,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("g", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"
            })
        })
    });
}


},
5723(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconSuccess)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconSuccess(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fill: "currentColor",
            d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        })
    });
}


},
8592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconWordWrap)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconWordWrap(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fill: "currentColor",
            d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
        })
    });
}


},
2165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (LastUpdated)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(8287);
/* import */ var _docusaurus_theme_common_internal__rspack_import_3 = __webpack_require__(7954);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function LastUpdatedAtDate({ lastUpdatedAt }) {
    const atDate = new Date(lastUpdatedAt);
    const dateTimeFormat = (0,_docusaurus_theme_common_internal__rspack_import_3/* .useDateTimeFormat */.i)({
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC'
    });
    const formattedLastUpdatedAt = dateTimeFormat.format(atDate);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.lastUpdated.atDate",
        description: "The words used to describe on which date a page has been last updated",
        values: {
            date: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("time", {
                    dateTime: atDate.toISOString(),
                    itemProp: "dateModified",
                    children: formattedLastUpdatedAt
                })
            })
        },
        children: ' on {date}'
    });
}
function LastUpdatedByUser({ lastUpdatedBy }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.lastUpdated.byUser",
        description: "The words used to describe by who the page has been last updated",
        values: {
            user: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
                children: lastUpdatedBy
            })
        },
        children: ' by {user}'
    });
}
function LastUpdated({ lastUpdatedAt, lastUpdatedBy }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
        className: _docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.common.lastUpdated */.G.common.lastUpdated,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                id: "theme.lastUpdated.lastUpdatedAtBy",
                description: "The sentence used to display when a page has been last updated, and by who",
                values: {
                    atDate: lastUpdatedAt ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(LastUpdatedAtDate, {
                        lastUpdatedAt: lastUpdatedAt
                    }) : '',
                    byUser: lastUpdatedBy ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(LastUpdatedByUser, {
                        lastUpdatedBy: lastUpdatedBy
                    }) : ''
                },
                children: 'Last updated{atDate}{byUser}'
            }),
             false && /*#__PURE__*/ 0
        ]
    });
}


},
5577(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXA)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(4164);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(5310);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(1976);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function MDXA(props) {
    // MDX Footnotes have ids such as <a id="user-content-fn-1-953011" ...>
    const anchorTargetClassName = (0,_docusaurus_theme_common__rspack_import_3/* .useAnchorTargetClassName */.v)(props.id);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
        ...props,
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(anchorTargetClassName, props.className)
    });
}


},
1092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXCode)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _theme_CodeBlock__rspack_import_2 = __webpack_require__(5908);
/* import */ var _theme_CodeInline__rspack_import_3 = __webpack_require__(4230);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function shouldBeInline(props) {
    return(// empty code blocks have no props.children,
    // see https://github.com/facebook/docusaurus/pull/9704
    typeof props.children !== 'undefined' && react__rspack_import_1.Children.toArray(props.children).every((el)=>typeof el === 'string' && !el.includes('\n')));
}
function MDXCode(props) {
    return shouldBeInline(props) ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeInline__rspack_import_3/* ["default"] */.A, {
        ...props
    }) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock__rspack_import_2/* ["default"] */.A, {
        ...props
    });
}


},
7303(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXDetails)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _theme_Details__rspack_import_2 = __webpack_require__(5236);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function MDXDetails(props) {
    const items = react__rspack_import_1.Children.toArray(props.children);
    // Split summary item from the rest to pass it as a separate prop to the
    // Details theme component
    const summary = items.find((item)=>/*#__PURE__*/ react__rspack_import_1.isValidElement(item) && item.type === 'summary');
    const children = /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: items.filter((item)=>item !== summary)
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Details__rspack_import_2/* ["default"] */.A, {
        ...props,
        summary: summary,
        children: children
    });
}


},
4667(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXHeading)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _theme_Heading__rspack_import_2 = __webpack_require__(2072);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function MDXHeading(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_2/* ["default"] */.A, {
        ...props
    });
}


},
2921(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXImg)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(4164);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(8081);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function transformImgClassName(className) {
    return (0,clsx__rspack_import_3/* ["default"] */.A)(className, (_styles_module_css__rspack_import_2_default().img));
}
function MDXImg(props) {
    return(// eslint-disable-next-line jsx-a11y/alt-text
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        decoding: "async",
        loading: "lazy",
        ...props,
        className: transformImgClassName(props.className)
    }));
}


},
2858(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXLi)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(4164);
/* import */ var _docusaurus_useBrokenLinks__rspack_import_2 = __webpack_require__(1345);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(1976);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function MDXLi(props) {
    // MDX Footnotes have ids such as <li id="user-content-fn-1-953011">
    (0,_docusaurus_useBrokenLinks__rspack_import_2/* ["default"] */.A)().collectAnchor(props.id);
    const anchorTargetClassName = (0,_docusaurus_theme_common__rspack_import_3/* .useAnchorTargetClassName */.v)(props.id);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(anchorTargetClassName, props.className),
        ...props
    });
}


},
7952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXPre)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function MDXPre(props) {
    // With MDX 2, this element is only used for fenced code blocks
    // It always receives a MDXComponents/Code as children
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: props.children
    });
}


},
9623(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXUl)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(4164);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(7691);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function transformUlClassName(className) {
    // Fix https://github.com/facebook/docusaurus/issues/9098
    if (typeof className === 'undefined') {
        return undefined;
    }
    return (0,clsx__rspack_import_3/* ["default"] */.A)(className, // This class is set globally by GitHub/MDX. We keep the global class, and
    // add another class to get a task list without the default ul styling
    // See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
    className?.includes('contains-task-list') && (_styles_module_css__rspack_import_2_default().containsTaskList));
}
function MDXUl(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
        ...props,
        className: transformUlClassName(props.className)
    });
}


},
2081(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_Head__rspack_import_2 = __webpack_require__(3572);
/* import */ var _theme_MDXComponents_Code__rspack_import_3 = __webpack_require__(1092);
/* import */ var _theme_MDXComponents_A__rspack_import_4 = __webpack_require__(5577);
/* import */ var _theme_MDXComponents_Pre__rspack_import_5 = __webpack_require__(7952);
/* import */ var _theme_MDXComponents_Details__rspack_import_6 = __webpack_require__(7303);
/* import */ var _theme_MDXComponents_Heading__rspack_import_7 = __webpack_require__(4667);
/* import */ var _theme_MDXComponents_Ul__rspack_import_8 = __webpack_require__(9623);
/* import */ var _theme_MDXComponents_Li__rspack_import_9 = __webpack_require__(2858);
/* import */ var _theme_MDXComponents_Img__rspack_import_10 = __webpack_require__(2921);
/* import */ var _theme_Admonition__rspack_import_11 = __webpack_require__(2320);
/* import */ var _theme_Mermaid__rspack_import_12 = __webpack_require__(6653);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 











const MDXComponents = {
    Head: _docusaurus_Head__rspack_import_2/* ["default"] */.A,
    details: _theme_MDXComponents_Details__rspack_import_6/* ["default"] */.A,
    Details: _theme_MDXComponents_Details__rspack_import_6/* ["default"] */.A,
    code: _theme_MDXComponents_Code__rspack_import_3/* ["default"] */.A,
    a: _theme_MDXComponents_A__rspack_import_4/* ["default"] */.A,
    pre: _theme_MDXComponents_Pre__rspack_import_5/* ["default"] */.A,
    ul: _theme_MDXComponents_Ul__rspack_import_8/* ["default"] */.A,
    li: _theme_MDXComponents_Li__rspack_import_9/* ["default"] */.A,
    img: _theme_MDXComponents_Img__rspack_import_10/* ["default"] */.A,
    h1: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h1",
            ...props
        }),
    h2: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h2",
            ...props
        }),
    h3: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h3",
            ...props
        }),
    h4: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h4",
            ...props
        }),
    h5: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h5",
            ...props
        }),
    h6: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h6",
            ...props
        }),
    admonition: _theme_Admonition__rspack_import_11/* ["default"] */.A,
    mermaid: _theme_Mermaid__rspack_import_12/* ["default"] */.A
};
/* export default */ const __rspack_default_export = (MDXComponents);


},
6318(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXContent)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(8453);
/* import */ var _theme_MDXComponents__rspack_import_2 = __webpack_require__(2081);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function MDXContent({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_mdx_js_react__rspack_import_3/* .MDXProvider */.x, {
        components: _theme_MDXComponents__rspack_import_2/* ["default"] */.A,
        children: children
    });
}


},
9762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_9 = __webpack_require__(4164);
/* import */ var _docusaurus_theme_common__rspack_import_8 = __webpack_require__(4308);
/* import */ var _docusaurus_theme_common__rspack_import_10 = __webpack_require__(8287);
/* import */ var _theme_Layout__rspack_import_2 = __webpack_require__(8328);
/* import */ var _theme_MDXContent__rspack_import_3 = __webpack_require__(6318);
/* import */ var _theme_TOC__rspack_import_4 = __webpack_require__(9608);
/* import */ var _theme_ContentVisibility__rspack_import_5 = __webpack_require__(1151);
/* import */ var _theme_EditMetaRow__rspack_import_6 = __webpack_require__(7277);
/* import */ var _styles_module_css__rspack_import_7 = __webpack_require__(1696);
/* import */ var _styles_module_css__rspack_import_7_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_7);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 








function MDXPage(props) {
    const { content: MDXPageContent } = props;
    const { metadata, assets } = MDXPageContent;
    const { title, editUrl, description, frontMatter, lastUpdatedBy, lastUpdatedAt } = metadata;
    const { keywords, wrapperClassName, hide_table_of_contents: hideTableOfContents } = frontMatter;
    const image = assets.image ?? frontMatter.image;
    const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_8/* .HtmlClassNameProvider */.e3, {
        className: (0,clsx__rspack_import_9/* ["default"] */.A)(wrapperClassName ?? _docusaurus_theme_common__rspack_import_10/* .ThemeClassNames.wrapper.mdxPages */.G.wrapper.mdxPages, _docusaurus_theme_common__rspack_import_10/* .ThemeClassNames.page.mdxPage */.G.page.mdxPage),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_2/* ["default"] */.A, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_8/* .PageMetadata */.be, {
                    title: title,
                    description: description,
                    keywords: keywords,
                    image: image
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
                    className: "container container--fluid margin-vert--lg",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: (0,clsx__rspack_import_9/* ["default"] */.A)('row', (_styles_module_css__rspack_import_7_default().mdxPageWrapper)),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (0,clsx__rspack_import_9/* ["default"] */.A)('col', !hideTableOfContents && 'col--8'),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_ContentVisibility__rspack_import_5/* ["default"] */.A, {
                                        metadata: metadata
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("article", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXContent__rspack_import_3/* ["default"] */.A, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(MDXPageContent, {})
                                        })
                                    }),
                                    canDisplayEditMetaRow && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_EditMetaRow__rspack_import_6/* ["default"] */.A, {
                                        className: (0,clsx__rspack_import_9/* ["default"] */.A)('margin-top--sm', _docusaurus_theme_common__rspack_import_10/* .ThemeClassNames.pages.pageFooterEditMetaRow */.G.pages.pageFooterEditMetaRow),
                                        editUrl: editUrl,
                                        lastUpdatedAt: lastUpdatedAt,
                                        lastUpdatedBy: lastUpdatedBy
                                    })
                                ]
                            }),
                            !hideTableOfContents && MDXPageContent.toc.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "col col--2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_TOC__rspack_import_4/* ["default"] */.A, {
                                    toc: MDXPageContent.toc,
                                    minHeadingLevel: frontMatter.toc_min_heading_level,
                                    maxHeadingLevel: frontMatter.toc_max_heading_level
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}


},
4618(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(5310);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// Recursive component rendering the toc tree
function TOCItemTree({ toc, className, linkClassName, isChild }) {
    if (!toc.length) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
        className: isChild ? undefined : className,
        children: toc.map((heading)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                        to: `#${heading.id}`,
                        className: linkClassName ?? undefined,
                        // Developer provided the HTML, so assume it's safe.
                        dangerouslySetInnerHTML: {
                            __html: heading.value
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(TOCItemTree, {
                        isChild: true,
                        toc: heading.children,
                        className: className,
                        linkClassName: linkClassName
                    })
                ]
            }, heading.id))
    });
}
// Memo only the tree root is enough
/* export default */ const __rspack_default_export = (/*#__PURE__*/react__rspack_import_1.memo(TOCItemTree));


},
3492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (TOCItems)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(1022);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(3251);
/* import */ var _docusaurus_theme_common_internal__rspack_import_5 = __webpack_require__(742);
/* import */ var _theme_TOCItems_Tree__rspack_import_2 = __webpack_require__(4618);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function TOCItems({ toc, className = 'table-of-contents table-of-contents__left-border', linkClassName = 'table-of-contents__link', linkActiveClassName = undefined, minHeadingLevel: minHeadingLevelOption, maxHeadingLevel: maxHeadingLevelOption, ...props }) {
    const themeConfig = (0,_docusaurus_theme_common__rspack_import_3/* .useThemeConfig */.p)();
    const minHeadingLevel = minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
    const maxHeadingLevel = maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;
    const tocTree = (0,_docusaurus_theme_common_internal__rspack_import_4/* .useFilteredAndTreeifiedTOC */.h)({
        toc,
        minHeadingLevel,
        maxHeadingLevel
    });
    const tocHighlightConfig = (0,react__rspack_import_1.useMemo)(()=>{
        if (linkClassName && linkActiveClassName) {
            return {
                linkClassName,
                linkActiveClassName,
                minHeadingLevel,
                maxHeadingLevel
            };
        }
        return undefined;
    }, [
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel
    ]);
    (0,_docusaurus_theme_common_internal__rspack_import_5/* .useTOCHighlight */.i)(tocHighlightConfig);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_TOCItems_Tree__rspack_import_2/* ["default"] */.A, {
        toc: tocTree,
        className: className,
        linkClassName: linkClassName,
        ...props
    });
}


},
9608(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (TOC)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_4 = __webpack_require__(4164);
/* import */ var _theme_TOCItems__rspack_import_2 = __webpack_require__(3492);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(5490);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';
function TOC({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (0,clsx__rspack_import_4/* ["default"] */.A)((_styles_module_css__rspack_import_3_default().tableOfContents), 'thin-scrollbar', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_TOCItems__rspack_import_2/* ["default"] */.A, {
            ...props,
            linkClassName: LINK_CLASS_NAME,
            linkActiveClassName: LINK_ACTIVE_CLASS_NAME
        })
    });
}


},
6092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  B: () => (Details)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_6 = __webpack_require__(4164);
/* import */ var _docusaurus_useBrokenLinks__rspack_import_2 = __webpack_require__(1345);
/* import */ var _docusaurus_useIsBrowser__rspack_import_3 = __webpack_require__(9863);
/* import */ var _Collapsible__rspack_import_5 = __webpack_require__(9510);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(6062);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function isInSummary(node) {
    if (!node) {
        return false;
    }
    return node.tagName === 'SUMMARY' || isInSummary(node.parentElement);
}
function hasParent(node, parent) {
    if (!node) {
        return false;
    }
    return node === parent || hasParent(node.parentElement, parent);
}
/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */ function Details({ summary, children, ...props }) {
    (0,_docusaurus_useBrokenLinks__rspack_import_2/* ["default"] */.A)().collectAnchor(props.id);
    const isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_3/* ["default"] */.A)();
    const detailsRef = (0,react__rspack_import_1.useRef)(null);
    const { collapsed, setCollapsed } = (0,_Collapsible__rspack_import_5/* .useCollapsible */.u)({
        initialState: !props.open
    });
    // Use a separate state for the actual details prop, because it must be set
    // only after animation completes, otherwise close animations won't work
    const [open, setOpen] = (0,react__rspack_import_1.useState)(props.open);
    const summaryElement = /*#__PURE__*/ react__rspack_import_1.isValidElement(summary) ? summary : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("summary", {
        children: summary ?? 'Details'
    });
    return(// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("details", {
        ...props,
        ref: detailsRef,
        open: open,
        "data-collapsed": collapsed,
        className: (0,clsx__rspack_import_6/* ["default"] */.A)((_styles_module_css__rspack_import_4_default().details), isBrowser && (_styles_module_css__rspack_import_4_default().isBrowser), props.className),
        onMouseDown: (e)=>{
            const target = e.target;
            // Prevent a double-click to highlight summary text
            if (isInSummary(target) && e.detail > 1) {
                e.preventDefault();
            }
        },
        onClick: (e)=>{
            e.stopPropagation(); // For isolation of multiple nested details/summary
            const target = e.target;
            const shouldToggle = isInSummary(target) && hasParent(target, detailsRef.current);
            if (!shouldToggle) {
                return;
            }
            e.preventDefault();
            if (collapsed) {
                setCollapsed(false);
                setOpen(true);
            } else {
                setCollapsed(true);
            // Don't do this, it breaks close animation!
            // setOpen(false);
            }
        },
        children: [
            summaryElement,
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_Collapsible__rspack_import_5/* .Collapsible */.N, {
                lazy: false,
                collapsed: collapsed,
                onCollapseTransitionEnd: (newCollapsed)=>{
                    setCollapsed(newCollapsed);
                    setOpen(!newCollapsed);
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: (_styles_module_css__rspack_import_4_default().collapsibleContent),
                    children: children
                })
            })
        ]
    }));
} //# sourceMappingURL=index.js.map


},
4885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  f: () => (useCodeWordWrap)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
/* import */ var _useMutationObserver__rspack_import_1 = __webpack_require__(3181);


// Callback fires when the "hidden" attribute of a tabpanel changes
// See https://github.com/facebook/docusaurus/pull/7485
function useTabBecameVisibleCallback(codeBlockRef, callback) {
    const [hiddenTabElement, setHiddenTabElement] = (0,react__rspack_import_0.useState)();
    const updateHiddenTabElement = (0,react__rspack_import_0.useCallback)(()=>{
        // No need to observe non-hidden tabs
        // + we want to force a re-render when a tab becomes visible
        setHiddenTabElement(codeBlockRef.current?.closest('[role=tabpanel][hidden]'));
    }, [
        codeBlockRef,
        setHiddenTabElement
    ]);
    (0,react__rspack_import_0.useEffect)(()=>{
        updateHiddenTabElement();
    }, [
        updateHiddenTabElement
    ]);
    (0,_useMutationObserver__rspack_import_1/* .useMutationObserver */.P)(hiddenTabElement, (mutations)=>{
        mutations.forEach((mutation)=>{
            if (mutation.type === 'attributes' && mutation.attributeName === 'hidden') {
                callback();
                updateHiddenTabElement();
            }
        });
    }, {
        attributes: true,
        characterData: false,
        childList: false,
        subtree: false
    });
}
function useCodeWordWrap() {
    const [isEnabled, setIsEnabled] = (0,react__rspack_import_0.useState)(false);
    const [isCodeScrollable, setIsCodeScrollable] = (0,react__rspack_import_0.useState)(false);
    const codeBlockRef = (0,react__rspack_import_0.useRef)(null);
    const toggle = (0,react__rspack_import_0.useCallback)(()=>{
        const codeElement = codeBlockRef.current.querySelector('code');
        if (isEnabled) {
            codeElement.removeAttribute('style');
        } else {
            codeElement.style.whiteSpace = 'pre-wrap';
            // When code wrap is enabled, we want to avoid a scrollbar in any case
            // Ensure that very very long words/strings/tokens still wrap
            codeElement.style.overflowWrap = 'anywhere';
        }
        setIsEnabled((value)=>!value);
    }, [
        codeBlockRef,
        isEnabled
    ]);
    const updateCodeIsScrollable = (0,react__rspack_import_0.useCallback)(()=>{
        const { scrollWidth, clientWidth } = codeBlockRef.current;
        const isScrollable = scrollWidth > clientWidth || codeBlockRef.current.querySelector('code').hasAttribute('style');
        setIsCodeScrollable(isScrollable);
    }, [
        codeBlockRef
    ]);
    useTabBecameVisibleCallback(codeBlockRef, updateCodeIsScrollable);
    (0,react__rspack_import_0.useEffect)(()=>{
        updateCodeIsScrollable();
    }, [
        isEnabled,
        updateCodeIsScrollable
    ]);
    (0,react__rspack_import_0.useEffect)(()=>{
        window.addEventListener('resize', updateCodeIsScrollable, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('resize', updateCodeIsScrollable);
        };
    }, [
        updateCodeIsScrollable
    ]);
    return {
        codeBlockRef,
        isEnabled,
        isCodeScrollable,
        toggle
    };
} //# sourceMappingURL=useCodeWordWrap.js.map


},
3181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  P: () => (useMutationObserver)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
/* import */ var _utils_reactUtils__rspack_import_1 = __webpack_require__(2260);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

const DefaultOptions = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
};
function useMutationObserver(target, callback, options = DefaultOptions) {
    const stableCallback = (0,_utils_reactUtils__rspack_import_1/* .useEvent */._q)(callback);
    // MutationObserver options are not nested much
    // so this should be to memo options in 99%
    // TODO handle options.attributeFilter array
    const stableOptions = (0,_utils_reactUtils__rspack_import_1/* .useShallowMemoObject */.Be)(options);
    (0,react__rspack_import_0.useEffect)(()=>{
        const observer = new MutationObserver(stableCallback);
        if (target) {
            observer.observe(target, stableOptions);
        }
        return ()=>observer.disconnect();
    }, [
        target,
        stableCallback,
        stableOptions
    ]);
} //# sourceMappingURL=useMutationObserver.js.map


},
7810(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (usePrismTheme)
});
/* import */ var _contexts_colorMode__rspack_import_1 = __webpack_require__(3941);
/* import */ var _utils_useThemeConfig__rspack_import_0 = __webpack_require__(1022);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

/**
 * Returns a color-mode-dependent Prism theme: whatever the user specified in
 * the config. Falls back to `palenight`.
 */ function usePrismTheme() {
    const { prism } = (0,_utils_useThemeConfig__rspack_import_0/* .useThemeConfig */.p)();
    const { colorMode } = (0,_contexts_colorMode__rspack_import_1/* .useColorMode */.G)();
    const lightModeTheme = prism.theme;
    const darkModeTheme = prism.darkTheme || lightModeTheme;
    const prismTheme = colorMode === 'dark' ? darkModeTheme : lightModeTheme;
    return prismTheme;
} //# sourceMappingURL=usePrismTheme.js.map


},
742(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  i: () => (useTOCHighlight)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
/* import */ var _utils_useThemeConfig__rspack_import_1 = __webpack_require__(1022);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// TODO make the hardcoded theme-classic classnames configurable (or add them
// to ThemeClassNames?)
/**
 * If the anchor has no height and is just a "marker" in the DOM; we'll use the
 * parent (normally the link text) rect boundaries instead
 */ function getVisibleBoundingClientRect(element) {
    const rect = element.getBoundingClientRect();
    const hasNoHeight = rect.top === rect.bottom;
    if (hasNoHeight) {
        return getVisibleBoundingClientRect(element.parentNode);
    }
    return rect;
}
/**
 * Considering we divide viewport into 2 zones of each 50vh, this returns true
 * if an element is in the first zone (i.e., appear in viewport, near the top)
 */ function isInViewportTopHalf(boundingRect) {
    return boundingRect.top > 0 && boundingRect.bottom < window.innerHeight / 2;
}
function getAnchors({ minHeadingLevel, maxHeadingLevel }) {
    const selectors = [];
    for(let i = minHeadingLevel; i <= maxHeadingLevel; i += 1){
        selectors.push(`h${i}.anchor`);
    }
    return Array.from(document.querySelectorAll(selectors.join()));
}
function getActiveAnchor(anchors, { anchorTopOffset }) {
    // Naming is hard: The "nextVisibleAnchor" is the first anchor that appear
    // under the viewport top boundary. It does not mean this anchor is visible
    // yet, but if user continues scrolling down, it will be the first to become
    // visible
    const nextVisibleAnchor = anchors.find((anchor)=>{
        const boundingRect = getVisibleBoundingClientRect(anchor);
        return boundingRect.top >= anchorTopOffset;
    });
    if (nextVisibleAnchor) {
        const boundingRect = getVisibleBoundingClientRect(nextVisibleAnchor);
        // If anchor is in the top half of the viewport: it is the one we consider
        // "active" (unless it's too close to the top and and soon to be scrolled
        // outside viewport)
        if (isInViewportTopHalf(boundingRect)) {
            return nextVisibleAnchor;
        }
        // If anchor is in the bottom half of the viewport, or under the viewport,
        // we consider the active anchor is the previous one. This is because the
        // main text appearing in the user screen mostly belong to the previous
        // anchor. Returns null for the first anchor, see
        // https://github.com/facebook/docusaurus/issues/5318
        return anchors[anchors.indexOf(nextVisibleAnchor) - 1] ?? null;
    }
    // No anchor under viewport top (i.e. we are at the bottom of the page),
    // highlight the last anchor found
    return anchors[anchors.length - 1] ?? null;
}
function getLinkAnchorValue(link) {
    return decodeURIComponent(link.href.substring(link.href.indexOf('#') + 1));
}
function getLinks(linkClassName) {
    return Array.from(document.getElementsByClassName(linkClassName));
}
function getNavbarHeight() {
    // Not ideal to obtain actual height this way
    // Using TS ! (not ?) because otherwise a bad selector would be un-noticed
    return document.querySelector('.navbar').clientHeight;
}
function useAnchorTopOffsetRef() {
    const anchorTopOffsetRef = (0,react__rspack_import_0.useRef)(0);
    const { navbar: { hideOnScroll } } = (0,_utils_useThemeConfig__rspack_import_1/* .useThemeConfig */.p)();
    (0,react__rspack_import_0.useEffect)(()=>{
        anchorTopOffsetRef.current = hideOnScroll ? 0 : getNavbarHeight();
    }, [
        hideOnScroll
    ]);
    return anchorTopOffsetRef;
}
/**
 * Side-effect that applies the active class name to the TOC heading that the
 * user is currently viewing. Disabled when `config` is undefined.
 */ function useTOCHighlight(config) {
    const lastActiveLinkRef = (0,react__rspack_import_0.useRef)(undefined);
    const anchorTopOffsetRef = useAnchorTopOffsetRef();
    (0,react__rspack_import_0.useEffect)(()=>{
        if (!config) {
            // No-op, highlighting is disabled
            return ()=>{};
        }
        const { linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel } = config;
        function updateLinkActiveClass(link, active) {
            if (active) {
                if (lastActiveLinkRef.current && lastActiveLinkRef.current !== link) {
                    lastActiveLinkRef.current.classList.remove(linkActiveClassName);
                }
                link.classList.add(linkActiveClassName);
                lastActiveLinkRef.current = link;
            // link.scrollIntoView({block: 'nearest'});
            } else {
                link.classList.remove(linkActiveClassName);
            }
        }
        function updateActiveLink() {
            const links = getLinks(linkClassName);
            const anchors = getAnchors({
                minHeadingLevel,
                maxHeadingLevel
            });
            const activeAnchor = getActiveAnchor(anchors, {
                anchorTopOffset: anchorTopOffsetRef.current
            });
            const activeLink = links.find((link)=>activeAnchor && activeAnchor.id === getLinkAnchorValue(link));
            links.forEach((link)=>{
                updateLinkActiveClass(link, link === activeLink);
            });
        }
        document.addEventListener('scroll', updateActiveLink);
        document.addEventListener('resize', updateActiveLink);
        updateActiveLink();
        return ()=>{
            document.removeEventListener('scroll', updateActiveLink);
            document.removeEventListener('resize', updateActiveLink);
        };
    }, [
        config,
        anchorTopOffsetRef
    ]);
} //# sourceMappingURL=useTOCHighlight.js.map


},
3276(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  AE: () => (UnlistedMetadata),
  Rc: () => (UnlistedBannerTitle),
  TT: () => (DraftBannerMessage),
  Uh: () => (UnlistedBannerMessage),
  Yh: () => (DraftBannerTitle)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(1826);
/* import */ var _docusaurus_Head__rspack_import_3 = __webpack_require__(3572);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function UnlistedBannerTitle() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.contentVisibility.unlistedBanner.title",
        description: "The unlisted content banner title",
        children: "Unlisted page"
    });
}
function UnlistedBannerMessage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.contentVisibility.unlistedBanner.message",
        description: "The unlisted content banner message",
        children: "This page is unlisted. Search engines will not index it, and only users having a direct link can access it."
    });
}
// TODO Docusaurus v4 breaking change (since it's v3 public theme-common API :/)
//  Move this to theme/ContentVisibility/Unlisted
function UnlistedMetadata() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Head__rspack_import_3/* ["default"] */.A, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
            name: "robots",
            content: "noindex, nofollow"
        })
    });
}
function DraftBannerTitle() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.contentVisibility.draftBanner.title",
        description: "The draft content banner title",
        children: "Draft page"
    });
}
function DraftBannerMessage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.contentVisibility.draftBanner.message",
        description: "The draft content banner message",
        children: "This page is a draft. It will only be visible in dev and be excluded from the production build."
    });
} //# sourceMappingURL=contentVisibilityTranslations.js.map


},
7954(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  i: () => (useDateTimeFormat)
});
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_0 = __webpack_require__(898);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function useCalendar() {
    const { i18n: { currentLocale, localeConfigs } } = (0,_docusaurus_useDocusaurusContext__rspack_import_0/* ["default"] */.A)();
    return localeConfigs[currentLocale].calendar;
}
function useDateTimeFormat(options = {}) {
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__rspack_import_0/* ["default"] */.A)();
    const calendar = useCalendar();
    return new Intl.DateTimeFormat(currentLocale, {
        calendar,
        ...options
    });
} //# sourceMappingURL=IntlUtils.js.map


},
5441(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  c: () => (processAdmonitionProps)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children) {
    const items = react__rspack_import_1.Children.toArray(children);
    const mdxAdmonitionTitleWrapper = items.find((item)=>/*#__PURE__*/ react__rspack_import_1.isValidElement(item) && item.type === 'mdxAdmonitionTitle');
    const rest = items.filter((item)=>item !== mdxAdmonitionTitleWrapper);
    const mdxAdmonitionTitle = mdxAdmonitionTitleWrapper?.props.children;
    return {
        mdxAdmonitionTitle,
        rest: rest.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: rest
        }) : null
    };
}
function processAdmonitionProps(props) {
    const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(props.children);
    const title = props.title ?? mdxAdmonitionTitle;
    return {
        ...props,
        // Do not return "title: undefined" prop
        // this might create unwanted props overrides when merging props
        // For example: {...default,...props}
        ...title && {
            title
        },
        children: rest
    };
} //# sourceMappingURL=admonitionUtils.js.map


},
1643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  M$: () => (getPrismCssVariables),
  Ph: () => (useCodeBlockContext),
  l8: () => (CodeBlockContextProvider),
  mU: () => (createCodeBlockMetadata)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(4848);
/* import */ var react__rspack_import_1 = __webpack_require__(6540);
/* import */ var clsx__rspack_import_3 = __webpack_require__(4164);
/* import */ var parse_numeric_range__rspack_import_2 = __webpack_require__(8426);
/* import */ var parse_numeric_range__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range__rspack_import_2);
/* import */ var _reactUtils__rspack_import_4 = __webpack_require__(2260);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



const codeBlockTitleRegex = /title=(?<quote>["'])(?<title>.*?)\1/;
const metastringLinesRangeRegex = /\{(?<range>[\d,-]+)\}/;
// Supported types of highlight comments
const popularCommentPatterns = {
    js: {
        start: '\\/\\/',
        end: ''
    },
    jsBlock: {
        start: '\\/\\*',
        end: '\\*\\/'
    },
    jsx: {
        start: '\\{\\s*\\/\\*',
        end: '\\*\\/\\s*\\}'
    },
    bash: {
        start: '#',
        end: ''
    },
    html: {
        start: '<!--',
        end: '-->'
    }
};
const commentPatterns = {
    ...popularCommentPatterns,
    // minor comment styles
    lua: {
        start: '--',
        end: ''
    },
    wasm: {
        start: '\\;\\;',
        end: ''
    },
    tex: {
        start: '%',
        end: ''
    },
    vb: {
        start: "['‘’]",
        end: ''
    },
    vbnet: {
        start: "(?:_\\s*)?['‘’]",
        end: ''
    },
    rem: {
        start: '[Rr][Ee][Mm]\\b',
        end: ''
    },
    f90: {
        start: '!',
        end: ''
    },
    ml: {
        start: '\\(\\*',
        end: '\\*\\)'
    },
    cobol: {
        start: '\\*>',
        end: ''
    }
};
const popularCommentTypes = Object.keys(popularCommentPatterns);
function getCommentPattern(languages, magicCommentDirectives) {
    // To be more reliable, the opening and closing comment must match
    const commentPattern = languages.map((lang)=>{
        const { start, end } = commentPatterns[lang];
        return `(?:${start}\\s*(${magicCommentDirectives.flatMap((d)=>[
                d.line,
                d.block?.start,
                d.block?.end
            ].filter(Boolean)).join('|')})\\s*${end})`;
    }).join('|');
    // White space is allowed, but otherwise it should be on it's own line
    return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);
}
/**
 * Select comment styles based on language
 */ function getAllMagicCommentDirectiveStyles(lang, magicCommentDirectives) {
    switch(lang){
        case 'js':
        case 'javascript':
        case 'ts':
        case 'typescript':
            return getCommentPattern([
                'js',
                'jsBlock'
            ], magicCommentDirectives);
        case 'jsx':
        case 'tsx':
            return getCommentPattern([
                'js',
                'jsBlock',
                'jsx'
            ], magicCommentDirectives);
        case 'html':
            return getCommentPattern([
                'js',
                'jsBlock',
                'html'
            ], magicCommentDirectives);
        case 'python':
        case 'py':
        case 'bash':
            return getCommentPattern([
                'bash'
            ], magicCommentDirectives);
        case 'markdown':
        case 'md':
            // Text uses HTML, front matter uses bash
            return getCommentPattern([
                'html',
                'jsx',
                'bash'
            ], magicCommentDirectives);
        case 'tex':
        case 'latex':
        case 'matlab':
            return getCommentPattern([
                'tex'
            ], magicCommentDirectives);
        case 'lua':
        case 'haskell':
            return getCommentPattern([
                'lua'
            ], magicCommentDirectives);
        case 'sql':
            return getCommentPattern([
                'lua',
                'jsBlock'
            ], magicCommentDirectives);
        case 'wasm':
            return getCommentPattern([
                'wasm'
            ], magicCommentDirectives);
        case 'vb':
        case 'vba':
        case 'visual-basic':
            return getCommentPattern([
                'vb',
                'rem'
            ], magicCommentDirectives);
        case 'vbnet':
            return getCommentPattern([
                'vbnet',
                'rem'
            ], magicCommentDirectives);
        case 'batch':
            return getCommentPattern([
                'rem'
            ], magicCommentDirectives);
        case 'basic':
            return getCommentPattern([
                'rem',
                'f90'
            ], magicCommentDirectives);
        case 'fsharp':
            return getCommentPattern([
                'js',
                'ml'
            ], magicCommentDirectives);
        case 'ocaml':
        case 'sml':
            return getCommentPattern([
                'ml'
            ], magicCommentDirectives);
        case 'fortran':
            return getCommentPattern([
                'f90'
            ], magicCommentDirectives);
        case 'cobol':
            return getCommentPattern([
                'cobol'
            ], magicCommentDirectives);
        default:
            // All popular comment types
            return getCommentPattern(popularCommentTypes, magicCommentDirectives);
    }
}
function parseCodeBlockTitle(metastring) {
    return metastring?.match(codeBlockTitleRegex)?.groups.title ?? '';
}
function getMetaLineNumbersStart(metastring) {
    const showLineNumbersMeta = metastring?.split(' ').find((str)=>str.startsWith('showLineNumbers'));
    if (showLineNumbersMeta) {
        if (showLineNumbersMeta.startsWith('showLineNumbers=')) {
            const value = showLineNumbersMeta.replace('showLineNumbers=', '');
            return parseInt(value, 10);
        }
        return 1;
    }
    return undefined;
}
function getLineNumbersStart({ showLineNumbers, metastring }) {
    const defaultStart = 1;
    if (typeof showLineNumbers === 'boolean') {
        return showLineNumbers ? defaultStart : undefined;
    }
    if (typeof showLineNumbers === 'number') {
        return showLineNumbers;
    }
    return getMetaLineNumbersStart(metastring);
}
// TODO Docusaurus v4: remove, only kept for internal retro-compatibility
//  See https://github.com/facebook/docusaurus/pull/11153
function containsLineNumbers(metastring) {
    return Boolean(metastring?.includes('showLineNumbers'));
}
function parseCodeLinesFromMetastring(code, { metastring, magicComments }) {
    // Highlighted lines specified in props: don't parse the content
    if (metastring && metastringLinesRangeRegex.test(metastring)) {
        const linesRange = metastring.match(metastringLinesRangeRegex).groups.range;
        if (magicComments.length === 0) {
            throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${metastring}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);
        }
        const metastringRangeClassName = magicComments[0].className;
        const lines = parse_numeric_range__rspack_import_2_default()(linesRange).filter((n)=>n > 0).map((n)=>[
                n - 1,
                [
                    metastringRangeClassName
                ]
            ]);
        return {
            lineClassNames: Object.fromEntries(lines),
            code
        };
    }
    return null;
}
function parseCodeLinesFromContent(code, params) {
    const { language, magicComments } = params;
    if (language === undefined) {
        return {
            lineClassNames: {},
            code
        };
    }
    const directiveRegex = getAllMagicCommentDirectiveStyles(language, magicComments);
    // Go through line by line
    const lines = code.split(/\r?\n/);
    const blocks = Object.fromEntries(magicComments.map((d)=>[
            d.className,
            {
                start: 0,
                range: ''
            }
        ]));
    const lineToClassName = Object.fromEntries(magicComments.filter((d)=>d.line).map(({ className, line })=>[
            line,
            className
        ]));
    const blockStartToClassName = Object.fromEntries(magicComments.filter((d)=>d.block).map(({ className, block })=>[
            block.start,
            className
        ]));
    const blockEndToClassName = Object.fromEntries(magicComments.filter((d)=>d.block).map(({ className, block })=>[
            block.end,
            className
        ]));
    for(let lineNumber = 0; lineNumber < lines.length;){
        const line = lines[lineNumber];
        const match = line.match(directiveRegex);
        if (!match) {
            // Lines without directives are unchanged
            lineNumber += 1;
            continue;
        }
        const directive = match.slice(1).find((item)=>item !== undefined);
        if (lineToClassName[directive]) {
            blocks[lineToClassName[directive]].range += `${lineNumber},`;
        } else if (blockStartToClassName[directive]) {
            blocks[blockStartToClassName[directive]].start = lineNumber;
        } else if (blockEndToClassName[directive]) {
            blocks[blockEndToClassName[directive]].range += `${blocks[blockEndToClassName[directive]].start}-${lineNumber - 1},`;
        }
        lines.splice(lineNumber, 1);
    }
    const lineClassNames = {};
    Object.entries(blocks).forEach(([className, { range }])=>{
        parse_numeric_range__rspack_import_2_default()(range).forEach((l)=>{
            lineClassNames[l] ??= [];
            lineClassNames[l].push(className);
        });
    });
    return {
        code: lines.join('\n'),
        lineClassNames
    };
}
/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 */ function parseLines(code, params) {
    // Historical behavior: we remove last line break
    const newCode = code.replace(/\r?\n$/, '');
    // Historical behavior: we try one strategy after the other
    // we don't support mixing metastring ranges + magic comments
    return parseCodeLinesFromMetastring(newCode, {
        ...params
    }) ?? parseCodeLinesFromContent(newCode, {
        ...params
    });
}
/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */ function parseClassNameLanguage(className) {
    if (!className) {
        return undefined;
    }
    const languageClassName = className.split(' ').find((str)=>str.startsWith('language-'));
    return languageClassName?.replace(/language-/, '');
}
// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language) {
    return language?.toLowerCase();
}
function getLanguage(params) {
    return normalizeLanguage(params.language ?? parseClassNameLanguage(params.className) ?? params.defaultLanguage) ?? 'text'; // There's always a language, required by Prism;
}
/**
 * This ensures that we always have the code block language as className
 * For MDX code blocks this is provided automatically by MDX
 * For JSX code blocks, the language gets added by this function
 * This ensures both cases lead to a consistent HTML output
 */ function ensureLanguageClassName({ className, language }) {
    return (0,clsx__rspack_import_3/* ["default"] */.A)(className, language && !className?.includes(`language-${language}`) && `language-${language}`);
}
function createCodeBlockMetadata(params) {
    const language = getLanguage({
        language: params.language,
        defaultLanguage: params.defaultLanguage,
        className: params.className
    });
    const { lineClassNames, code } = parseLines(params.code, {
        metastring: params.metastring,
        magicComments: params.magicComments,
        language
    });
    const className = ensureLanguageClassName({
        className: params.className,
        language
    });
    const title = parseCodeBlockTitle(params.metastring) || params.title;
    const lineNumbersStart = getLineNumbersStart({
        showLineNumbers: params.showLineNumbers,
        metastring: params.metastring
    });
    return {
        codeInput: params.code,
        code,
        className,
        language,
        title,
        lineNumbersStart,
        lineClassNames
    };
}
function getPrismCssVariables(prismTheme) {
    const mapping = {
        color: '--prism-color',
        backgroundColor: '--prism-background-color'
    };
    const properties = {};
    Object.entries(prismTheme.plain).forEach(([key, value])=>{
        const varName = mapping[key];
        if (varName && typeof value === 'string') {
            properties[varName] = value;
        }
    });
    return properties;
}
const CodeBlockContext = /*#__PURE__*/ (0,react__rspack_import_1.createContext)(null);
function CodeBlockContextProvider({ metadata, wordWrap, children }) {
    // Should we optimize this in 2 contexts?
    // Unlike metadata, wordWrap is stateful and likely to trigger re-renders
    const value = (0,react__rspack_import_1.useMemo)(()=>{
        return {
            metadata,
            wordWrap
        };
    }, [
        metadata,
        wordWrap
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CodeBlockContext.Provider, {
        value: value,
        children: children
    });
}
function useCodeBlockContext() {
    const value = (0,react__rspack_import_1.useContext)(CodeBlockContext);
    if (value === null) {
        throw new _reactUtils__rspack_import_4/* .ReactContextError */.dV('CodeBlockContextProvider');
    }
    return value;
} //# sourceMappingURL=codeBlockUtils.js.map


},
3251(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  h: () => (useFilteredAndTreeifiedTOC)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function treeifyTOC(flatTOC) {
    const headings = flatTOC.map((heading)=>({
            ...heading,
            parentIndex: -1,
            children: []
        }));
    // Keep track of which previous index would be the current heading's direct
    // parent. Each entry <i> is the last index of the `headings` array at heading
    // level <i>. We will modify these indices as we iterate through all headings.
    // e.g. if an ### H3 was last seen at index 2, then prevIndexForLevel[3] === 2
    // indices 0 and 1 will remain unused.
    const prevIndexForLevel = Array(7).fill(-1);
    headings.forEach((curr, currIndex)=>{
        // Take the last seen index for each ancestor level. the highest index will
        // be the direct ancestor of the current heading.
        const ancestorLevelIndexes = prevIndexForLevel.slice(2, curr.level);
        curr.parentIndex = Math.max(...ancestorLevelIndexes);
        // Mark that curr.level was last seen at the current index.
        prevIndexForLevel[curr.level] = currIndex;
    });
    const rootNodes = [];
    // For a given parentIndex, add each Node into that parent's `children` array
    headings.forEach((heading)=>{
        const { parentIndex, ...rest } = heading;
        if (parentIndex >= 0) {
            headings[parentIndex].children.push(rest);
        } else {
            rootNodes.push(rest);
        }
    });
    return rootNodes;
}
/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect. Memoized for performance.
 */ function useTreeifiedTOC(toc) {
    return useMemo(()=>treeifyTOC(toc), [
        toc
    ]);
}
function filterTOC({ toc, minHeadingLevel, maxHeadingLevel }) {
    function isValid(item) {
        return item.level >= minHeadingLevel && item.level <= maxHeadingLevel;
    }
    return toc.flatMap((item)=>{
        const filteredChildren = filterTOC({
            toc: item.children,
            minHeadingLevel,
            maxHeadingLevel
        });
        if (isValid(item)) {
            return [
                {
                    ...item,
                    children: filteredChildren
                }
            ];
        }
        return filteredChildren;
    });
}
/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect, applying the `minHeadingLevel` and `maxHeadingLevel`.
 * Memoized for performance.
 *
 * **Important**: this is not the same as `useTreeifiedTOC(toc.filter(...))`,
 * because we have to filter the TOC after it has been treeified. This is mostly
 * to ensure that weird TOC structures preserve their semantics. For example, an
 * h3-h2-h4 sequence should not be treeified as an "h3 > h4" hierarchy with
 * min=3, max=4, but should rather be "[h3, h4]" (since the h2 heading has split
 * the two headings and they are not parent-children)
 */ function useFilteredAndTreeifiedTOC({ toc, minHeadingLevel, maxHeadingLevel }) {
    return (0,react__rspack_import_0.useMemo)(()=>filterTOC({
            toc: treeifyTOC(toc),
            minHeadingLevel,
            maxHeadingLevel
        }), [
        toc,
        minHeadingLevel,
        maxHeadingLevel
    ]);
} //# sourceMappingURL=tocUtils.js.map


},
8453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

};
;