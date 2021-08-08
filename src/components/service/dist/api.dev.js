"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComment = exports.getStory = exports.getStories = exports.itemUrl = exports.newStoriesUrl = exports.baseUrl = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseUrl = 'https://hacker-news.firebaseio.com/v0';
exports.baseUrl = baseUrl;
var newStoriesUrl = "".concat(baseUrl, "/topstories.json");
exports.newStoriesUrl = newStoriesUrl;
var itemUrl = "".concat(baseUrl, "/item/");
exports.itemUrl = itemUrl;

var getStories = function getStories() {
  var res;
  return regeneratorRuntime.async(function getStories$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(newStoriesUrl).then(function (_ref) {
            var data = _ref.data;
            return data;
          }));

        case 3:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getStories = getStories;

var getStory = function getStory(storyId) {
  var res;
  return regeneratorRuntime.async(function getStory$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(itemUrl + storyId, ".json")).then(function (_ref2) {
            var data = _ref2.data;
            return data;
          }));

        case 3:
          res = _context2.sent;
          return _context2.abrupt("return", res);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getStory = getStory;

var getComment = function getComment(commentId) {
  var res;
  return regeneratorRuntime.async(function getComment$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(itemUrl + commentId, ".json")).then(function (_ref3) {
            var data = _ref3.data;
            return data;
          }));

        case 3:
          res = _context3.sent;
          return _context3.abrupt("return", res);

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getComment = getComment;