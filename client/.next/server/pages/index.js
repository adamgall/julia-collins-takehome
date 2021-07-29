(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: external "react-bootstrap"
var external_react_bootstrap_namespaceObject = require("react-bootstrap");;
;// CONCATENATED MODULE: ./components/ModalData.jsx



/* eslint-disable react/destructuring-assignment */



const ModalData = props => {
  /**
   *  Component renders on initial rendering of application, using the setShowData hook
   */
  function onClick() {
    props.setShowData(false);
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "modal",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Modal.Dialog, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Modal.Header, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Modal.Title, {
          id: "example-modal-sizes-title-sm",
          children: "Your Dream, Immortalized In The Stars"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Modal.Body, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [props.starData.wish, "- Star Speak"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Modal.Footer, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Button, {
          onClick: () => onClick(),
          variant: "secondary",
          children: "Close"
        })
      })]
    })
  });
};

/* harmony default export */ var components_ModalData = (ModalData);
;// CONCATENATED MODULE: ./public/starr.png
/* harmony default export */ var starr = ({"src":"/_next/static/image/public/starr.e182fd7442630843d8ce881b2dc241a0.png","height":294,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2UlEQVR42mMAgZ+Xw5lB9K/zIYq/LoTxgti/T3kwMqCD36ftj/y8Gp6MIvjzSrTwx3ct4r/PesT8OWH8/+fV0Kv/d3Fr/dsnL/XrYggnUJdz9u+zLv9/XfT+//uM/V8g/v/npOn/X+c97/+4miDLAAL/DsrX/zlpDhR0+f77tM3fn1eC3n2/m2YMt+bzi1rJn5cD/v85ZQlU5Pr/30G57SDxP6d0WSDuuBYZ/ueU1d+/h7XKftyIWv37jNPL/9uFuRCuP+Op++eYlSrc4Vej7H6f8eBnYGBgAAAtV3EqqsqM7QAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/Stars.jsx



/* eslint-disable react/prop-types */





const Stars = props => {
  const {
    0: starData,
    1: setData
  } = (0,external_react_.useState)('');
  const {
    0: showData,
    1: setShowData
  } = (0,external_react_.useState)(false);
  /**
  * OnClick fn takes in each individual star's data, and uses a hook to
  * setData and pass to the ModalData component to display hashed wish
  * @param {object} starData
  */

  function onClick(data) {
    setData(data);
    setShowData(true);
  }

  const starArr = [];

  for (let i = 0; i < props.dbData.length; i += 1) {
    starArr.push( /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      onClick: () => onClick(props.dbData[i]),
      id: "star-child",
      width: 50,
      height: 50,
      src: starr
    }, i));
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "star-container",
    children: [starArr, showData ? /*#__PURE__*/jsx_runtime_.jsx(components_ModalData, {
      setShowData: setShowData,
      starData: starData
    }) : '']
  });
};

/* harmony default export */ var components_Stars = (Stars);
;// CONCATENATED MODULE: external "web3"
var external_web3_namespaceObject = require("web3");;
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: external "framer-motion"
var external_framer_motion_namespaceObject = require("framer-motion");;
;// CONCATENATED MODULE: ./public/rocket.png
/* harmony default export */ var rocket = ({"src":"/_next/static/image/public/rocket.e0a2b67cf15e9468ae2520b8cb6558a3.png","height":360,"width":360,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVR42mP4//8/w9OpBUwg+pmTwZwrIgyzQOz/07PAYgxfb+4EM/7/fyjzZMeM/7fXdv37/Gi+BEjs1o4ORoY//28xgzj/nh0ouHxy3f/Tu+b+f3O8NxMk9vHuEmYGEOMgA4P47Z7SX68e7Pz/5NKy/yfyvH70MzCIgq0AEfcYGDguB7ncfL6o6e/lCdn/dspwXz/IwMAGVnDFWZARxLjIwCD2fHrr3stN+XvygWyQ2A4GBkYGEOPFrV9gh/5+v/vsz7vrT4HYD148ZoZb8fd6Epjz67xv+o89vqkg9p/j8WAxAHp2oiLs2idNAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/Input.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-shadow */








const Input = () => {
  const {
    0: wish,
    1: setWish
  } = (0,external_react_.useState)('');
  const {
    0: web3,
    1: setProvider
  } = (0,external_react_.useState)(null);
  const {
    0: account,
    1: setAccounts
  } = (0,external_react_.useState)(null);
  const {
    0: contractInstance,
    1: setContract
  } = (0,external_react_.useState)(null);
  /**
   * On hover of rocket, renders a string to the client indicating click functionality
   * @param {props} props
   */

  const renderTooltip = props => /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Tooltip, _objectSpread(_objectSpread({
    id: "button-tooltip"
  }, props), {}, {
    children: "Click to Empty the Sky, and Start Anew."
  }));
  /**
   * On rendering of Input component, establishes connection with web3 provider,
   * gets reference to contract instance, and accesses an account used to make calls to contract
   */


  (0,external_react_.useEffect)(async () => {
    const web3 = new (external_web3_default())(new (external_web3_default()).providers.WebsocketProvider('ws://localhost:7545'));
    setProvider(web3); // const web3 = new Web3(new Web3.providers.WebsocketProvider(URL));

    const contract = new web3.eth.Contract([{"anonymous":false,"inputs":[],"name":"DrainWishes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"wish","type":"bytes32"}],"name":"WishMade","type":"event"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"_wish","type":"bytes32"}],"name":"hashWish","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"drainWishes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}], "0x343C47454BcddA42286B7fBB3482F884529E93A8");
    setContract(contract);
    const accounts = await web3.eth.getAccounts();
    setAccounts(accounts[0]);
  }, []);
  /**
  * When client clicks the #rocket, onSend fn makes an API request to empty the
  * mongoDB collection 'wishes'
  */

  const onSend = async () => {
    try {
      await contractInstance.methods.drainWishes().send({
        from: account
      });
    } catch (error) {
      console.log('Error when calling contract to drainWishes', error);
    }

    setTimeout(() => {
      router_default().push({
        pathname: '/'
      });
    }, 1000);
  };
  /**
  * After client inputs a string (bytes32), the onSubmit fn makes a call to
  * the contract's hashWish fn, emitting an event which the server will pick up.
  * An api will then hash the string and send to db for storage
  * @param {*} e
  */


  const onSubmit = async e => {
    e.preventDefault();
    const params = web3.utils.asciiToHex(wish).padEnd(66, '0');

    try {
      await contractInstance.methods.hashWish(params).send({
        from: account
      });
    } catch (error) {
      console.log('Error when calling contract to hashWish', error);
    }

    setWish(''); // setTimeout and reroute to index.js so getInitialProps can update state of stars

    setTimeout(() => {
      router_default().push({
        pathname: '/'
      });
    }, 1000);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "input-form",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.InputGroup, {
        className: "mb-3",
        id: "form",
        onSubmit: onSubmit,
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Button, {
          onClick: onSubmit,
          variant: "outline-secondary",
          id: "button-addon1",
          children: "Button"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.FormControl, {
          "aria-label": "form-button",
          "aria-describedby": "basic-addon1",
          value: wish,
          onChange: e => setWish(e.target.value)
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.OverlayTrigger, {
      style: {
        zIndex: '7',
        fontSize: '16px'
      },
      placement: "top",
      delay: {
        show: 250,
        hide: 400
      },
      overlay: renderTooltip,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_namespaceObject.motion.div, {
        animate: {
          y: -30,
          rotate: 360
        },
        transition: {
          type: 'spring',
          stiffness: 13
        },
        id: "rocket-container",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          className: "rocket",
          onClick: onSend,
          src: rocket,
          width: 80,
          height: 100,
          alt: "rocket"
        })
      })
    })]
  });
};

/* harmony default export */ var components_Input = (Input);
;// CONCATENATED MODULE: ./components/InitialModal.jsx



function InitialModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function InitialModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { InitialModal_ownKeys(Object(source), true).forEach(function (key) { InitialModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { InitialModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function InitialModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/prop-types */

/* eslint-disable react/destructuring-assignment */



const InitialModal = props => /*#__PURE__*/jsx_runtime_.jsx("div", {
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Modal, InitialModal_objectSpread(InitialModal_objectSpread({}, props), {}, {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Modal.Header, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Modal.Title, {
        id: "contained-modal-title-vcenter",
        children: "Welcome to SpaceHash"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Modal.Body, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Enter in your wishes, hopes, and dreams to be immortalized in the stars forever.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "We will hash them away into the bitverse, keeping them secret and protected."]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Modal.Footer, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Button, {
        onClick: props.onHide,
        children: "Close"
      })
    })]
  }))
});

/* harmony default export */ var components_InitialModal = (InitialModal);
;// CONCATENATED MODULE: ./pages/index.jsx



/* eslint-disable react/prop-types */

/* eslint-disable react/destructuring-assignment */







class Home extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };
  }
  /**
   * On intial rendering of app or rerendering through routing, fn makes
   * request to api to access all hased wishes in db
   * @returns hashed wishes stored in db
   */


  static async getInitialProps() {
    let dbData;

    try {
      const results = await external_axios_default().get('http://localhost:3001/getWishes');
      dbData = results.data;
    } catch (e) {
      console.log('error fetching initial props', e);
    }

    return {
      dbData
    };
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "SpaceHash"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
          integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
          crossOrigin: "anonymous"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(components_InitialModal, {
        show: this.state.modal,
        onHide: () => this.setState({
          modal: false
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Stars, {
        dbData: this.props.dbData
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Input, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "stars"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "twinkling"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "clouds"
      })]
    });
  }

}

/* harmony default export */ var pages = (Home);

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [821,675], function() { return __webpack_exec__(176); });
module.exports = __webpack_exports__;

})();