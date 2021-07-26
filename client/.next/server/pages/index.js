(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 695:
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
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./public/starr.png
/* harmony default export */ var starr = ({"src":"/_next/static/image/public/starr.e182fd7442630843d8ce881b2dc241a0.png","height":294,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2UlEQVR42mMAgZ+Xw5lB9K/zIYq/LoTxgti/T3kwMqCD36ftj/y8Gp6MIvjzSrTwx3ct4r/PesT8OWH8/+fV0Kv/d3Fr/dsnL/XrYggnUJdz9u+zLv9/XfT+//uM/V8g/v/npOn/X+c97/+4miDLAAL/DsrX/zlpDhR0+f77tM3fn1eC3n2/m2YMt+bzi1rJn5cD/v85ZQlU5Pr/30G57SDxP6d0WSDuuBYZ/ueU1d+/h7XKftyIWv37jNPL/9uFuRCuP+Op++eYlSrc4Vej7H6f8eBnYGBgAAAtV3EqqsqM7QAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: external "next/dynamic"
var dynamic_namespaceObject = require("next/dynamic");;
;// CONCATENATED MODULE: external "react-bootstrap"
var external_react_bootstrap_namespaceObject = require("react-bootstrap");;
;// CONCATENATED MODULE: ./components/ModalData.js





const ModalData = props => {
  function onClick() {
    props.setShowData(false);
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "modal",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Modal.Dialog, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Modal.Header, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Modal.Title, {
          children: "Your Wish, Immemorialized In The Stars"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Modal.Body, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: [props.starData._id, " - Star Speak"]
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
;// CONCATENATED MODULE: ./components/Stars.js








const Stars = props => {
  const {
    0: starData,
    1: setData
  } = (0,external_react_.useState)('');
  const {
    0: showData,
    1: setShowData
  } = (0,external_react_.useState)(false);

  function onClick(starData) {
    setData(starData);
    setShowData(true);
  }

  const starArr = [];

  for (let i = 0; i < props.dbData.length; i++) {
    starArr.push( /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      onClick: () => onClick(props.dbData[i]),
      id: "star-child",
      width: 50,
      height: 50,
      src: starr
    }));
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
// EXTERNAL MODULE: ../contractData.js
var contractData = __webpack_require__(825);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: ./components/Input.js









const Input = props => {
  const {
    0: wish,
    1: setWish
  } = (0,external_react_.useState)('');
  const {
    0: message,
    1: setMessage
  } = (0,external_react_.useState)('');

  const onSubmit = async e => {
    e.preventDefault();
    let web3; //getInitialProps migrate once connected
    //is client connected to provider? if yes...
    // set the provider you want from Web3.providers -- use local ganache

    web3 = new (external_web3_default())(new (external_web3_default()).providers.WebsocketProvider('ws://localhost:7545')); // const web3 = new Web3(new Web3.providers.WebsocketProvider(URL));  

    const contractInstance = new web3.eth.Contract(contractData.CONTRACT_ABI, contractData.CONTRACT_ADDRESS);
    const params = web3.utils.asciiToHex(wish).padEnd(66, "0");
    let accounts = await web3.eth.getAccounts();
    await contractInstance.methods.hashWish(params).send({
      from: accounts[0]
    });
    const results = await contractInstance.getPastEvents('WishMade', {});
    setWish(''); //setTimeout and reroute to index.js so getInitialProps can update state of stars

    setTimeout(() => {
      router_default().push({
        pathname: '/'
      });
    }, 1000);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
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
  });
};

/* harmony default export */ var components_Input = (Input);
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.js








class Home extends external_react_.Component {
  static async getInitialProps() {
    let dbData;

    try {
      let results = await external_axios_default().get('http://localhost:3001/getWishes');
      dbData = results.data;
      console.log(dbData);
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
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Stars, {
        dbData: this.props.dbData
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Input, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "stars"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "twinkling"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "clouds"
      })]
    });
  }

}

/* harmony default export */ var pages = (Home);

/***/ }),

/***/ 825:
/***/ (function(module) {

module.exports = {
  CONTRACT_ABI: [
    {
      "anonymous": false,
      "inputs": [],
      "name": "DrainWishes",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "wish",
          "type": "bytes32"
        }
      ],
      "name": "WishMade",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_wish",
          "type": "bytes32"
        }
      ],
      "name": "hashWish",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "drainWishes",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  CONTRACT_ADDRESS: '0xf665F60Cc1353d2Abb4aD5Af60AB32ca8c031D58'
}

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
var __webpack_exports__ = __webpack_require__.X(0, [821,675], function() { return __webpack_exec__(695); });
module.exports = __webpack_exports__;

})();