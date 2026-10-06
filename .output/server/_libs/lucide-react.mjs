import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "./react+tanstack__react-query.mjs";
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toKebabCase = (string) =>
  string?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function toLucideIconData(iconName, iconNode, aliases = []) {
  if (iconNode == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: toKebabCase(iconName),
    size: 24,
    node: iconNode,
    ...(aliases.length > 0 ? { aliases } : {}),
  };
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toCamelCase = (string) => {
  let out = "";
  let upperNext = false;
  for (const ch of string) {
    if (ch === "-" || ch === "_" || ch <= " ") {
      upperNext = out.length > 0;
      continue;
    }
    if (out.length === 0) out += ch.toLowerCase();
    else out += upperNext ? ch.toUpperCase() : ch;
    upperNext = false;
  }
  return out;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mergeClasses = (...classes) =>
  classes
    .filter((className, index, array) => {
      return (
        Boolean(className) &&
        className.trim() !== "" &&
        array.indexOf(className) === index
      );
    })
    .join(" ")
    .trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function isDefined(value) {
  return value !== null && value !== void 0;
}
function buildLucideIconNode(icon, params = {}) {
  const attributeNames = params.attributeNames ?? {};
  const getAttributeName = (attributeName) =>
    attributeNames[attributeName] ?? attributeName;
  const viewBoxWidth = icon.size ?? icon.width ?? defaultAttributes["width"];
  const viewBoxHeight = icon.size ?? icon.height ?? defaultAttributes["height"];
  const aliasClassNames =
    icon.aliases
      ?.filter((alias) => typeof alias === "string" && alias.trim() !== "")
      .map((alias) => `lucide-${alias}`) ?? [];
  const iconClassNames = [
    ...(icon.name ? [`lucide-${icon.name}`] : []),
    ...aliasClassNames,
  ];
  const classNamesFromClassName =
    params.className?.split(" ").filter(Boolean) ?? [];
  const className =
    params.includeDefaultClasses === false
      ? mergeClasses(...classNamesFromClassName)
      : mergeClasses("lucide", ...iconClassNames, ...classNamesFromClassName);
  const calculatedStrokeWidth = params.absoluteStrokeWidth
    ? (Number(params.strokeWidth ?? defaultAttributes["stroke-width"]) *
        Number(icon.size ?? icon.width ?? defaultAttributes["width"])) /
      Number(params.size ?? params.width ?? defaultAttributes["width"])
    : (params.strokeWidth ?? defaultAttributes["stroke-width"]);
  return [
    "svg",
    {
      ...Object.entries(defaultAttributes).reduce(
        (attrs, [attrName, value]) => {
          attrs[getAttributeName(attrName)] = value;
          return attrs;
        },
        {},
      ),
      ...("color" in params &&
        params.color && { [getAttributeName("stroke")]: params.color }),
      ...("size" in params &&
        isDefined(params.size) && {
          [getAttributeName("width")]: params.size,
          [getAttributeName("height")]: params.size,
        }),
      ...("width" in params &&
        isDefined(params.width) && {
          [getAttributeName("width")]: params.width,
        }),
      ...("height" in params &&
        isDefined(params.height) && {
          [getAttributeName("height")]: params.height,
        }),
      [getAttributeName("stroke-width")]: calculatedStrokeWidth,
      ...(className && { [getAttributeName("class")]: className }),
      [getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
      ...(params.hasA11yProp === false
        ? { [getAttributeName("aria-hidden")]: "true" }
        : {}),
      ...("attributes" in params && params.attributes),
    },
    icon.node.map((child) => {
      const [name, attrs, children] = child;
      const nextAttrs = params.nonScalingStroke
        ? {
            [getAttributeName("vector-effect")]: "non-scaling-stroke",
            ...attrs,
          }
        : attrs;
      return children ? [name, nextAttrs, children] : [name, nextAttrs];
    }),
  ];
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function buildLucideIconForReact(icon, params = {}) {
  return buildLucideIconNode(icon, {
    ...params,
    attributeNames: {
      ...params.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect",
    },
  });
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hasA11yProp = (props) => {
  for (const prop in props)
    if (prop.startsWith("aria-") || prop === "role" || prop === "title")
      return true;
  return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/context.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var LucideContext = (0, import_react.createContext)({});
var useLucideContext = () => (0, import_react.useContext)(LucideContext);
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Icon = (0, import_react.forwardRef)(
  (
    {
      color,
      size,
      width,
      height,
      strokeWidth,
      absoluteStrokeWidth,
      nonScalingStroke,
      className = "",
      children,
      iconNode = [],
      icon = {
        node: iconNode,
        aliases: [],
        size: 24,
      },
      ...rest
    },
    ref,
  ) => {
    const {
      size: contextSize = 24,
      strokeWidth: contextStrokeWidth = 2,
      absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
      nonScalingStroke: contextNonScalingStroke = false,
      color: contextColor = "currentColor",
      className: contextClass = "",
    } = useLucideContext() ?? {};
    const hasAccessibleProp = Boolean(children) || hasA11yProp(rest);
    const [name, svgAttributes, builtIconNode = []] = buildLucideIconForReact(
      icon,
      {
        color: color ?? contextColor,
        width: width ?? size ?? contextSize,
        height: height ?? size ?? contextSize,
        strokeWidth: strokeWidth ?? contextStrokeWidth,
        absoluteStrokeWidth: absoluteStrokeWidth ?? contextAbsoluteStrokeWidth,
        nonScalingStroke: nonScalingStroke ?? contextNonScalingStroke,
        className: mergeClasses(contextClass, className),
        hasA11yProp: hasAccessibleProp,
        attributes: rest,
      },
    );
    return (0, import_react.createElement)(
      name,
      {
        ref,
        ...svgAttributes,
      },
      [
        ...builtIconNode.map(([tag, attrs]) =>
          (0, import_react.createElement)(tag, attrs),
        ),
        ...(Array.isArray(children) ? children : [children]),
      ],
    );
  },
);
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
function createLucideIcon(iconDataOrName, iconNode = [], aliases = []) {
  const iconData =
    typeof iconDataOrName === "string"
      ? toLucideIconData(iconDataOrName, iconNode, aliases)
      : iconDataOrName;
  const Component = (0, import_react.forwardRef)(
    ({ className, ...props }, ref) =>
      (0, import_react.createElement)(Icon, {
        ref,
        icon: iconData,
        className,
        ...props,
      }),
  );
  if (iconData.name) Component.displayName = toPascalCase(iconData.name);
  return Component;
}
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/arrow-right.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$26 = {
  name: "arrow-right",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M5 12h14",
        key: "1ays0h",
      },
    ],
    [
      "path",
      {
        d: "m12 5 7 7-7 7",
        key: "xquz4c",
      },
    ],
  ],
};
__iconData$26.node;
var ArrowRight = createLucideIcon(__iconData$26);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$25 = {
  name: "arrow-up-right",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M7 7h10v10",
        key: "1tivn9",
      },
    ],
    [
      "path",
      {
        d: "M7 17 17 7",
        key: "1vkiza",
      },
    ],
  ],
};
__iconData$25.node;
var ArrowUpRight = createLucideIcon(__iconData$25);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/award.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$24 = {
  name: "award",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "8",
        r: "6",
        key: "1vp47v",
      },
    ],
  ],
};
__iconData$24.node;
var Award = createLucideIcon(__iconData$24);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/book-open.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$23 = {
  name: "book-open",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M12 5v16",
        key: "1f6ucr",
      },
    ],
    [
      "path",
      {
        d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
        key: "1fyvmf",
      },
    ],
  ],
};
__iconData$23.node;
var BookOpen = createLucideIcon(__iconData$23);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/calendar.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$22 = {
  name: "calendar",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M8 2v3",
        key: "1ioesn",
      },
    ],
    [
      "path",
      {
        d: "M16 2v3",
        key: "otl347",
      },
    ],
    [
      "rect",
      {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        key: "h1oib",
      },
    ],
    [
      "path",
      {
        d: "M3 9h18",
        key: "1pudct",
      },
    ],
  ],
};
__iconData$22.node;
var Calendar = createLucideIcon(__iconData$22);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/camera.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$21 = {
  name: "camera",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
        key: "18u6gg",
      },
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "13",
        r: "3",
        key: "1vg3eu",
      },
    ],
  ],
};
__iconData$21.node;
var Camera = createLucideIcon(__iconData$21);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$20 = {
  name: "chevron-down",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m6 9 6 6 6-6",
        key: "qrunsl",
      },
    ],
  ],
};
__iconData$20.node;
var ChevronDown = createLucideIcon(__iconData$20);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/circle-alert.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$19 = {
  name: "circle-alert",
  size: 24,
  node: [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay",
      },
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh",
      },
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90",
      },
    ],
  ],
  aliases: ["alert-circle"],
};
__iconData$19.node;
var CircleAlert = createLucideIcon(__iconData$19);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/circle-check.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$18 = {
  name: "circle-check",
  size: 24,
  node: [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay",
      },
    ],
    [
      "path",
      {
        d: "m16 9-5.5 5.5L8 12",
        key: "xofnsj",
      },
    ],
  ],
  aliases: ["check-circle-2"],
};
__iconData$18.node;
var CircleCheck = createLucideIcon(__iconData$18);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/clock.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$17 = {
  name: "clock",
  size: 24,
  node: [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay",
      },
    ],
    [
      "path",
      {
        d: "M12 6v6l4 2",
        key: "mmk7yg",
      },
    ],
  ],
};
__iconData$17.node;
var Clock = createLucideIcon(__iconData$17);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/cloud.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$16 = {
  name: "cloud",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
        key: "p7xjir",
      },
    ],
  ],
};
__iconData$16.node;
var Cloud = createLucideIcon(__iconData$16);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/code-xml.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$15 = {
  name: "code-xml",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m18 16 4-4-4-4",
        key: "1inbqp",
      },
    ],
    [
      "path",
      {
        d: "m6 8-4 4 4 4",
        key: "15zrgr",
      },
    ],
    [
      "path",
      {
        d: "m14.5 4-5 16",
        key: "e7oirm",
      },
    ],
  ],
  aliases: ["code-2"],
};
__iconData$15.node;
var CodeXml = createLucideIcon(__iconData$15);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/external-link.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$14 = {
  name: "external-link",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M15 3h6v6",
        key: "1q9fwt",
      },
    ],
    [
      "path",
      {
        d: "M10 14 21 3",
        key: "gplh6r",
      },
    ],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
};
__iconData$14.node;
var ExternalLink = createLucideIcon(__iconData$14);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/folder-git-2.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$13 = {
  name: "folder-git-2",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M18 19a5 5 0 0 1-5-5v8",
        key: "sz5oeg",
      },
    ],
    [
      "path",
      {
        d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
        key: "1w6njk",
      },
    ],
    [
      "circle",
      {
        cx: "13",
        cy: "12",
        r: "2",
        key: "1j92g6",
      },
    ],
    [
      "circle",
      {
        cx: "20",
        cy: "19",
        r: "2",
        key: "1obnsp",
      },
    ],
  ],
};
__iconData$13.node;
var FolderGit2 = createLucideIcon(__iconData$13);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/loader-circle.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$12 = {
  name: "loader-circle",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M21 12a9 9 0 1 1-6.219-8.56",
        key: "13zald",
      },
    ],
  ],
  aliases: ["loader-2"],
};
__iconData$12.node;
var LoaderCircle = createLucideIcon(__iconData$12);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/mail.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$11 = {
  name: "mail",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
        key: "132q7q",
      },
    ],
    [
      "rect",
      {
        x: "2",
        y: "4",
        width: "20",
        height: "16",
        rx: "2",
        key: "izxlao",
      },
    ],
  ],
};
__iconData$11.node;
var Mail = createLucideIcon(__iconData$11);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/map-pin.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$10 = {
  name: "map-pin",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7",
      },
    ],
  ],
};
__iconData$10.node;
var MapPin = createLucideIcon(__iconData$10);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/menu.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$9 = {
  name: "menu",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M4 5h16",
        key: "1tepv9",
      },
    ],
    [
      "path",
      {
        d: "M4 12h16",
        key: "1lakjw",
      },
    ],
    [
      "path",
      {
        d: "M4 19h16",
        key: "1djgab",
      },
    ],
  ],
};
__iconData$9.node;
var Menu = createLucideIcon(__iconData$9);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/mic.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$8 = {
  name: "mic",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M12 19v3",
        key: "npa21l",
      },
    ],
    [
      "path",
      {
        d: "M19 10v2a7 7 0 0 1-14 0v-2",
        key: "1vc78b",
      },
    ],
    [
      "rect",
      {
        x: "9",
        y: "2",
        width: "6",
        height: "13",
        rx: "3",
        key: "s6n7sd",
      },
    ],
  ],
};
__iconData$8.node;
var Mic = createLucideIcon(__iconData$8);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/moon.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$7 = {
  name: "moon",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ],
};
__iconData$7.node;
var Moon = createLucideIcon(__iconData$7);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/rocket.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$6 = {
  name: "rocket",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
        key: "qeys4",
      },
    ],
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
        key: "u4xsad",
      },
    ],
    [
      "path",
      {
        d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
        key: "676m9",
      },
    ],
    [
      "path",
      {
        d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",
        key: "92ym6u",
      },
    ],
  ],
};
__iconData$6.node;
var Rocket = createLucideIcon(__iconData$6);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/sun.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$5 = {
  name: "sun",
  size: 24,
  node: [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "4",
        key: "4exip2",
      },
    ],
    [
      "path",
      {
        d: "M12 2v2",
        key: "tus03m",
      },
    ],
    [
      "path",
      {
        d: "M12 20v2",
        key: "1lh1kg",
      },
    ],
    [
      "path",
      {
        d: "m4.93 4.93 1.41 1.41",
        key: "149t6j",
      },
    ],
    [
      "path",
      {
        d: "m17.66 17.66 1.41 1.41",
        key: "ptbguv",
      },
    ],
    [
      "path",
      {
        d: "M2 12h2",
        key: "1t8f8n",
      },
    ],
    [
      "path",
      {
        d: "M20 12h2",
        key: "1q8mjw",
      },
    ],
    [
      "path",
      {
        d: "m6.34 17.66-1.41 1.41",
        key: "1m8zz5",
      },
    ],
    [
      "path",
      {
        d: "m19.07 4.93-1.41 1.41",
        key: "1shlcs",
      },
    ],
  ],
};
__iconData$5.node;
var Sun = createLucideIcon(__iconData$5);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/trending-up.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$4 = {
  name: "trending-up",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M16 7h6v6",
        key: "box55l",
      },
    ],
    [
      "path",
      {
        d: "m22 7-8.5 8.5-5-5L2 17",
        key: "1t1m79",
      },
    ],
  ],
};
__iconData$4.node;
var TrendingUp = createLucideIcon(__iconData$4);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/trophy.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$3 = {
  name: "trophy",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",
        key: "pwuv1l",
      },
    ],
    [
      "path",
      {
        d: "M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",
        key: "1y54w1",
      },
    ],
    [
      "path",
      {
        d: "M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",
        key: "e30mpu",
      },
    ],
    [
      "path",
      {
        d: "M4 22h16",
        key: "57wxv0",
      },
    ],
    [
      "path",
      {
        d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
        key: "1mhfuq",
      },
    ],
    [
      "path",
      {
        d: "M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",
        key: "i0yafy",
      },
    ],
  ],
};
__iconData$3.node;
var Trophy = createLucideIcon(__iconData$3);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/user-check.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$2 = {
  name: "user-check",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m16 11 2 2 4-4",
        key: "9rsbq5",
      },
    ],
    [
      "path",
      {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq",
      },
    ],
    [
      "circle",
      {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8",
      },
    ],
  ],
};
__iconData$2.node;
var UserCheck = createLucideIcon(__iconData$2);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/users.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData$1 = {
  name: "users",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq",
      },
    ],
    [
      "path",
      {
        d: "M16 3.128a4 4 0 0 1 0 7.744",
        key: "16gr8j",
      },
    ],
    [
      "path",
      {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd",
      },
    ],
    [
      "circle",
      {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8",
      },
    ],
  ],
};
__iconData$1.node;
var Users = createLucideIcon(__iconData$1);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/x.mjs
/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var __iconData = {
  name: "x",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M18 6 6 18",
        key: "1bl5f8",
      },
    ],
    [
      "path",
      {
        d: "m6 6 12 12",
        key: "d8bk6v",
      },
    ],
  ],
};
__iconData.node;
var X = createLucideIcon(__iconData);
//#endregion
export {
  Calendar as C,
  ArrowRight as D,
  ArrowUpRight as E,
  Camera as S,
  Award as T,
  Cloud as _,
  TrendingUp as a,
  CircleAlert as b,
  Moon as c,
  MapPin as d,
  Mail as f,
  CodeXml as g,
  ExternalLink as h,
  Trophy as i,
  Mic as l,
  FolderGit2 as m,
  Users as n,
  Sun as o,
  LoaderCircle as p,
  UserCheck as r,
  Rocket as s,
  X as t,
  Menu as u,
  Clock as v,
  BookOpen as w,
  ChevronDown as x,
  CircleCheck as y,
};
