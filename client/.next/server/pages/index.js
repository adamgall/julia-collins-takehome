(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 327:
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
;// CONCATENATED MODULE: ./components/Intro.js



const Intro = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "intro"
  });
};

/* harmony default export */ var components_Intro = (Intro);
;// CONCATENATED MODULE: external "react-bootstrap"
var external_react_bootstrap_namespaceObject = require("react-bootstrap");;
;// CONCATENATED MODULE: external "web3"
var external_web3_namespaceObject = require("web3");;
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_namespaceObject);
// EXTERNAL MODULE: ../contractData.js
var contractData = __webpack_require__(825);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./public/star.png
/* harmony default export */ var star = ({"src":"/_next/static/image/public/star.e66b966be1f3659d149399a22a840aee.png","height":766,"width":800,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5klEQVR42mMAgSc3PBhB9LsnkfKvHwQqgNhXTjmCxCDg7c9VYM6nlwmlr+55loPY///3QBQc2S4i8P+jAheI/eN91tFXd+1PMEAA164NsgIMW1cK2OxeL3zp8FaGVy/vBf64dNz817rFPK9P7VO5ev6wmh0DCDTXMGiuX6Zx8+Jxl//XT+n8f3JN9+7HRyY6DCDw4HoIO4j+/6t06vM73v/3bOD///ym4QKQ2NUTGmwMIPDvZ7PAu8ehz55fl0rpbuGMObZL6cWft+biDDDw/mm0zovbjk4w/oZlElZn9qvoMjAwMAAAdpBkMuivr9YAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/Stars.js





const Stars = props => {
  const ChipStyles = (0,external_react_.useRef)({
    position: 'absolute',
    top: Math.floor(Math.random() * 50),
    left: '50%',
    transform: 'translate(-50%, -50%)'
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "star-sky",
    children: props.dbData.map((star, i) => {
      /*#__PURE__*/
      jsx_runtime_.jsx(next_image.default, {
        id: "db-star",
        style: ChipStyles.current,
        width: 50,
        height: 50,
        alt: "star",
        src: star
      }, i);
    })
  });
};

/* harmony default export */ var components_Stars = (Stars);
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
    }); // await contractInstance.methods.hashWish(wish).send({
    //   from: accounts[0]
    // });

    console.log('hitting', accounts[0]);
    const results = await contractInstance.getPastEvents('WishMade', {});
    console.log('results!', results);
    setWish('');
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "input-form",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.InputGroup, {
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
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Stars, {
      dbData: props.dbData
    })]
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
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Intro, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Input, {
        dbData: this.props.dbData
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
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
var __webpack_exports__ = __webpack_require__.X(0, [821,675], function() { return __webpack_exec__(327); });
module.exports = __webpack_exports__;

})();