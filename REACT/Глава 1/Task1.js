"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list1 = ["1", "2", "3"];
var list2 = ["4", "5", "6"];

function App() {
  var items = list1.concat(list2);
  return _react2.default.createElement(
    "div",
    { className: "App" },
    _react2.default.createElement(
      "h1",
      null,
      "Items:"
    ),
    _react2.default.createElement(
      "ul",
      null,
      items.map(function (item) {
        return _react2.default.createElement(
          "li",
          null,
          item
        );
      })
    )
  );
}

var rootElement = document.getElementById("root");
_reactDom2.default.render(_react2.default.createElement(App, null), rootElement);