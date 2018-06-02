/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/assets/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ts-observer-pattern/Subject.ts":
/*!*****************************************************!*\
  !*** ./node_modules/ts-observer-pattern/Subject.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    exports.__esModule = true;\n    var Subject = /** @class */ (function () {\n        function Subject() {\n            this.observers = [];\n        }\n        Subject.prototype.attach = function (observer) {\n            this.observers.push(observer);\n            return this;\n        };\n        Subject.prototype.detach = function (observer) {\n            this.observers = this.observers.filter(function (item) { return item !== observer; });\n            return this;\n        };\n        Subject.prototype.notify = function (data) {\n            this.observers.forEach(function (observer) { return observer.update(data); });\n            return this;\n        };\n        return Subject;\n    }());\n    exports.Subject = Subject;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./node_modules/ts-observer-pattern/Subject.ts?");

/***/ }),

/***/ "./resources/assets/ts/Enums/Marker.ts":
/*!*********************************************!*\
  !*** ./resources/assets/ts/Enums/Marker.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    exports.__esModule = true;\n    var Marker;\n    (function (Marker) {\n        Marker[\"Xis\"] = \"xis\";\n        Marker[\"Circle\"] = \"circle\";\n    })(Marker = exports.Marker || (exports.Marker = {}));\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./resources/assets/ts/Enums/Marker.ts?");

/***/ }),

/***/ "./resources/assets/ts/Enums/Mode.ts":
/*!*******************************************!*\
  !*** ./resources/assets/ts/Enums/Mode.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    exports.__esModule = true;\n    var Mode;\n    (function (Mode) {\n        Mode[\"OnePlayer\"] = \"oneplayer\";\n        Mode[\"Multiplayer\"] = \"multiplayer\";\n    })(Mode = exports.Mode || (exports.Mode = {}));\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./resources/assets/ts/Enums/Mode.ts?");

/***/ }),

/***/ "./resources/assets/ts/Models/Computer.ts":
/*!************************************************!*\
  !*** ./resources/assets/ts/Models/Computer.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    exports.__esModule = true;\n    var Computer = /** @class */ (function () {\n        function Computer() {\n        }\n        Computer.prototype.play = function (tictac, board) {\n            // Capturar os botões e escolher um que será passado para os métodos abaixo\n            var activeButtons = Array.prototype.filter.call(board.getButtons(), function (cell) { return cell.getAttribute(\"disabled\") === null; });\n            var random = Math.floor(Math.random() * activeButtons.length);\n            board.mark(tictac.getCurrentPlayer(), activeButtons[random]);\n            tictac.update(activeButtons[random]);\n            tictac.exchangeTurns();\n        };\n        return Computer;\n    }());\n    exports.Computer = Computer;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./resources/assets/ts/Models/Computer.ts?");

/***/ }),

/***/ "./resources/assets/ts/Models/ModeSelector.ts":
/*!****************************************************!*\
  !*** ./resources/assets/ts/Models/ModeSelector.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    exports.__esModule = true;\n    var ModeSelector = /** @class */ (function () {\n        function ModeSelector(mode) {\n            this.mode = mode;\n        }\n        ModeSelector.prototype.setMode = function (mode) {\n            this.mode = mode;\n        };\n        ModeSelector.prototype.getMode = function () {\n            return this.mode;\n        };\n        return ModeSelector;\n    }());\n    exports.ModeSelector = ModeSelector;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./resources/assets/ts/Models/ModeSelector.ts?");

/***/ }),

/***/ "./resources/assets/ts/Models/Player.ts":
/*!**********************************************!*\
  !*** ./resources/assets/ts/Models/Player.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    exports.__esModule = true;\n    var Player = /** @class */ (function () {\n        function Player(nickname, marker) {\n            this.nickname = nickname;\n            this.marker = marker;\n        }\n        Player.prototype.getMarker = function () {\n            return this.marker;\n        };\n        Player.prototype.getNickName = function () {\n            return this.nickname;\n        };\n        return Player;\n    }());\n    exports.Player = Player;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./resources/assets/ts/Models/Player.ts?");

/***/ }),

/***/ "./resources/assets/ts/Models/TicTacToe.ts":
/*!*************************************************!*\
  !*** ./resources/assets/ts/Models/TicTacToe.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../Enums/Mode */ \"./resources/assets/ts/Enums/Mode.ts\"), __webpack_require__(/*! ../Models/Computer */ \"./resources/assets/ts/Models/Computer.ts\"), __webpack_require__(/*! ./../../../../node_modules/ts-observer-pattern/Subject */ \"./node_modules/ts-observer-pattern/Subject.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Mode_1, Computer_1, Subject_1) {\n    \"use strict\";\n    exports.__esModule = true;\n    var TicTacToe = /** @class */ (function (_super) {\n        __extends(TicTacToe, _super);\n        function TicTacToe(players, board, view, mode) {\n            var _this = _super.call(this) || this;\n            _this.players = players;\n            _this.board = board;\n            _this.view = view;\n            _this.mode = mode;\n            _this.ended = false;\n            _this.resultContainer = document.createElement(\"div\");\n            _this.resultContainer.classList.add(\"result-container\");\n            if (_this.mode === Mode_1.Mode.OnePlayer) {\n                _this.computer = new Computer_1.Computer;\n            }\n            _this.boardVectors = [\n                [NaN, NaN, NaN],\n                [NaN, NaN, NaN],\n                [NaN, NaN, NaN]\n            ];\n            _this.addListeners();\n            return _this;\n        }\n        TicTacToe.prototype.addListeners = function () {\n            var _this = this;\n            this.board.getBoard().addEventListener(\"click\", function (e) {\n                var button = e.target;\n                _this.board.mark(_this.currentPlayer, button);\n                _this.update(button);\n                _this.exchangeTurns();\n            });\n        };\n        TicTacToe.prototype.update = function (button) {\n            var positions = button.getAttribute(\"data-position\").split(\"-\");\n            button.disabled = true;\n            this.boardVectors[positions[0]][positions[1]] = this.currentPlayer.getMarker();\n            this.verify();\n            console.log(this.boardVectors);\n            return this;\n        };\n        TicTacToe.prototype.setcurrentPlayer = function (player) {\n            this.currentPlayer = player;\n            var next = this.currentPlayer === this.players.player1\n                ? this.players.player2\n                : this.players.player1;\n            this.notify({\n                current: this.currentPlayer.getMarker(),\n                next: next.getMarker()\n            });\n            this.view.update(this.currentPlayer);\n        };\n        TicTacToe.prototype.getCurrentPlayer = function () {\n            return this.currentPlayer;\n        };\n        TicTacToe.prototype.exchangeTurns = function () {\n            if (this.currentPlayer === this.players.player1) {\n                this.setcurrentPlayer(this.players.player2);\n            }\n            else {\n                this.setcurrentPlayer(this.players.player1);\n            }\n        };\n        TicTacToe.prototype.verify = function () {\n            if (!this.boardVectors\n                .reduce(function (pre, cur) { return pre.concat(cur); }, [])\n                .some(function (cell) { return typeof cell === \"number\"; })) {\n                this.finishGame(\"That was a draw\");\n                this.ended = true;\n                return;\n            }\n            //Horizontals\n            for (var i = 0; i < 3; i++) {\n                this.areEqual(this.boardVectors[i]);\n            }\n            //Verticals\n            for (var i = 0; i < 3; i++) {\n                this.areEqual([\n                    this.boardVectors[0][i],\n                    this.boardVectors[1][i],\n                    this.boardVectors[2][i]\n                ]);\n            }\n            // Transversals\n            this.areEqual([\n                this.boardVectors[0][0],\n                this.boardVectors[1][1],\n                this.boardVectors[2][2]\n            ]);\n            this.areEqual([\n                this.boardVectors[0][2],\n                this.boardVectors[1][1],\n                this.boardVectors[2][0]\n            ]);\n        };\n        TicTacToe.prototype.areEqual = function () {\n            var _this = this;\n            var params = [];\n            for (var _i = 0; _i < arguments.length; _i++) {\n                params[_i] = arguments[_i];\n            }\n            if (params[0][0] === params[0][1] && params[0][1] === params[0][2]) {\n                if (this.players.player1.getMarker() === params[0][0]) {\n                    this.finishGame(this.players.player1.getNickName() + \" wins\");\n                    this.ended = true;\n                }\n                else {\n                    this.finishGame(this.players.player2.getNickName() + \" wins\");\n                    this.ended = true;\n                }\n            }\n            else {\n                console.log(this.currentPlayer);\n                // Checa se é a vez do computador para ele então jogar\n                setTimeout(function () {\n                    if (_this.mode === Mode_1.Mode.OnePlayer\n                        && _this.currentPlayer === _this.players.player2\n                        && !_this.ended) {\n                        _this.computer.play(_this, _this.board);\n                    }\n                    ;\n                }, 1000);\n            }\n        };\n        TicTacToe.prototype.finishGame = function (text) {\n            this.showResult(text);\n            setTimeout(this.resetGame.bind(this), 2000);\n        };\n        TicTacToe.prototype.showResult = function (text) {\n            var container = document.querySelector(\"#app\");\n            container.appendChild(this.resultContainer);\n            this.resultContainer.innerHTML = \"<p>\" + text + \"</p>\";\n            this.resultContainer.classList.remove(\"hidden\");\n        };\n        TicTacToe.prototype.resetGame = function () {\n            var _this = this;\n            this.boardVectors = [\n                [NaN, NaN, NaN],\n                [NaN, NaN, NaN],\n                [NaN, NaN, NaN]\n            ];\n            Array.prototype.forEach.call(this.board.getButtons(), function (button) {\n                button.disabled = false;\n                button.classList.remove(_this.board.getXClass());\n                button.classList.remove(_this.board.getCircleClass());\n            });\n            this.ended = false;\n            this.resultContainer.classList.add(\"hidden\");\n            this.verify();\n        };\n        return TicTacToe;\n    }(Subject_1.Subject));\n    exports.TicTacToe = TicTacToe;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./resources/assets/ts/Models/TicTacToe.ts?");

/***/ }),

/***/ "./resources/assets/ts/Views/Board.ts":
/*!********************************************!*\
  !*** ./resources/assets/ts/Views/Board.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../Enums/Marker */ \"./resources/assets/ts/Enums/Marker.ts\"), __webpack_require__(/*! ./../../../../node_modules/ts-observer-pattern/Subject */ \"./node_modules/ts-observer-pattern/Subject.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Marker_1, Subject_1) {\n    \"use strict\";\n    exports.__esModule = true;\n    var Board = /** @class */ (function (_super) {\n        __extends(Board, _super);\n        function Board(container, board, buttons) {\n            var _this = _super.call(this) || this;\n            _this.container = container;\n            _this.board = board;\n            _this.buttons = buttons;\n            _this.xClass = \"xis\";\n            _this.circleClass = \"circle\";\n            return _this;\n        }\n        Board.prototype.update = function (data) {\n            this.container.classList.add(data.current);\n            this.container.classList.remove(data.next);\n            return this;\n        };\n        Board.prototype.getBoard = function () {\n            return this.board;\n        };\n        Board.prototype.getButtons = function () {\n            return this.buttons;\n        };\n        Board.prototype.mark = function (player, button) {\n            if (player.getMarker() === Marker_1.Marker.Xis) {\n                button.classList.add(this.xClass);\n            }\n            else {\n                button.classList.add(this.circleClass);\n            }\n        };\n        Board.prototype.getCircleClass = function () {\n            return this.circleClass;\n        };\n        Board.prototype.getXClass = function () {\n            return this.xClass;\n        };\n        return Board;\n    }(Subject_1.Subject));\n    exports.Board = Board;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./resources/assets/ts/Views/Board.ts?");

/***/ }),

/***/ "./resources/assets/ts/Views/TicTacToeView.ts":
/*!****************************************************!*\
  !*** ./resources/assets/ts/Views/TicTacToeView.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    exports.__esModule = true;\n    var TicTacToeView = /** @class */ (function () {\n        function TicTacToeView() {\n            this.playerTurnSelector = \".player-turn\";\n        }\n        TicTacToeView.prototype.update = function (data) {\n            this.updatePlayerTurn(data);\n        };\n        TicTacToeView.prototype.updatePlayerTurn = function (data) {\n            var playerTurnNode = document.querySelector(this.playerTurnSelector);\n            playerTurnNode.innerHTML = \"<p>\" + data.getNickName() + \"'s turn</p>\";\n            playerTurnNode.className = \"player-turn\";\n            playerTurnNode.classList.add(data.getMarker());\n            return this;\n        };\n        return TicTacToeView;\n    }());\n    exports.TicTacToeView = TicTacToeView;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./resources/assets/ts/Views/TicTacToeView.ts?");

/***/ }),

/***/ "./resources/assets/ts/main.ts":
/*!*************************************!*\
  !*** ./resources/assets/ts/main.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Models/TicTacToe */ \"./resources/assets/ts/Models/TicTacToe.ts\"), __webpack_require__(/*! ./Views/TicTacToeView */ \"./resources/assets/ts/Views/TicTacToeView.ts\"), __webpack_require__(/*! ./Models/Player */ \"./resources/assets/ts/Models/Player.ts\"), __webpack_require__(/*! ./Views/Board */ \"./resources/assets/ts/Views/Board.ts\"), __webpack_require__(/*! ./Enums/Marker */ \"./resources/assets/ts/Enums/Marker.ts\"), __webpack_require__(/*! ./Models/ModeSelector */ \"./resources/assets/ts/Models/ModeSelector.ts\"), __webpack_require__(/*! ./Enums/Mode */ \"./resources/assets/ts/Enums/Mode.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, TicTacToe_1, TicTacToeView_1, Player_1, Board_1, Marker_1, ModeSelector_1, Mode_1) {\n    \"use strict\";\n    exports.__esModule = true;\n    window.addEventListener(\"DOMContentLoaded\", function () {\n        var buttons = document.querySelectorAll(\".cell\");\n        var boardContainer = document.querySelector(\".game-board-container\");\n        var boardNode = document.querySelector(\".game-board\");\n        var buttonsSelectMarker = document.querySelectorAll(\".button-choose-marker\");\n        var buttonsSelectMode = document.querySelectorAll(\".button-choose-mode\");\n        var modeSelector;\n        Array.prototype.forEach.call(buttonsSelectMode, function (button) {\n            button.addEventListener(\"click\", function () {\n                var mode = button.getAttribute(\"data-mode\");\n                modeSelector = new ModeSelector_1.ModeSelector(mode);\n                var container = document.querySelector(\".choose-mode-container\");\n                container.classList.add('hidden');\n            });\n        });\n        Array.prototype.forEach.call(buttonsSelectMarker, function (button) {\n            button.addEventListener(\"click\", function () {\n                var marker = button.getAttribute(\"data-marker\");\n                var player1Marker;\n                var player2Marker;\n                if (marker === Marker_1.Marker.Xis) {\n                    player1Marker = Marker_1.Marker.Xis;\n                    player2Marker = Marker_1.Marker.Circle;\n                }\n                else {\n                    player1Marker = Marker_1.Marker.Circle;\n                    player2Marker = Marker_1.Marker.Xis;\n                }\n                var container = document.querySelector(\".choose-marker-container\");\n                container.classList.add('hidden');\n                var player1 = new Player_1.Player(\"Player 1\", player1Marker);\n                var player2;\n                if (modeSelector.getMode() === Mode_1.Mode.Multiplayer) {\n                    player2 = new Player_1.Player(\"Player 2\", player2Marker);\n                }\n                else {\n                    player2 = new Player_1.Player(\"Computer\", player2Marker);\n                }\n                var players = {\n                    player1: player1,\n                    player2: player2\n                };\n                var board = new Board_1.Board(boardContainer, boardNode, buttons);\n                var view = new TicTacToeView_1.TicTacToeView;\n                var game = new TicTacToe_1.TicTacToe(players, board, view, modeSelector.getMode());\n                game.attach(board);\n                game.setcurrentPlayer(player1);\n            });\n        });\n    });\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./resources/assets/ts/main.ts?");

/***/ })

/******/ });