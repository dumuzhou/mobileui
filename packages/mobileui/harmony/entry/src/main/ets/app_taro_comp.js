import { createReactApp } from './npm/@tarojs/plugin-framework-react/dist/runtime';
import { _ as _inherits, a as _createSuper, b as _classCallCheck, c as _createClass } from './vendors.js';
import Taro from './npm/@tarojs/taro';
import * as React from './npm/react';
import { Component } from './npm/react';
import ReactDOM from './npm/@tarojs/react';

var App = /* @__PURE__ */function (_Component) {
  _inherits(App2, _Component);
  var _super = _createSuper(App2);
  function App2() {
    _classCallCheck(this, App2);
    return _super.apply(this, arguments);
  }
  _createClass(App2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Taro.eventCenter.on("__taroNotSupport", function (args) {
        Taro.showToast({
          title: "Taro ".concat("\"4.0.0-canary.9\"", " 版本在 ").concat("harmony", " 端不支持 ").concat(args.name, " ").concat(args.type === "method" ? "方法" : "组件"),
          icon: "error",
          duration: 2e3
        });
      });
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
    // this.props.children 是将要会渲染的页面
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return App2;
}(Component);

var config = {
  "pages": ["pages/index/index"],
  "subpackages": [],
  "window": {
    "backgroundColor": "#efefef",
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle": "black"
  },
  "tabBar": {
    "color": "#333333",
    "selectedColor": "#6190E8",
    "list": []
  },
  "rn": {
    "useNativeStack": true
  }
};
const app = (function () {
  return createReactApp(App, React, ReactDOM, config);
});

export { config, app as default };
//# sourceMappingURL=app_taro_comp.js.map
