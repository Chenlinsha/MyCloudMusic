/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/radio.js":
/*!*************************!*\
  !*** ./src/js/radio.js ***!
  \*************************/
/***/ (() => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import('../css/radio.css')
var musics = document.querySelectorAll('audio');
var buttoning = document.querySelector('.buttomimg');
var song1 = document.querySelector('.song');
var songer2 = document.querySelector('.songer1');
var names = [];
var musiclist = [];
var songerlist = [];
var ids = [];
var imgs = [];
var index = 0;
var songname = document.querySelector('.song-name');
var album = document.querySelector('.album');
var songer3 = document.querySelector('.songer');
var circle = document.querySelector('#circle-pic');
var circle1 = document.querySelector('.circle-big');
localStorage.getItem("token");
var dia = document.querySelector('.dia');
var volumecontorl = document.querySelector('.volume-control');
var lyrics1 = document.querySelector('.lyrics');
var Audio = document.querySelector('.audio');
var contorl = document.querySelector('.on');
var contorlDot = document.querySelector('#control-dot');
var contorlProgress = document.querySelector('#control-progress');
var contorlProgressBox = document.querySelector('#progress');
var current = document.querySelector('#current');
var duration = document.querySelector('#duration');
var volume = document.querySelector('.volume');
var volumeNow = document.querySelector(".volume-now");
var volumeMax = document.querySelector(".volume-max");
var dot = document.querySelector(".volume-control-dot");
var btnif = true;
var textarea = document.querySelector('textarea');
var up = document.querySelector(".down");
var down1 = document.querySelector(".up");
var flag = false; // 标记是否拖动开始

var back = document.querySelector('.hal');
var go = document.querySelector('.har');
var commend = document.querySelector('.commend');
var icon10 = document.querySelector('.icon10');
var position = {
  oriOffestLeft: 0,
  // 移动开始时进度条的点距离进度条的偏移值
  oriX: 0,
  // 移动开始时的x坐标
  maxLeft: 0,
  // 向左最大可拖动距离
  maxRight: 0 // 向右最大可拖动距离

};

function getFetch(_x) {
  return _getFetch.apply(this, arguments);
} // up.onclick = function () {
//     fetch(`http://redrock.udday.cn:2022/song/url?id=${ids[index]}`).then((res) => {
//         return res.json()
//     }).then((res) => {
//         index++;
//         if (index == names.length)
//             index = 0
//         Audio.src = res.data[0].url
//     })
//     switchAudio()
// }
// down1.onclick = function () {
//     fetch(`http://redrock.udday.cn:2022/song/url?id=${ids[index]}`).then((res) => {
//         return res.json()
//     }).then((res) => {
//         index = index - 1
//         if (index == -1) {
//             index = names.length - 1
//         }
//         Audio.src = res.data[0].url
//     })
//     switchAudio()
// }


function _getFetch() {
  _getFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url) {
    var response, res;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch(url);

          case 2:
            response = _context3.sent;
            _context3.next = 5;
            return response.json();

          case 5:
            res = _context3.sent;
            return _context3.abrupt("return", res);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getFetch.apply(this, arguments);
}

function transTime(value) {
  var time = '';
  var h = parseInt("".concat(value / 3600));
  value %= 3600;
  var m = parseInt("".concat(value / 60));
  var s = parseInt("".concat(value % 60));

  if (h > 0) {
    time = formatTime(h + ':' + m + ':' + s);
  } else {
    time = formatTime(m + ':' + s);
  }

  return time;
}

function formatTime(value) {
  var time = '';
  var s = value.split(':');
  var i = 0;

  for (; i < s.length - 1; i++) {
    time += s[i].length === 1 ? '0' + s[i] : s[i];
    time += ':';
  }

  time += s[i].length === 1 ? '0' + s[i] : s[i];
  return time;
}

contorl.addEventListener('click', function (e) {
  if (e.target.innerText === '▶') {
    e.target.innerText = '┃┃';
    Audio.play();
    circle1.style.webkitAnimationPlayState = 'running';
  } else {
    e.target.innerText = '▶';
    Audio.pause();
    circle1.style.webkitAnimationPlayState = 'paused';
  }
});
Audio.addEventListener('loadedmetadata', function (e) {
  duration.innerText = transTime(e.target.duration);
});
Audio.addEventListener('timeupdate', function (e) {
  var value = e.target.currentTime / Audio.duration;
  current.innerText = transTime(e.target.currentTime);
  contorlProgress.style.width = "".concat(value * 100, "%");
  contorlDot.style.left = "".concat(value * 100, "%"); // console.log(lyricBox.style.buttom);
});
Audio.addEventListener('ended', function (e) {
  contorl.innerText = '▶';
});

var down = function down(event) {
  if (!Audio.pause || Audio.currentTime !== 0) {
    flag = true;
    position.oriOffestLeft = contorlDot.offsetLeft;
    position.oriX = event.touches ? event.touches[0].clientX : event.clientX; // 要同时适配mousedown和touchstart事件

    position.maxLeft = position.oriOffestLeft; // 向左最大可拖动距离

    position.maxRight = contorlProgressBox.offsetWidth - position.oriOffestLeft; // 向右边最大可拖动距离

    if (event && event.preventDefault) event.preventDefault();else event.returnValue = false;
    if (event && event.stopPropagation) event.stopPropagation();else window.event.cancelBubble = true;
  }
};

var move = function move(event) {
  if (flag) {
    var clientX = event.touches ? event.touches[0].clientX : event.clientX;
    var length = clientX - position.oriX;

    if (length > position.maxRight) {
      length = position.maxRight;
    } else if (length < -position.maxLeft) {
      length = -position.maxLeft;
    }

    var pgsWidth = parseFloat(window.getComputedStyle(contorlProgressBox, null).width.replace('px'));
    var rate = (position.oriOffestLeft + length) / pgsWidth;
    Audio.currentTime = Audio.duration * rate;
  }
};

var end = function end() {
  flag = false;
}; // 鼠标按下


contorlDot.addEventListener('mousedown', down, false);
contorlDot.addEventListener('touchstart', down, false); // 开始拖动

document.addEventListener('mousemove', move, false);
document.addEventListener('touchmove', move, false); // 拖动结束

document.addEventListener('mouseup', end, false);
document.addEventListener('touchend', end, false);

dot.onmousedown = function (e) {
  var y = e.pageY - dot.offsetTop + dot.offsetHeight / 2;
  document.addEventListener("mousemove", gundong1);

  function gundong1(e) {
    if (e.pageY - y < 0) {
      dot.style.top = 0 + "px";
    } else if (e.pageY - y > 80) {
      dot.style.top = 80 + "px";
    } else {
      dot.style.top = e.pageY - y + "px";
      console.log(dot.style.top);
    }

    volumeNow.style.height = 80 - parseInt(dot.style.top) + "px";
    console.log(volumeNow.style.height);
    Audio.volume = 1 - parseInt(dot.style.top) / 80;

    document.onmouseup = function () {
      document.removeEventListener("mousemove", gundong1);
    };
  }
};

back.onclick = function () {
  window.history.back(1);
  console.log(1);
};

go.onclick = function () {
  window.history.go(1);
  console.log(2);
};

document.addEventListener('keydown', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
    var theEvent, code, _res;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            theEvent = e || window.event;
            code = theEvent.keyCode || theEvent.which || theEvent.charCode;

            if (code == 13) {
              //回车执行查询
              _res = getFetch("http://redrock.udday.cn:2022/search?keywords=".concat(searchbox.value));
              _res = _res.result.songs;
              localStorage.setItem("res", JSON.stringify(_res));
              localStorage.setItem("searchvalue", searchbox.value);
              window.location.replace("..\\html\\search.html");
              console.log(_res);
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x2) {
    return _ref.apply(this, arguments);
  };
}());

volume.onclick = function (x) {
  volumecontorl.style.display = "block";
};

var himg = document.querySelector('.himg');

himg.onclick = function (x) {
  return window.location.replace("..\\html\\cloudmusic.html");
}; // let userid =  localStorage.getItem("userid")
// fetch(`http://redrock.udday.cn:2022/user/playlist?uid=${userid}`)
//     .then((res) => {
//         console.log(userid);
//         return res.json()
//     }).then((res) => console.log(res))
// let listdata =  localStorage.getItem("listdata")
// let radiosongs = document.querySelector('.radiosongs')


function GetUrlPara() {
  var url = document.location.toString(); //获取当前URL

  if (url.indexOf("?") != -1) {
    //判断URL？后面不为空
    var arrUrl = url.split("?"); //分割？

    var para = arrUrl[1]; //获取参数部分

    if (para) {
      //判断传入的参数部分不为空
      var arr = para.split("!");

      var _res2 = arr.slice(1, 4); // console.log(res); //分割=
      // var res = arr[1]; //获取参数的值


      return _res2;
    }
  }
}

var res = GetUrlPara();
console.log(res);
var i = res[0].split("&")[0];
var a = 200; //歌词容器到高，随便改,但最好和你自己写到那个div一样高；

var b = 35;
var lid = res[1];
console.log(i);
console.log(lid);
fetch("http://redrock.udday.cn:2022/playlist/detail?id=".concat(lid)).then(function (res) {
  return res.json();
}).then(function (res) {
  console.log(res);
  song1.innerHTML = res.playlist.tracks[i].name;
  songname.innerHTML = res.playlist.tracks[i].name;
  album.innerHTML = res.playlist.tracks[i].al.name;
  songer2.innerHTML = res.playlist.tracks[i].ar[0].name;
  songer3.innerHTML = res.playlist.tracks[i].ar[0].name;
  buttoning.src = res.playlist.tracks[i].al.picUrl;
  circle.src = res.playlist.tracks[i].al.picUrl;
  ids[i] = res.playlist.tracks[i].id;
  fetch("http://redrock.udday.cn:2022/lyric?id=".concat(res.playlist.tracks[i].id)).then(function (res) {
    return res.json();
  }).then(function (res) {
    console.log(res);
    textarea.innerHTML = res.lrc.lyric;
    console.log(res.lrc.lyric);
    return textarea.innerHTML;
  }).then(function (res) {
    lrc = res;

    function split() {
      //把lrc歌词分割成数组，
      var split_1 = lrc.split('\n');
      var length = split_1.length;

      for (var _i = 0; _i < length; _i++) {
        var change = function change(str) {
          var lrc = str.split(']');
          var timer = lrc[0].replace('[', '');
          var str_music = lrc[1];
          var time_split = timer.split(':');
          var s = +time_split[1];
          var min = +time_split[0];
          return {
            time: min * 60 + s,
            lrc: str_music //分割好到歌词和时间

          };
        };

        var _lrcArr = split_1[_i];
        split_1[_i] = change(_lrcArr);
      }

      return split_1;
    }

    var lrcArr = split();

    function createLi() {
      //根据歌词数组创建li
      var len = lrcArr.length;

      for (var _i2 = 1; _i2 < len; _i2++) {
        var lrc_li = lrcArr[_i2];
        var li = document.createElement('li');
        li.innerText = lrc_li.lrc;
        li.style.height = b + 'px';
        li.style.textAlign = 'center';
        li.style.width = '100%';
        li.style.padding = '0';
        li.style.transition = '0.3';
        dia.appendChild(li);
      }
    }

    createLi();

    function setCurrentLi() {
      var time = Audio.currentTime;

      for (i = 0; i < lrcArr.length; i++) {
        var play1 = lrcArr[i];

        if (time - play1.time <= 0) {
          return i;
        }
      }

      return -1;
    }

    function current() {
      //设置top，让其滚动
      var li = setCurrentLi();
      var divHeight = a;
      var liHeight = b;
      var top = liHeight * li - divHeight / 2 + liHeight / 2;

      if (top < 0) {
        top = 0;
      }

      dia.style.marginTop = -top + 'px'; // console.log('top'+top);

      var playLi = dia.querySelector('.play1');

      if (playLi) {
        playLi.className = '';
      }

      if (li >= 0) {
        console.log(li); // li.style.cssText = "color: #000;font-size: 20px;"

        console.log(dia.children);
        dia.children[li - 1].className = 'play1';
        console.log(dia.children);
      }
    }

    Audio.ontimeupdate = current; //  
  });
  fetch("http://redrock.udday.cn:2022/song/url?id=".concat(res.playlist.tracks[i].id)).then(function (res) {
    return res.json();
  }).then(function (res) {
    Audio.src = res.data[0].url;
  });
  fetch("http://redrock.udday.cn:2022/comment/music?id=".concat(res.playlist.tracks[i].id)).then(function (res) {
    return res.json();
  }).then(function (res) {
    console.log(res);

    for (var _i3 = 0; _i3 < 15; _i3++) {
      var _commend = document.querySelector('.commend');

      var con = document.createElement("div");
      con.setAttribute('class', 'con');

      var _comcon = document.createElement("div");

      _comcon.setAttribute('class', 'comcon');

      var userpic = document.createElement('div');
      userpic.setAttribute('class', 'userpic');

      var _time = document.createElement('div');

      _time.setAttribute('class', 'time');

      var _like = document.createElement("div");

      var img2 = document.createElement("img");

      _like.setAttribute('class', 'like');

      var _img = document.createElement("img"); // like.appendChild(icon10)


      userpic.appendChild(_img);
      con.appendChild(userpic);
      con.appendChild(_time);
      con.appendChild(_like);
      con.appendChild(_comcon);

      _commend.appendChild(con);

      console.log(userpic);
      _comcon.innerHTML = res.hotComments[_i3].user.nickname + ":" + res.hotComments[_i3].content;
      _like.innerHTML = "👍" + res.hotComments[_i3].likedCount;
      _img.src = res.hotComments[_i3].user.avatarUrl;
      _time.innerHTML = res.hotComments[_i3].timeStr;
    }
  });
  var up = document.querySelector(".down");
  console.log(up);
  var down1 = document.querySelector(".up");

  function switchAudio() {
    document.querySelector(".song").innerHTML = res.playlist.tracks[i].name;
    buttoning.src = res.playlist.tracks[i].al.picUrl;
    document.querySelector(".songer1").innerHTML = res.playlist.tracks[i].ar[0].name; // textarea.innerHTML = res.lrc.lyric;

    comcon.innerHTML = res.hotComments[i].user.nickname + ":" + res.hotComments[i].content;
    like.innerHTML = res.hotComments[i].likedCount;
    img.src = res.hotComments[i].user.avatarUrl;
    time.innerHTML = res.hotComments[i].timeStr;
    circle.src = res.playlist.tracks[i].al.picUrl;
    Audio.play();
  }

  up.onclick = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(res.playlist.tracks[i].id);
            fetch("http://redrock.udday.cn:2022/song/url?id=".concat(res.playlist.tracks[i].id)).then(function (res) {
              return res.json();
            }).then(function (res) {
              i++;
              if (i == names.length) i = 0;
              Audio.src = res.data[0].url;
            });
            switchAudio();

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  down1.onclick = function () {
    fetch("http://redrock.udday.cn:2022/song/url?id=".concat(res.playlist.tracks[i].id)).then(function (res) {
      return res.json();
    }).then(function (res) {
      i = i - 1;

      if (i == -1) {
        i = names.length - 1;
      }

      Audio.src = res.data[0].url;
    });
    switchAudio();
  };
});
songerlist.push(localStorage.getItem("songer"));
songname.innerHTML = localStorage.getItem("song");
names.push(localStorage.getItem("song"));
imgs.push(localStorage.getItem("pic"));
console.log(songerlist); //buttoning.src =  localStorage.getItem("pic")

console.log(names);

buttoning['onclick'] = function (x) {
  window.location.replace("..\\html\\cloudmusic.html");
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("radio." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("665ef7593731b910f669")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "cloudmusic:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"radio": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatecloudmusic"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/radio.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxzQ0FBc0M7V0FDdEM7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTs7V0FFQTs7Ozs7VUU1ZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG91ZG11c2ljLy4vc3JjL2pzL3JhZGlvLmpzIiwid2VicGFjazovL2Nsb3VkbXVzaWMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2xvdWRtdXNpYy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2Nsb3VkbXVzaWMvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9jbG91ZG11c2ljL3dlYnBhY2svcnVudGltZS9nZXQgdXBkYXRlIG1hbmlmZXN0IGZpbGVuYW1lIiwid2VicGFjazovL2Nsb3VkbXVzaWMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL2Nsb3VkbXVzaWMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jbG91ZG11c2ljL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9jbG91ZG11c2ljL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL2Nsb3VkbXVzaWMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2xvdWRtdXNpYy93ZWJwYWNrL3J1bnRpbWUvY3NzIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2xvdWRtdXNpYy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jbG91ZG11c2ljL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2xvdWRtdXNpYy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2xvdWRtdXNpYy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0KCcuLi9jc3MvcmFkaW8uY3NzJylcbmxldCBtdXNpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhdWRpbycpXG5jb25zdCBidXR0b25pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9taW1nJylcbmNvbnN0IHNvbmcxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvbmcnKVxuY29uc3Qgc29uZ2VyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb25nZXIxJylcbmxldCBuYW1lcyA9IFtdXG5sZXQgbXVzaWNsaXN0ID0gW11cbmxldCBzb25nZXJsaXN0ID0gW11cbmxldCBpZHMgPSBbXVxubGV0IGltZ3MgPSBbXVxubGV0IGluZGV4ID0gMFxubGV0IHNvbmduYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvbmctbmFtZScpXG5sZXQgYWxidW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxidW0nKVxubGV0IHNvbmdlcjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29uZ2VyJylcbmxldCBjaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2lyY2xlLXBpYycpXG5sZXQgY2lyY2xlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXJjbGUtYmlnJylcbmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIilcbmxldCBkaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhJylcbmxldCB2b2x1bWVjb250b3JsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZvbHVtZS1jb250cm9sJylcbmxldCBseXJpY3MxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmx5cmljcycpXG5jb25zdCBBdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpbycpO1xuY29uc3QgY29udG9ybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbicpO1xuY29uc3QgY29udG9ybERvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250cm9sLWRvdCcpO1xuY29uc3QgY29udG9ybFByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRyb2wtcHJvZ3Jlc3MnKTtcbmNvbnN0IGNvbnRvcmxQcm9ncmVzc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9ncmVzcycpO1xuY29uc3QgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50Jyk7XG5jb25zdCBkdXJhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdXJhdGlvbicpO1xubGV0IHZvbHVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52b2x1bWUnKVxubGV0IHZvbHVtZU5vdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudm9sdW1lLW5vd1wiKVxubGV0IHZvbHVtZU1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudm9sdW1lLW1heFwiKVxubGV0IGRvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudm9sdW1lLWNvbnRyb2wtZG90XCIpXG5sZXQgYnRuaWYgPSB0cnVlXG5jb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJylcbmxldCB1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG93blwiKVxubGV0IGRvd24xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cFwiKVxubGV0IGZsYWcgPSBmYWxzZTsgLy8g5qCH6K6w5piv5ZCm5ouW5Yqo5byA5aeLXG5sZXQgYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYWwnKVxubGV0IGdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhcicpXG5sZXQgY29tbWVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW5kJylcbmxldCBpY29uMTAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbjEwJylcbmNvbnN0IHBvc2l0aW9uID0ge1xuICAgIG9yaU9mZmVzdExlZnQ6IDAsIC8vIOenu+WKqOW8gOWni+aXtui/m+W6puadoeeahOeCuei3neemu+i/m+W6puadoeeahOWBj+enu+WAvFxuICAgIG9yaVg6IDAsIC8vIOenu+WKqOW8gOWni+aXtueahHjlnZDmoIdcbiAgICBtYXhMZWZ0OiAwLCAvLyDlkJHlt6bmnIDlpKflj6/mi5bliqjot53nprtcbiAgICBtYXhSaWdodDogMCwgLy8g5ZCR5Y+z5pyA5aSn5Y+v5ouW5Yqo6Led56a7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBnZXRGZXRjaCh1cmwpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgbGV0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIC8vICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIHJldHVybiByZXNcbn1cblxuLy8gdXAub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICBmZXRjaChgaHR0cDovL3JlZHJvY2sudWRkYXkuY246MjAyMi9zb25nL3VybD9pZD0ke2lkc1tpbmRleF19YCkudGhlbigocmVzKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4vLyAgICAgfSkudGhlbigocmVzKSA9PiB7XG4vLyAgICAgICAgIGluZGV4Kys7XG4vLyAgICAgICAgIGlmIChpbmRleCA9PSBuYW1lcy5sZW5ndGgpXG4vLyAgICAgICAgICAgICBpbmRleCA9IDBcbi8vICAgICAgICAgQXVkaW8uc3JjID0gcmVzLmRhdGFbMF0udXJsXG4vLyAgICAgfSlcblxuLy8gICAgIHN3aXRjaEF1ZGlvKClcbi8vIH1cbi8vIGRvd24xLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgZmV0Y2goYGh0dHA6Ly9yZWRyb2NrLnVkZGF5LmNuOjIwMjIvc29uZy91cmw/aWQ9JHtpZHNbaW5kZXhdfWApLnRoZW4oKHJlcykgPT4ge1xuLy8gICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuLy8gICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuLy8gICAgICAgICBpbmRleCA9IGluZGV4IC0gMVxuLy8gICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcbi8vICAgICAgICAgICAgIGluZGV4ID0gbmFtZXMubGVuZ3RoIC0gMVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIEF1ZGlvLnNyYyA9IHJlcy5kYXRhWzBdLnVybFxuLy8gICAgIH0pXG5cbi8vICAgICBzd2l0Y2hBdWRpbygpXG4vLyB9XG5cblxuZnVuY3Rpb24gdHJhbnNUaW1lKHZhbHVlKSB7XG4gICAgbGV0IHRpbWUgPSAnJztcbiAgICBsZXQgaCA9IHBhcnNlSW50KGAke3ZhbHVlIC8gMzYwMH1gKTtcbiAgICB2YWx1ZSAlPSAzNjAwO1xuICAgIGxldCBtID0gcGFyc2VJbnQoYCR7dmFsdWUgLyA2MH1gKTtcbiAgICBsZXQgcyA9IHBhcnNlSW50KGAke3ZhbHVlICUgNjB9YCk7XG4gICAgaWYgKGggPiAwKSB7XG4gICAgICAgIHRpbWUgPSBmb3JtYXRUaW1lKGggKyAnOicgKyBtICsgJzonICsgcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGltZSA9IGZvcm1hdFRpbWUobSArICc6JyArIHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aW1lO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKHZhbHVlKSB7XG4gICAgbGV0IHRpbWUgPSAnJztcbiAgICBsZXQgcyA9IHZhbHVlLnNwbGl0KCc6Jyk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoOyBpIDwgcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgdGltZSArPSBzW2ldLmxlbmd0aCA9PT0gMSA/ICcwJyArIHNbaV0gOiBzW2ldO1xuICAgICAgICB0aW1lICs9ICc6JztcbiAgICB9XG4gICAgdGltZSArPSBzW2ldLmxlbmd0aCA9PT0gMSA/ICcwJyArIHNbaV0gOiBzW2ldO1xuXG4gICAgcmV0dXJuIHRpbWU7XG59XG5jb250b3JsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ+KWticpIHtcbiAgICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID0gJ+KUg+KUgyc7XG4gICAgICAgIEF1ZGlvLnBsYXkoKTtcbiAgICAgICAgY2lyY2xlMS5zdHlsZS53ZWJraXRBbmltYXRpb25QbGF5U3RhdGUgPSAncnVubmluZyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID0gJ+KWtic7XG4gICAgICAgIEF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIGNpcmNsZTEuc3R5bGUud2Via2l0QW5pbWF0aW9uUGxheVN0YXRlID0gJ3BhdXNlZCc7XG4gICAgfVxufSk7XG5cbkF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgZSA9PiB7XG4gICAgZHVyYXRpb24uaW5uZXJUZXh0ID0gdHJhbnNUaW1lKGUudGFyZ2V0LmR1cmF0aW9uKTtcbn0pO1xuXG5BdWRpby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgZSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQuY3VycmVudFRpbWUgLyBBdWRpby5kdXJhdGlvbjtcbiAgICBjdXJyZW50LmlubmVyVGV4dCA9IHRyYW5zVGltZShlLnRhcmdldC5jdXJyZW50VGltZSk7XG4gICAgY29udG9ybFByb2dyZXNzLnN0eWxlLndpZHRoID0gYCR7dmFsdWUgKiAxMDB9JWA7XG4gICAgY29udG9ybERvdC5zdHlsZS5sZWZ0ID0gYCR7dmFsdWUgKiAxMDB9JWA7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhseXJpY0JveC5zdHlsZS5idXR0b20pO1xufSk7XG5cbkF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZSA9PiB7XG4gICAgY29udG9ybC5pbm5lclRleHQgPSAn4pa2Jztcbn0pO1xuXG5cblxuXG5jb25zdCBkb3duID0gZXZlbnQgPT4ge1xuICAgIGlmICghQXVkaW8ucGF1c2UgfHwgQXVkaW8uY3VycmVudFRpbWUgIT09IDApIHtcbiAgICAgICAgZmxhZyA9IHRydWU7XG5cbiAgICAgICAgcG9zaXRpb24ub3JpT2ZmZXN0TGVmdCA9IGNvbnRvcmxEb3Qub2Zmc2V0TGVmdDtcbiAgICAgICAgcG9zaXRpb24ub3JpWCA9IGV2ZW50LnRvdWNoZXMgP1xuICAgICAgICAgICAgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDpcbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFg7XG4gICAgICAgIC8vIOimgeWQjOaXtumAgumFjW1vdXNlZG93buWSjHRvdWNoc3RhcnTkuovku7ZcbiAgICAgICAgcG9zaXRpb24ubWF4TGVmdCA9IHBvc2l0aW9uLm9yaU9mZmVzdExlZnQ7XG4gICAgICAgIC8vIOWQkeW3puacgOWkp+WPr+aLluWKqOi3neemu1xuICAgICAgICBwb3NpdGlvbi5tYXhSaWdodCA9IGNvbnRvcmxQcm9ncmVzc0JveC5vZmZzZXRXaWR0aCAtXG4gICAgICAgICAgICBwb3NpdGlvbi5vcmlPZmZlc3RMZWZ0OyAvLyDlkJHlj7PovrnmnIDlpKflj6/mi5bliqjot53nprtcblxuICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQucHJldmVudERlZmF1bHQpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGVsc2UgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZWxzZSB3aW5kb3cuZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICB9XG59O1xuY29uc3QgbW92ZSA9IGV2ZW50ID0+IHtcbiAgICBpZiAoZmxhZykge1xuICAgICAgICBsZXQgY2xpZW50WCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBsZXQgbGVuZ3RoID0gY2xpZW50WCAtIHBvc2l0aW9uLm9yaVg7XG4gICAgICAgIGlmIChsZW5ndGggPiBwb3NpdGlvbi5tYXhSaWdodCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gcG9zaXRpb24ubWF4UmlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoIDwgLXBvc2l0aW9uLm1heExlZnQpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IC1wb3NpdGlvbi5tYXhMZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBnc1dpZHRoID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRvcmxQcm9ncmVzc0JveCwgbnVsbCkud2lkdGgucmVwbGFjZSgncHgnKSxcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgcmF0ZSA9IChwb3NpdGlvbi5vcmlPZmZlc3RMZWZ0ICsgbGVuZ3RoKSAvIHBnc1dpZHRoO1xuXG4gICAgICAgIEF1ZGlvLmN1cnJlbnRUaW1lID0gQXVkaW8uZHVyYXRpb24gKiByYXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IGVuZCA9ICgpID0+IHtcbiAgICBmbGFnID0gZmFsc2U7XG59O1xuLy8g6byg5qCH5oyJ5LiLXG5jb250b3JsRG90LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRvd24sIGZhbHNlKTtcbmNvbnRvcmxEb3QuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGRvd24sIGZhbHNlKTtcblxuLy8g5byA5aeL5ouW5YqoXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBtb3ZlLCBmYWxzZSk7XG5cbi8vIOaLluWKqOe7k+adn1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZCwgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlbmQsIGZhbHNlKTtcblxuZG90Lm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgeSA9IGUucGFnZVkgLSBkb3Qub2Zmc2V0VG9wICsgZG90Lm9mZnNldEhlaWdodCAvIDJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGd1bmRvbmcxKVxuXG4gICAgZnVuY3Rpb24gZ3VuZG9uZzEoZSkge1xuICAgICAgICBpZiAoZS5wYWdlWSAtIHkgPCAwKSB7XG4gICAgICAgICAgICBkb3Quc3R5bGUudG9wID0gMCArIFwicHhcIlxuICAgICAgICB9IGVsc2UgaWYgKGUucGFnZVkgLSB5ID4gODApIHtcbiAgICAgICAgICAgIGRvdC5zdHlsZS50b3AgPSA4MCArIFwicHhcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG90LnN0eWxlLnRvcCA9IChlLnBhZ2VZIC0geSkgKyBcInB4XCJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvdC5zdHlsZS50b3ApO1xuICAgICAgICB9XG4gICAgICAgIHZvbHVtZU5vdy5zdHlsZS5oZWlnaHQgPSA4MCAtIHBhcnNlSW50KGRvdC5zdHlsZS50b3ApICsgXCJweFwiXG4gICAgICAgIGNvbnNvbGUubG9nKHZvbHVtZU5vdy5zdHlsZS5oZWlnaHQpO1xuICAgICAgICBBdWRpby52b2x1bWUgPSAxIC0gKHBhcnNlSW50KGRvdC5zdHlsZS50b3ApIC8gODApXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZ3VuZG9uZzEpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmJhY2sub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKDEpXG4gICAgY29uc29sZS5sb2coMSk7XG59XG5nby5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmdvKDEpXG4gICAgY29uc29sZS5sb2coMik7XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgdGhlRXZlbnQgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBsZXQgY29kZSA9IHRoZUV2ZW50LmtleUNvZGUgfHwgdGhlRXZlbnQud2hpY2ggfHwgdGhlRXZlbnQuY2hhckNvZGU7XG4gICAgaWYgKGNvZGUgPT0gMTMpIHtcbiAgICAgICAgLy/lm57ovabmiafooYzmn6Xor6JcbiAgICAgICAgbGV0IHJlcyA9IGdldEZldGNoKGBodHRwOi8vcmVkcm9jay51ZGRheS5jbjoyMDIyL3NlYXJjaD9rZXl3b3Jkcz0ke3NlYXJjaGJveC52YWx1ZX1gKVxuICAgICAgICByZXMgPSByZXMucmVzdWx0LnNvbmdzO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlc1wiLCBKU09OLnN0cmluZ2lmeShyZXMpKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlYXJjaHZhbHVlXCIsIHNlYXJjaGJveC52YWx1ZSlcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIuLlxcXFxodG1sXFxcXHNlYXJjaC5odG1sXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgfVxufSlcblxudm9sdW1lLm9uY2xpY2sgPSB4ID0+IHtcbiAgICB2b2x1bWVjb250b3JsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5sZXQgaGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaW1nJylcbmhpbWcub25jbGljayA9IHggPT4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIuLlxcXFxodG1sXFxcXGNsb3VkbXVzaWMuaHRtbFwiKVxuLy8gbGV0IHVzZXJpZCA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJpZFwiKVxuLy8gZmV0Y2goYGh0dHA6Ly9yZWRyb2NrLnVkZGF5LmNuOjIwMjIvdXNlci9wbGF5bGlzdD91aWQ9JHt1c2VyaWR9YClcbi8vICAgICAudGhlbigocmVzKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJpZCk7XG4vLyAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4vLyAgICAgfSkudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuLy8gbGV0IGxpc3RkYXRhID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdGRhdGFcIilcbi8vIGxldCByYWRpb3NvbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhZGlvc29uZ3MnKVxuXG5cbmZ1bmN0aW9uIEdldFVybFBhcmEoKSB7XG4gICAgbGV0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLnRvU3RyaW5nKCk7IC8v6I635Y+W5b2T5YmNVVJMXG4gICAgaWYgKHVybC5pbmRleE9mKFwiP1wiKSAhPSAtMSkgeyAvL+WIpOaWrVVSTO+8n+WQjumdouS4jeS4uuepulxuICAgICAgICBsZXQgYXJyVXJsID0gdXJsLnNwbGl0KFwiP1wiKTsgLy/liIblibLvvJ9cbiAgICAgICAgbGV0IHBhcmEgPSBhcnJVcmxbMV07IC8v6I635Y+W5Y+C5pWw6YOo5YiGXG4gICAgICAgIGlmIChwYXJhKSB7IC8v5Yik5pat5Lyg5YWl55qE5Y+C5pWw6YOo5YiG5LiN5Li656m6XG4gICAgICAgICAgICBjb25zdCBhcnIgPSBwYXJhLnNwbGl0KFwiIVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGFyci5zbGljZSgxLCA0KVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTsgLy/liIblibI9XG4gICAgICAgICAgICAvLyB2YXIgcmVzID0gYXJyWzFdOyAvL+iOt+WPluWPguaVsOeahOWAvFxuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgIH1cbn1cbmxldCByZXMgPSBHZXRVcmxQYXJhKCk7XG5jb25zb2xlLmxvZyhyZXMpO1xubGV0IGkgPSByZXNbMF0uc3BsaXQoXCImXCIpWzBdXG5sZXQgYSA9IDIwMDsgLy/mrYzor43lrrnlmajliLDpq5jvvIzpmo/kvr/mlLks5L2G5pyA5aW95ZKM5L2g6Ieq5bex5YaZ5Yiw6YKj5LiqZGl25LiA5qC36auY77ybXG5sZXQgYiA9IDM1O1xubGV0IGxpZCA9IHJlc1sxXVxuY29uc29sZS5sb2coaSk7XG5jb25zb2xlLmxvZyhsaWQpO1xuZmV0Y2goYGh0dHA6Ly9yZWRyb2NrLnVkZGF5LmNuOjIwMjIvcGxheWxpc3QvZGV0YWlsP2lkPSR7bGlkfWApLnRoZW4oKHJlcykgPT4ge1xuICAgIHJldHVybiByZXMuanNvbigpO1xufSkudGhlbigocmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzKVxuICAgIHNvbmcxLmlubmVySFRNTCA9IHJlcy5wbGF5bGlzdC50cmFja3NbaV0ubmFtZVxuICAgIHNvbmduYW1lLmlubmVySFRNTCA9IHJlcy5wbGF5bGlzdC50cmFja3NbaV0ubmFtZVxuICAgIGFsYnVtLmlubmVySFRNTCA9IHJlcy5wbGF5bGlzdC50cmFja3NbaV0uYWwubmFtZVxuICAgIHNvbmdlcjIuaW5uZXJIVE1MID0gcmVzLnBsYXlsaXN0LnRyYWNrc1tpXS5hclswXS5uYW1lXG4gICAgc29uZ2VyMy5pbm5lckhUTUwgPSByZXMucGxheWxpc3QudHJhY2tzW2ldLmFyWzBdLm5hbWVcbiAgICBidXR0b25pbmcuc3JjID0gcmVzLnBsYXlsaXN0LnRyYWNrc1tpXS5hbC5waWNVcmxcbiAgICBjaXJjbGUuc3JjID0gcmVzLnBsYXlsaXN0LnRyYWNrc1tpXS5hbC5waWNVcmxcbiAgICBpZHNbaV0gPSByZXMucGxheWxpc3QudHJhY2tzW2ldLmlkXG4gICAgZmV0Y2goYGh0dHA6Ly9yZWRyb2NrLnVkZGF5LmNuOjIwMjIvbHlyaWM/aWQ9JHtyZXMucGxheWxpc3QudHJhY2tzW2ldLmlkfWApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcblxuICAgICAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSByZXMubHJjLmx5cmljXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5scmMubHlyaWMpO1xuICAgICAgICByZXR1cm4gdGV4dGFyZWEuaW5uZXJIVE1MXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGxyYyA9IHJlc1xuXG4gICAgICAgIGZ1bmN0aW9uIHNwbGl0KCkgeyAvL+aKimxyY+atjOivjeWIhuWJsuaIkOaVsOe7hO+8jFxuICAgICAgICAgICAgbGV0IHNwbGl0XzEgPSBscmMuc3BsaXQoJ1xcbicpO1xuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IHNwbGl0XzEubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBscmNBcnIgPSBzcGxpdF8xW2ldO1xuICAgICAgICAgICAgICAgIHNwbGl0XzFbaV0gPSBjaGFuZ2UobHJjQXJyKTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoYW5nZShzdHIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxyYyA9IHN0ci5zcGxpdCgnXScpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZXIgPSBscmNbMF0ucmVwbGFjZSgnWycsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0cl9tdXNpYyA9IGxyY1sxXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVfc3BsaXQgPSB0aW1lci5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcyA9ICt0aW1lX3NwbGl0WzFdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWluID0gK3RpbWVfc3BsaXRbMF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBtaW4gKiA2MCArIHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBscmM6IHN0cl9tdXNpYyAvL+WIhuWJsuWlveWIsOatjOivjeWSjOaXtumXtFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNwbGl0XzFcbiAgICAgICAgfVxuICAgICAgICBsZXQgbHJjQXJyID0gc3BsaXQoKTtcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVMaSgpIHsgLy/moLnmja7mrYzor43mlbDnu4TliJvlu7psaVxuICAgICAgICAgICAgbGV0IGxlbiA9IGxyY0Fyci5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxyY19saSA9IGxyY0FycltpXTtcbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIGxpLmlubmVyVGV4dCA9IGxyY19saS5scmM7XG4gICAgICAgICAgICAgICAgbGkuc3R5bGUuaGVpZ2h0ID0gYiArICdweCdcbiAgICAgICAgICAgICAgICBsaS5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJ1xuICAgICAgICAgICAgICAgIGxpLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgICAgICAgICAgICAgbGkuc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICAgICAgICAgICAgICBsaS5zdHlsZS50cmFuc2l0aW9uID0gJzAuMydcbiAgICAgICAgICAgICAgICBkaWEuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZUxpKClcblxuICAgICAgICBmdW5jdGlvbiBzZXRDdXJyZW50TGkoKSB7XG4gICAgICAgICAgICBsZXQgdGltZSA9IEF1ZGlvLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxyY0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBwbGF5MSA9IGxyY0FycltpXTtcbiAgICAgICAgICAgICAgICBpZiAodGltZSAtIHBsYXkxLnRpbWUgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjdXJyZW50KCkgeyAvL+iuvue9rnRvcO+8jOiuqeWFtua7muWKqFxuICAgICAgICAgICAgbGV0IGxpID0gc2V0Q3VycmVudExpKCk7XG4gICAgICAgICAgICBsZXQgZGl2SGVpZ2h0ID0gYTtcbiAgICAgICAgICAgIGxldCBsaUhlaWdodCA9IGI7XG4gICAgICAgICAgICBsZXQgdG9wID0gbGlIZWlnaHQgKiBsaSAtIGRpdkhlaWdodCAvIDIgKyBsaUhlaWdodCAvIDI7XG4gICAgICAgICAgICBpZiAodG9wIDwgMCkge1xuICAgICAgICAgICAgICAgIHRvcCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaWEuc3R5bGUubWFyZ2luVG9wID0gLXRvcCArICdweCc7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndG9wJyt0b3ApO1xuICAgICAgICAgICAgbGV0IHBsYXlMaSA9IGRpYS5xdWVyeVNlbGVjdG9yKCcucGxheTEnKVxuICAgICAgICAgICAgaWYgKHBsYXlMaSkge1xuICAgICAgICAgICAgICAgIHBsYXlMaS5jbGFzc05hbWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGkpO1xuICAgICAgICAgICAgICAgIC8vIGxpLnN0eWxlLmNzc1RleHQgPSBcImNvbG9yOiAjMDAwO2ZvbnQtc2l6ZTogMjBweDtcIlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpYS5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgZGlhLmNoaWxkcmVuW2xpIC0gMV0uY2xhc3NOYW1lID0gJ3BsYXkxJ1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRpYS5jaGlsZHJlbik7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG4gICAgICAgIEF1ZGlvLm9udGltZXVwZGF0ZSA9IGN1cnJlbnQ7XG5cbiAgICAgICAgLy8gIFxuXG5cblxuICAgIH0pXG4gICAgZmV0Y2goYGh0dHA6Ly9yZWRyb2NrLnVkZGF5LmNuOjIwMjIvc29uZy91cmw/aWQ9JHtyZXMucGxheWxpc3QudHJhY2tzW2ldLmlkfWApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBBdWRpby5zcmMgPSByZXMuZGF0YVswXS51cmxcbiAgICB9KVxuICAgIGZldGNoKGBodHRwOi8vcmVkcm9jay51ZGRheS5jbjoyMDIyL2NvbW1lbnQvbXVzaWM/aWQ9JHtyZXMucGxheWxpc3QudHJhY2tzW2ldLmlkfWApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvbW1lbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVuZCcpXG4gICAgICAgICAgICBsZXQgY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29uJylcbiAgICAgICAgICAgIGxldCBjb21jb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBjb21jb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21jb24nKVxuICAgICAgICAgICAgbGV0IHVzZXJwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdXNlcnBpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3VzZXJwaWMnKVxuICAgICAgICAgICAgbGV0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGltZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpbWUnKVxuICAgICAgICAgICAgbGV0IGxpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBsZXQgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgICAgICAgIGxpa2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsaWtlJylcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgICAgICAvLyBsaWtlLmFwcGVuZENoaWxkKGljb24xMClcblxuICAgICAgICAgICAgdXNlcnBpYy5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgICAgICBjb24uYXBwZW5kQ2hpbGQodXNlcnBpYylcbiAgICAgICAgICAgIGNvbi5hcHBlbmRDaGlsZCh0aW1lKVxuICAgICAgICAgICAgY29uLmFwcGVuZENoaWxkKGxpa2UpXG4gICAgICAgICAgICBjb24uYXBwZW5kQ2hpbGQoY29tY29uKVxuICAgICAgICAgICAgY29tbWVuZC5hcHBlbmRDaGlsZChjb24pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VycGljKTtcbiAgICAgICAgICAgIGNvbWNvbi5pbm5lckhUTUwgPSByZXMuaG90Q29tbWVudHNbaV0udXNlci5uaWNrbmFtZSArIFwiOlwiICsgcmVzLmhvdENvbW1lbnRzW2ldLmNvbnRlbnRcbiAgICAgICAgICAgIGxpa2UuaW5uZXJIVE1MID0gXCLwn5GNXCIgKyByZXMuaG90Q29tbWVudHNbaV0ubGlrZWRDb3VudFxuICAgICAgICAgICAgaW1nLnNyYyA9IHJlcy5ob3RDb21tZW50c1tpXS51c2VyLmF2YXRhclVybFxuICAgICAgICAgICAgdGltZS5pbm5lckhUTUwgPSByZXMuaG90Q29tbWVudHNbaV0udGltZVN0clxuICAgICAgICB9XG4gICAgfSlcbiAgICBsZXQgdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvd25cIilcbiAgICBjb25zb2xlLmxvZyh1cCk7XG4gICAgbGV0IGRvd24xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cFwiKVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoQXVkaW8oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29uZ1wiKS5pbm5lckhUTUwgPSByZXMucGxheWxpc3QudHJhY2tzW2ldLm5hbWVcbiAgICAgICAgYnV0dG9uaW5nLnNyYyA9IHJlcy5wbGF5bGlzdC50cmFja3NbaV0uYWwucGljVXJsXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29uZ2VyMVwiKS5pbm5lckhUTUwgPSByZXMucGxheWxpc3QudHJhY2tzW2ldLmFyWzBdLm5hbWVcbiAgICAgICAgLy8gdGV4dGFyZWEuaW5uZXJIVE1MID0gcmVzLmxyYy5seXJpYztcbiAgICAgICAgY29tY29uLmlubmVySFRNTCA9IHJlcy5ob3RDb21tZW50c1tpXS51c2VyLm5pY2tuYW1lICsgXCI6XCIgKyByZXMuaG90Q29tbWVudHNbaV0uY29udGVudFxuICAgICAgICBsaWtlLmlubmVySFRNTCA9IHJlcy5ob3RDb21tZW50c1tpXS5saWtlZENvdW50XG4gICAgICAgIGltZy5zcmMgPSByZXMuaG90Q29tbWVudHNbaV0udXNlci5hdmF0YXJVcmxcbiAgICAgICAgdGltZS5pbm5lckhUTUwgPSByZXMuaG90Q29tbWVudHNbaV0udGltZVN0clxuICAgICAgICBjaXJjbGUuc3JjID0gcmVzLnBsYXlsaXN0LnRyYWNrc1tpXS5hbC5waWNVcmxcbiAgICAgICAgQXVkaW8ucGxheSgpXG4gICAgfVxuICAgIHVwLm9uY2xpY2sgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5wbGF5bGlzdC50cmFja3NbaV0uaWQpO1xuICAgICAgICBmZXRjaChgaHR0cDovL3JlZHJvY2sudWRkYXkuY246MjAyMi9zb25nL3VybD9pZD0ke3Jlcy5wbGF5bGlzdC50cmFja3NbaV0uaWR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGlmIChpID09IG5hbWVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICBpID0gMFxuICAgICAgICAgICAgQXVkaW8uc3JjID0gcmVzLmRhdGFbMF0udXJsXG4gICAgICAgIH0pXG5cbiAgICAgICAgc3dpdGNoQXVkaW8oKVxuICAgIH1cbiAgICBkb3duMS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmZXRjaChgaHR0cDovL3JlZHJvY2sudWRkYXkuY246MjAyMi9zb25nL3VybD9pZD0ke3Jlcy5wbGF5bGlzdC50cmFja3NbaV0uaWR9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGkgPSBpIC0gMVxuICAgICAgICAgICAgaWYgKGkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpID0gbmFtZXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXVkaW8uc3JjID0gcmVzLmRhdGFbMF0udXJsXG4gICAgICAgIH0pXG5cbiAgICAgICAgc3dpdGNoQXVkaW8oKVxuICAgIH1cbn0pXG5cbnNvbmdlcmxpc3QucHVzaChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNvbmdlclwiKSlcbnNvbmduYW1lLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic29uZ1wiKVxubmFtZXMucHVzaChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNvbmdcIikpXG5pbWdzLnB1c2gobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwaWNcIikpXG5cbmNvbnNvbGUubG9nKHNvbmdlcmxpc3QpO1xuLy9idXR0b25pbmcuc3JjID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGljXCIpXG5jb25zb2xlLmxvZyhuYW1lcyk7XG5cblxuXG5cblxuYnV0dG9uaW5nWydvbmNsaWNrJ10gPSB4ID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi4uXFxcXGh0bWxcXFxcY2xvdWRtdXNpYy5odG1sXCIpXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChjYWNoZWRNb2R1bGUuZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgY2FjaGVkTW9kdWxlLmVycm9yO1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR0cnkge1xuXHRcdHZhciBleGVjT3B0aW9ucyA9IHsgaWQ6IG1vZHVsZUlkLCBtb2R1bGU6IG1vZHVsZSwgZmFjdG9yeTogX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0sIHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18gfTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0XHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdFx0ZXhlY09wdGlvbnMuZmFjdG9yeS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBleGVjT3B0aW9ucy5yZXF1aXJlKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0bW9kdWxlLmVycm9yID0gZTtcblx0XHR0aHJvdyBlO1xuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5odSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwicmFkaW8uXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2NjVlZjc1OTM3MzFiOTEwZjY2OVwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJjbG91ZG11c2ljOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJEID0gY3VycmVudE1vZHVsZURhdGE7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBtb2R1bGUgPSBvcHRpb25zLm1vZHVsZTtcblx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG5cdG1vZHVsZS5ob3QgPSBjcmVhdGVNb2R1bGVIb3RPYmplY3Qob3B0aW9ucy5pZCwgbW9kdWxlKTtcblx0bW9kdWxlLnBhcmVudHMgPSBjdXJyZW50UGFyZW50cztcblx0bW9kdWxlLmNoaWxkcmVuID0gW107XG5cdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmU7XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWlyZShyZXF1aXJlLCBtb2R1bGVJZCkge1xuXHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblx0aWYgKCFtZSkgcmV0dXJuIHJlcXVpcmU7XG5cdHZhciBmbiA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcblx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRzID0gaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzO1xuXHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcblx0XHRcdFx0XHRwYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG5cdFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcblx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG5cdFx0XHRcdFx0cmVxdWVzdCArXG5cdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcblx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0KTtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW107XG5cdFx0fVxuXHRcdHJldHVybiByZXF1aXJlKHJlcXVlc3QpO1xuXHR9O1xuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZVtuYW1lXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXF1aXJlW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlLCBuYW1lKSAmJiBuYW1lICE9PSBcImVcIikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuXHRcdH1cblx0fVxuXHRmbi5lID0gZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQpKTtcblx0fTtcblx0cmV0dXJuIGZuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2R1bGVIb3RPYmplY3QobW9kdWxlSWQsIG1lKSB7XG5cdHZhciBfbWFpbiA9IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQ7XG5cdHZhciBob3QgPSB7XG5cdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuXHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG5cdFx0X2FjY2VwdGVkRXJyb3JIYW5kbGVyczoge30sXG5cdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcblx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcblx0XHRfc2VsZkludmFsaWRhdGVkOiBmYWxzZSxcblx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcblx0XHRfbWFpbjogX21haW4sXG5cdFx0X3JlcXVpcmVTZWxmOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcblx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IF9tYWluID8gdW5kZWZpbmVkIDogbW9kdWxlSWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcblx0XHR9LFxuXG5cdFx0Ly8gTW9kdWxlIEFQSVxuXHRcdGFjdGl2ZTogdHJ1ZSxcblx0XHRhY2NlcHQ6IGZ1bmN0aW9uIChkZXAsIGNhbGxiYWNrLCBlcnJvckhhbmRsZXIpIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwW2ldXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcF0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkZWNsaW5lOiBmdW5jdGlvbiAoZGVwKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuXHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuXHRcdH0sXG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG5cdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImlkbGVcIjpcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG5cdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuXHRcdFx0XHRcdChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgfHwgW10pLnB1c2goXG5cdFx0XHRcdFx0XHRtb2R1bGVJZFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuXHRcdGNoZWNrOiBob3RDaGVjayxcblx0XHRhcHBseTogaG90QXBwbHksXG5cdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0aWYgKCFsKSByZXR1cm4gY3VycmVudFN0YXR1cztcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuXHRcdH0sXG5cdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24gKGwpIHtcblx0XHRcdHZhciBpZHggPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcblx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cblx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcblx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cblx0fTtcblx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gaG90O1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG5cdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVzdWx0c1tpXSA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMucHVzaChwcm9taXNlKTtcblx0XHRcdHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0YmxvY2tpbmdQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG5cdGlmIChibG9ja2luZ1Byb21pc2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHZhciBibG9ja2VyID0gYmxvY2tpbmdQcm9taXNlcztcblx0YmxvY2tpbmdQcm9taXNlcyA9IFtdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoYmxvY2tlcikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0cmV0dXJuIHNldFN0YXR1cyhcImNoZWNrXCIpXG5cdFx0LnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKS50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInByZXBhcmVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRcdFx0XHRibG9ja2luZ1Byb21pc2VzID0gW107XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcblx0XHRcdFx0XHRcdFx0dXBkYXRlLmMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUubSxcblx0XHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFtdKVxuXHRcdFx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoYXBwbHlPblVwZGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJ2YXIgY3JlYXRlU3R5bGVzaGVldCA9IChjaHVua0lkLCBmdWxsaHJlZiwgcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0bGlua1RhZy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR2YXIgb25MaW5rQ29tcGxldGUgPSAoZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MuXG5cdFx0bGlua1RhZy5vbmVycm9yID0gbGlua1RhZy5vbmxvYWQgPSBudWxsO1xuXHRcdGlmIChldmVudC50eXBlID09PSAnbG9hZCcpIHtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdHZhciByZWFsSHJlZiA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuaHJlZiB8fCBmdWxsaHJlZjtcblx0XHRcdHZhciBlcnIgPSBuZXcgRXJyb3IoXCJMb2FkaW5nIENTUyBjaHVuayBcIiArIGNodW5rSWQgKyBcIiBmYWlsZWQuXFxuKFwiICsgcmVhbEhyZWYgKyBcIilcIik7XG5cdFx0XHRlcnIuY29kZSA9IFwiQ1NTX0NIVU5LX0xPQURfRkFJTEVEXCI7XG5cdFx0XHRlcnIudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdGVyci5yZXF1ZXN0ID0gcmVhbEhyZWY7XG5cdFx0XHRsaW5rVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlua1RhZylcblx0XHRcdHJlamVjdChlcnIpO1xuXHRcdH1cblx0fVxuXHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG9uTGlua0NvbXBsZXRlO1xuXHRsaW5rVGFnLmhyZWYgPSBmdWxsaHJlZjtcblxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuXHRyZXR1cm4gbGlua1RhZztcbn07XG52YXIgZmluZFN0eWxlc2hlZXQgPSAoaHJlZiwgZnVsbGhyZWYpID0+IHtcblx0dmFyIGV4aXN0aW5nTGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ0xpbmtUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG5cdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSB8fCB0YWcuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRpZih0YWcucmVsID09PSBcInN0eWxlc2hlZXRcIiAmJiAoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSkgcmV0dXJuIHRhZztcblx0fVxuXHR2YXIgZXhpc3RpbmdTdHlsZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdTdHlsZVRhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG5cdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTtcblx0XHRpZihkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpIHJldHVybiB0YWc7XG5cdH1cbn07XG52YXIgbG9hZFN0eWxlc2hlZXQgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHZhciBocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRihjaHVua0lkKTtcblx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuXHRcdGlmKGZpbmRTdHlsZXNoZWV0KGhyZWYsIGZ1bGxocmVmKSkgcmV0dXJuIHJlc29sdmUoKTtcblx0XHRjcmVhdGVTdHlsZXNoZWV0KGNodW5rSWQsIGZ1bGxocmVmLCByZXNvbHZlLCByZWplY3QpO1xuXHR9KTtcbn1cbi8vIG5vIGNodW5rIGxvYWRpbmdcblxudmFyIG9sZFRhZ3MgPSBbXTtcbnZhciBuZXdUYWdzID0gW107XG52YXIgYXBwbHlIYW5kbGVyID0gKG9wdGlvbnMpID0+IHtcblx0cmV0dXJuIHsgZGlzcG9zZTogKCkgPT4ge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBvbGRUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgb2xkVGFnID0gb2xkVGFnc1tpXTtcblx0XHRcdGlmKG9sZFRhZy5wYXJlbnROb2RlKSBvbGRUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvbGRUYWcpO1xuXHRcdH1cblx0XHRvbGRUYWdzLmxlbmd0aCA9IDA7XG5cdH0sIGFwcGx5OiAoKSA9PiB7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG5ld1RhZ3MubGVuZ3RoOyBpKyspIG5ld1RhZ3NbaV0ucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdFx0bmV3VGFncy5sZW5ndGggPSAwO1xuXHR9IH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMubWluaUNzcyA9IChjaHVua0lkcywgcmVtb3ZlZENodW5rcywgcmVtb3ZlZE1vZHVsZXMsIHByb21pc2VzLCBhcHBseUhhbmRsZXJzLCB1cGRhdGVkTW9kdWxlc0xpc3QpID0+IHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGNodW5rSWRzLmZvckVhY2goKGNodW5rSWQpID0+IHtcblx0XHR2YXIgaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YoY2h1bmtJZCk7XG5cdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcblx0XHR2YXIgb2xkVGFnID0gZmluZFN0eWxlc2hlZXQoaHJlZiwgZnVsbGhyZWYpO1xuXHRcdGlmKCFvbGRUYWcpIHJldHVybjtcblx0XHRwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHZhciB0YWcgPSBjcmVhdGVTdHlsZXNoZWV0KGNodW5rSWQsIGZ1bGxocmVmLCAoKSA9PiB7XG5cdFx0XHRcdHRhZy5hcyA9IFwic3R5bGVcIjtcblx0XHRcdFx0dGFnLnJlbCA9IFwicHJlbG9hZFwiO1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0b2xkVGFncy5wdXNoKG9sZFRhZyk7XG5cdFx0XHRuZXdUYWdzLnB1c2godGFnKTtcblx0XHR9KSk7XG5cdH0pO1xufSIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wIHx8IHtcblx0XCJyYWRpb1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxudmFyIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3Q7XG52YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHJlc29sdmU7XG5cdFx0Ly8gc3RhcnQgdXBkYXRlIGNodW5rIGxvYWRpbmdcblx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5odShjaHVua0lkKTtcblx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZFxuXHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgaG90IHVwZGF0ZSBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCk7XG5cdH0pO1xufVxuXG5zZWxmW1wid2VicGFja0hvdFVwZGF0ZWNsb3VkbXVzaWNcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKG5ld01vZHVsZUZhY3RvcnkpIHtcblx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdCA9IHtcblx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdGlmIChcblx0XHRcdG1vZHVsZSAmJlxuXHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCB8fCBtb2R1bGUuaG90Ll9tYWluKSAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVyID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVycy5wdXNoKGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGVycm9ySGFuZGxlcnNba10gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyc1trXShlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcblx0XHRpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1cGRhdGUgbWFuaWZlc3QgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvcmFkaW8uanNcIik7XG4iLCIiXSwibmFtZXMiOlsibXVzaWNzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uaW5nIiwicXVlcnlTZWxlY3RvciIsInNvbmcxIiwic29uZ2VyMiIsIm5hbWVzIiwibXVzaWNsaXN0Iiwic29uZ2VybGlzdCIsImlkcyIsImltZ3MiLCJpbmRleCIsInNvbmduYW1lIiwiYWxidW0iLCJzb25nZXIzIiwiY2lyY2xlIiwiY2lyY2xlMSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaWEiLCJ2b2x1bWVjb250b3JsIiwibHlyaWNzMSIsIkF1ZGlvIiwiY29udG9ybCIsImNvbnRvcmxEb3QiLCJjb250b3JsUHJvZ3Jlc3MiLCJjb250b3JsUHJvZ3Jlc3NCb3giLCJjdXJyZW50IiwiZHVyYXRpb24iLCJ2b2x1bWUiLCJ2b2x1bWVOb3ciLCJ2b2x1bWVNYXgiLCJkb3QiLCJidG5pZiIsInRleHRhcmVhIiwidXAiLCJkb3duMSIsImZsYWciLCJiYWNrIiwiZ28iLCJjb21tZW5kIiwiaWNvbjEwIiwicG9zaXRpb24iLCJvcmlPZmZlc3RMZWZ0Iiwib3JpWCIsIm1heExlZnQiLCJtYXhSaWdodCIsImdldEZldGNoIiwidXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJyZXMiLCJ0cmFuc1RpbWUiLCJ2YWx1ZSIsInRpbWUiLCJoIiwicGFyc2VJbnQiLCJtIiwicyIsImZvcm1hdFRpbWUiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImlubmVyVGV4dCIsInBsYXkiLCJzdHlsZSIsIndlYmtpdEFuaW1hdGlvblBsYXlTdGF0ZSIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJ3aWR0aCIsImxlZnQiLCJkb3duIiwiZXZlbnQiLCJvZmZzZXRMZWZ0IiwidG91Y2hlcyIsImNsaWVudFgiLCJvZmZzZXRXaWR0aCIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJ3aW5kb3ciLCJjYW5jZWxCdWJibGUiLCJtb3ZlIiwicGdzV2lkdGgiLCJwYXJzZUZsb2F0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInJlcGxhY2UiLCJyYXRlIiwiZW5kIiwib25tb3VzZWRvd24iLCJ5IiwicGFnZVkiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJndW5kb25nMSIsInRvcCIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJvbm1vdXNldXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25jbGljayIsImhpc3RvcnkiLCJ0aGVFdmVudCIsImNvZGUiLCJrZXlDb2RlIiwid2hpY2giLCJjaGFyQ29kZSIsInNlYXJjaGJveCIsInJlc3VsdCIsInNvbmdzIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhdGlvbiIsIngiLCJkaXNwbGF5IiwiaGltZyIsIkdldFVybFBhcmEiLCJ0b1N0cmluZyIsImluZGV4T2YiLCJhcnJVcmwiLCJwYXJhIiwiYXJyIiwic2xpY2UiLCJhIiwiYiIsImxpZCIsInRoZW4iLCJpbm5lckhUTUwiLCJwbGF5bGlzdCIsInRyYWNrcyIsIm5hbWUiLCJhbCIsImFyIiwic3JjIiwicGljVXJsIiwiaWQiLCJscmMiLCJseXJpYyIsInNwbGl0XzEiLCJjaGFuZ2UiLCJzdHIiLCJ0aW1lciIsInN0cl9tdXNpYyIsInRpbWVfc3BsaXQiLCJtaW4iLCJscmNBcnIiLCJjcmVhdGVMaSIsImxlbiIsImxyY19saSIsImxpIiwiY3JlYXRlRWxlbWVudCIsInRleHRBbGlnbiIsInBhZGRpbmciLCJ0cmFuc2l0aW9uIiwiYXBwZW5kQ2hpbGQiLCJzZXRDdXJyZW50TGkiLCJwbGF5MSIsImRpdkhlaWdodCIsImxpSGVpZ2h0IiwibWFyZ2luVG9wIiwicGxheUxpIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJvbnRpbWV1cGRhdGUiLCJkYXRhIiwiY29uIiwic2V0QXR0cmlidXRlIiwiY29tY29uIiwidXNlcnBpYyIsImxpa2UiLCJpbWcyIiwiaW1nIiwiaG90Q29tbWVudHMiLCJ1c2VyIiwibmlja25hbWUiLCJjb250ZW50IiwibGlrZWRDb3VudCIsImF2YXRhclVybCIsInRpbWVTdHIiLCJzd2l0Y2hBdWRpbyIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9