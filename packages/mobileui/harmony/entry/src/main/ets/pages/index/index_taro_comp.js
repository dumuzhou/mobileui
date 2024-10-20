import { createPageConfig } from '../../npm/@tarojs/plugin-framework-react/dist/runtime';
import { _ as _inherits, a as _createSuper, b as _classCallCheck, d as _defineProperty, e as _assertThisInitialized, c as _createClass } from '../../vendors.js';
import { Component } from '../../npm/react';
import { TaroViewTagName, TaroTextTagName } from '../../npm/@tarojs/components';
import { jsx, jsxs } from '../../npm/react/jsx-runtime';

var Index = /* @__PURE__ */function (_Component) {
  _inherits(Index2, _Component);
  var _super = _createSuper(Index2);
  function Index2(props) {
    var _this;
    _classCallCheck(this, Index2);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "linkingListener", void 0);
    _this.state = {
      text: "哈哈哈"
    };
    return _this;
  }
  _createClass(Index2, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "render",
    value: function render() {
      return /* @__PURE__ */jsx(TaroViewTagName, {
        className: "index",
        children: /* @__PURE__ */jsxs(TaroTextTagName, {
          children: ["11", this.state.text]
        })
      });
    }
  }]);
  return Index2;
}(Component);

var config = {
  "navigationStyle": "custom"
};
const index = (function () {
  return createPageConfig(Index, 'pages/index/index', config);
});

export { config, index as default };
//# sourceMappingURL=index_taro_comp.js.map
