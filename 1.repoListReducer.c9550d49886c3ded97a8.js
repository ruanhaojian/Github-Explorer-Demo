webpackJsonp([1],{

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _RepoListTransition = __webpack_require__(533);
	
	var _RepoListTransition2 = _interopRequireDefault(_RepoListTransition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _RepoListTransition2.default; // import RepoListContainer from '../../routes/CoreLayout/containers/RepoListContainer'

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(353);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(357);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(358);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(359);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(394);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(37);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(534);
	
	var _RepoListContainer = __webpack_require__(536);
	
	var _RepoListContainer2 = _interopRequireDefault(_RepoListContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RepoListTransition = function (_React$Component) {
	    (0, _inherits3.default)(RepoListTransition, _React$Component);
	
	    function RepoListTransition() {
	        (0, _classCallCheck3.default)(this, RepoListTransition);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (RepoListTransition.__proto__ || (0, _getPrototypeOf2.default)(RepoListTransition)).call(this));
	
	        _this.state = {
	            offsetTop: 0
	        };
	
	        return _this;
	    }
	
	    (0, _createClass3.default)(RepoListTransition, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }, {
	        key: 'onTransitionWillStart',
	        value: function onTransitionWillStart(data) {
	
	            this.setState({
	                offsetTop: data.scrollTop
	            });
	        }
	    }, {
	        key: 'onTransitionDidEnd',
	        value: function onTransitionDidEnd() {
	            this.setState({ offsetTop: 0 });
	
	            // Show search, need a delay to trigger CSS animation
	            // setTimeout(() => this.setState({ showSearch: true }), 50);
	            //
	            // setTimeout(() => {
	            //     // Get user profile
	            //     this.props.searchUserRepos(this.props.params.username, this.state.searchText, this.props.repoListReducer.page)
	            // }, 300);
	
	            // Hack the footer
	            this.hackTheFooter();
	        }
	    }, {
	        key: 'hackTheFooter',
	        value: function hackTheFooter() {
	            var oldFooter = document.querySelector('.footer');
	            var newFooter = oldFooter.cloneNode(true);
	            oldFooter.style.display = 'none';
	            newFooter.classList.remove('original');
	            document.querySelector('#repo-list-page #scroll-wrapper').appendChild(newFooter);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            return _react2.default.createElement(
	                'div',
	                {
	                    id: 'repo-list-page',
	                    className: 'transition-item',
	                    style: { top: this.state.offsetTop }
	                },
	                _react2.default.createElement(_RepoListContainer2.default, { params: this.props.params })
	            );
	        }
	    }]);
	    return RepoListTransition;
	}(_react2.default.Component);
	
	RepoListTransition.propTypes = {};
	exports.default = RepoListTransition;

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(535);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(535, function() {
				var newContent = __webpack_require__(535);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "#repo-list-page{padding-top:25px;background-color:#f5f5f5;position:absolute;bottom:0;right:0;left:0}#repo-list-page #search-wrapper{position:absolute;top:20px;left:15px;right:15px;z-index:2;border-radius:8px;transform:translateZ(0);transition:box-shadow .3s,transform .3s}#repo-list-page #search-wrapper.shadow{box-shadow:0 0 20px rgba(0,0,0,.3);transform:translate3d(0,-12px,0)}#repo-list-page #scroll-wrapper{position:absolute;top:0;left:0;right:0;bottom:0;overflow-y:scroll;overflow-x:hidden;-webkit-overflow-scrolling:touch;z-index:1}#repo-list-page #search-input input{border:1px solid #e5e5e5}#repo-list-page #repo-list{margin:75px 15px 15px;min-height:100vh}#repo-list-page #load-more{width:165px;height:40px;margin:30px auto;line-height:40px;border-radius:8px;border:1px solid #aeb6c0;font-family:GothamPro-Bold;font-size:14px;letter-spacing:.5px;text-align:center;color:#8f9aa8}#repo-list-page.transition-appear{transform:scale(0);opacity:.01;transition:transform .3s cubic-bezier(.7,0,.25,1),box-shadow .3s cubic-bezier(.7,0,.25,1);height:100vh}#repo-list-page.transition-appear.transition-appear-active{transform:scale(1);opacity:1}", "", {"version":3,"sources":["/./src/components/RepoList/src/components/RepoList/RepoList.scss"],"names":[],"mappings":"AAAA,gBAEI,iBAAkB,yBACQ,kBACP,SACT,QACD,MACD,CAPZ,gCAUM,kBAAmB,SACT,UACC,WACC,UACD,kBACQ,wBACG,uCACsB,CAjBlD,uCAoBQ,mCAA2B,gCACL,CArB9B,gCA0BM,kBAAmB,MACZ,OACC,QACC,SACC,kBACS,kBACA,iCACe,SACvB,CAlCjB,oCAsCM,wBAA0B,CAtChC,2BA2CM,sBAAkB,gBAGA,CA9CxB,2BAkDM,YAAa,YACA,iBACK,iBACA,kBACC,yBACO,2BACE,eACZ,oBACM,kBACH,aACJ,CA5DrB,kCAgEM,mBAAgB,YACF,0FAEc,YACd,CApEpB,2DAwEM,mBAAgB,SACL,CACZ","file":"RepoList.scss","sourcesContent":[":global {\n  #repo-list-page {\n    padding-top: 25px;\n    background-color: #f5f5f5;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    left: 0;\n\n    #search-wrapper {\n      position: absolute;\n      top: 20px;\n      left: 15px;\n      right: 15px;\n      z-index: 2;\n      border-radius: 8px;\n      transform: translate3d(0, 0, 0);\n      transition: box-shadow 0.3s, transform 0.3s;\n\n      &.shadow {\n        box-shadow: 0 0px 20px rgba(0, 0, 0, 0.3);\n        transform: translate3d(0, -12px, 0);\n      }\n    }\n\n    #scroll-wrapper {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      overflow-y: scroll; /* has to be scroll, not auto */\n      overflow-x: hidden;\n      -webkit-overflow-scrolling: touch;\n      z-index: 1;\n    }\n\n    #search-input input {\n      border: solid 1px #e5e5e5;\n    }\n\n    #repo-list {\n      margin-top: 75px;\n      margin-left: 15px;\n      margin-right: 15px;\n      margin-bottom: 15px;\n      min-height: 100vh;\n    }\n\n    #load-more {\n      width: 165px;\n      height: 40px;\n      margin: 30px auto;\n      line-height: 40px;\n      border-radius: 8px;\n      border: solid 1px #aeb6c0;\n      font-family: GothamPro-Bold;\n      font-size: 14px;\n      letter-spacing: 0.5px;\n      text-align: center;\n      color: #8f9aa8;\n    }\n\n    &.transition-appear {\n      transform: scale(0);\n      opacity: 0.01;\n      transition: transform 0.3s cubic-bezier(0.7, 0, 0.25, 1),\n      box-shadow 0.3s cubic-bezier(0.7, 0, 0.25, 1);\n      height: 100vh;\n    }\n\n    &.transition-appear.transition-appear-active {\n      transform: scale(1);\n      opacity: 1;\n    }\n  }\n\n\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRedux = __webpack_require__(402);
	
	var _RepoList = __webpack_require__(537);
	
	var _RepoList2 = _interopRequireDefault(_RepoList);
	
	var _user = __webpack_require__(432);
	
	var _RepoList3 = __webpack_require__(538);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	    searchUserRepos: _user.searchUserRepos,
	    clearUserReposPage: _RepoList3.clearUserReposPage
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	
	    return {
	        repoListReducer: state.repoListReducer.toJS()
	    };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_RepoList2.default);

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(293);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(353);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(357);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(358);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(359);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(394);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(37);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RepoItem = __webpack_require__(520);
	
	var _RepoItem2 = _interopRequireDefault(_RepoItem);
	
	var _SearchInput = __webpack_require__(417);
	
	var _SearchInput2 = _interopRequireDefault(_SearchInput);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(420);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RepoList = function (_React$Component) {
	    (0, _inherits3.default)(RepoList, _React$Component);
	
	    function RepoList() {
	        (0, _classCallCheck3.default)(this, RepoList);
	
	        var _this2 = (0, _possibleConstructorReturn3.default)(this, (RepoList.__proto__ || (0, _getPrototypeOf2.default)(RepoList)).call(this));
	
	        _this2.state = {
	            searchText: '',
	            showSearch: false,
	            offsetTop: 0
	        };
	        _this2.wait = false;
	        _this2.search = _this2.search.bind(_this2);
	        _this2.loadMore = _this2.loadMore.bind(_this2);
	        _this2.onSectionScroll = _this2.onSectionScroll.bind(_this2);
	        return _this2;
	    }
	
	    (0, _createClass3.default)(RepoList, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	
	            return nextProps.repoListReducer != this.props.repoListReducer || nextState.searchText != this.state.searchText || nextState.showSearch != this.state.showSearch || nextState.offsetTop != this.state.offsetTop;
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'onSectionScroll',
	        value: function onSectionScroll() {
	
	            var _this = this;
	
	            _this.lastScrollTop = _this.refs.scrollWrapper.scrollTop;
	            if (_this.wait === false) {
	                window.requestAnimationFrame(function () {
	                    if (_this.lastScrollTop > 0) {
	                        _this.refs.searchWrapper.classList.add('shadow');
	                    } else {
	                        _this.refs.searchWrapper.classList.remove('shadow');
	                    }
	                    _this.wait = false;
	                });
	                _this.wait = true;
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	
	            var _this = this;
	
	            this.refs.scrollWrapper.addEventListener('scroll', this.onSectionScroll);
	
	            this.onTransitionDidEnd();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.params.username !== this.props.params.username) {
	
	                this.searchUserRepos(this.props.params.username, this.state.searchText, this.props.repoListReducer.page);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	
	            this.props.clearUserReposPage();
	
	            this.refs.scrollWrapper.removeEventListener('scroll', this.onSectionScroll);
	
	            // Undo the footer hack in RepoList
	            document.querySelector('.footer.original').style.display = 'flex';
	        }
	    }, {
	        key: 'onTransitionWillStart',
	        value: function onTransitionWillStart(data) {
	
	            this.setState({
	                offsetTop: data.scrollTop
	            });
	        }
	    }, {
	        key: 'onTransitionDidEnd',
	        value: function onTransitionDidEnd() {
	            var _this3 = this;
	
	            this.setState({ offsetTop: 0 });
	
	            // Show search, need a delay to trigger CSS animation
	            setTimeout(function () {
	                return _this3.setState({ showSearch: true });
	            }, 50);
	
	            setTimeout(function () {
	                // Get user profile
	                _this3.props.searchUserRepos(_this3.props.params.username, _this3.state.searchText, _this3.props.repoListReducer.page);
	            }, 300);
	
	            // Hack the footer
	            // this.hackTheFooter();
	        }
	    }, {
	        key: 'hackTheFooter',
	        value: function hackTheFooter() {
	            var oldFooter = document.querySelector('.footer');
	            var newFooter = oldFooter.cloneNode(true);
	            oldFooter.style.display = 'none';
	            newFooter.classList.remove('original');
	            document.querySelector('#repo-list-page #scroll-wrapper').appendChild(newFooter);
	        }
	    }, {
	        key: 'loadMore',
	        value: function loadMore() {
	
	            if (this.props.repoListReducer.isSearching) return;
	            this.props.searchUserRepos(this.props.params.username, this.state.searchText, this.props.repoListReducer.page + 1);
	        }
	    }, {
	        key: 'search',
	        value: function search() {
	            if (this.props.repoListReducer.isSearching) return;
	
	            this.refs.scrollWrapper.scrollTop = 0;
	            this.props.searchUserRepos(this.props.params.username, this.state.searchText, 1);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;
	
	            var _props$repoListReduce = this.props.repoListReducer;
	            var isSearching = _props$repoListReduce.isSearching;
	            var emptyData = _props$repoListReduce.emptyData;
	            var complete = _props$repoListReduce.complete;
	            var repos = _props$repoListReduce.repos;
	
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    {
	                        ref: 'searchWrapper',
	                        id: 'search-wrapper'
	                    },
	                    _react2.default.createElement(
	                        _reactAddonsCssTransitionGroup2.default,
	                        {
	                            transitionName: 'list',
	                            transitionAppear: true,
	                            transitionAppearTimeout: 500,
	                            transitionEnterTimeout: 500,
	                            transitionLeaveTimeout: 500
	                        },
	                        this.state.showSearch ? _react2.default.createElement(_SearchInput2.default, {
	                            placeholder: 'Find a repository...',
	                            buttonText: 'SEARCH',
	                            onChange: function onChange(e) {
	                                return _this4.setState({ searchText: e.target.value });
	                            },
	                            onSearch: this.search
	                        }) : null
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    {
	                        ref: 'scrollWrapper',
	                        id: 'scroll-wrapper'
	                    },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'repo-list' },
	                        emptyData ? _react2.default.createElement(
	                            'div',
	                            { className: 'empty-data' },
	                            ':-( Sad... No result found!'
	                        ) : _react2.default.createElement(
	                            'div',
	                            null,
	                            _react2.default.createElement(
	                                'div',
	                                null,
	                                _react2.default.createElement(
	                                    _reactAddonsCssTransitionGroup2.default,
	                                    {
	                                        transitionName: 'list',
	                                        transitionAppear: true,
	                                        transitionAppearTimeout: 500,
	                                        transitionEnterTimeout: 500,
	                                        transitionLeaveTimeout: 500
	                                    },
	                                    repos.map(function (repo) {
	                                        return _react2.default.createElement(_RepoItem2.default, (0, _extends3.default)({ key: repo.id }, repo));
	                                    })
	                                )
	                            ),
	                            !complete && repos.length > 0 ? _react2.default.createElement(
	                                'div',
	                                {
	                                    id: 'load-more',
	                                    onClick: this.loadMore
	                                },
	                                isSearching ? 'LOADING...' : 'LOAD MORE'
	                            ) : null
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return RepoList;
	}(_react2.default.Component);
	// import './RepoList.scss';
	
	
	RepoList.propTypes = {
	    repoListReducer: _react2.default.PropTypes.object.isRequired,
	    searchUserRepos: _react2.default.PropTypes.func.isRequired,
	    clearUserReposPage: _react2.default.PropTypes.func.isRequired
	};
	exports.default = RepoList;

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(332);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _ACTION_HANDLERS;
	
	exports.clearUserReposPage = clearUserReposPage;
	exports.default = moduleReducer;
	
	var _types = __webpack_require__(336);
	
	var _reduxImmutablejs = __webpack_require__(337);
	
	var _immutable = __webpack_require__(339);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function clearUserReposPage() {
	    return function (dispatch, getState) {
	
	        return dispatch({ type: _types.CLEAR_USER_REPOS_PAGE });
	    };
	}
	
	var initialState = (0, _immutable.fromJS)({
	    page: 1,
	    repos: [],
	    isSearching: false,
	    complete: false
	});
	
	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, _types.CLEAR_USER_REPOS_PAGE, function (state, action) {
	
	    return state.merge({
	        isSearching: false,
	        repos: [],
	        page: 1,
	        complete: false
	    });
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, _types.USER_REPOS_REQUEST, function (state, action) {
	    return state.merge({
	        isSearching: true,
	        repos: action.page === 1 ? [] : state.toJS().repos
	    });
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, _types.USER_REPOS_COMPLETE, function (state, action) {
	    return state.merge({
	        complete: true
	    });
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, _types.USER_REPOS_RECEIVED, function (state, action) {
	    return state.merge({
	        repos: action.data,
	        isSearching: false,
	        emptyData: action.data.length === 0 && state.toJS().page === 1
	    });
	}), (0, _defineProperty3.default)(_ACTION_HANDLERS, _types.USER_REPOS_NEXT_PAGE_RECEIVED, function (state, action) {
	    return state.merge({
	        page: action.data.page,
	        repos: state.toJS().repos.concat(action.data.repos),
	        isSearching: false
	    });
	}), _ACTION_HANDLERS);
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	function moduleReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    var handler = ACTION_HANDLERS[action.type];
	
	    return handler ? handler(state, action) : state;
	}

/***/ }

});
//# sourceMappingURL=1.repoListReducer.c9550d49886c3ded97a8.js.map