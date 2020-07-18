'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactDom = _interopDefault(require('react-dom'));

var ReactInteract = /*@__PURE__*/(function (superclass) {
    function ReactInteract(props) {
        var this$1 = this;

        superclass.call(this, props);
        this.state = {
            isHovered: false,
            isPressed: false,
            isFocused: false
        };
        [
            "onMouseEnter",
            "onMouseLeave",
            "onMouseDown",
            "onMouseUp",
            "onFocus",
            "onBlur"
        ].map(function (f) { return this$1[f] = this$1[f].bind(this$1); });
    }

    if ( superclass ) ReactInteract.__proto__ = superclass;
    ReactInteract.prototype = Object.create( superclass && superclass.prototype );
    ReactInteract.prototype.constructor = ReactInteract;
    
    ReactInteract.prototype.componentDidMount = function componentDidMount () {
        var element = this.element = ReactDom.findDOMNode(this);
        element.addEventListener('mouseenter', this.onMouseEnter);
        element.addEventListener('mouseleave', this.onMouseLeave);
        element.addEventListener('mousedown', this.onMouseDown);
        element.addEventListener('focus', this.onFocus);
        element.addEventListener('blur', this.onBlur);
        document.body.addEventListener('mouseleave', this.onMouseLeave);
        document.body.addEventListener('mouseup', this.onMouseUp);
    };

    ReactInteract.prototype.componentWillUnmount = function componentWillUnmount () {
        this.element.removeEventListener('mouseenter', this.onMouseEnter);
        this.element.removeEventListener('mouseleave', this.onMouseLeave);
        this.element.removeEventListener('mousedown', this.onMouseDown);
        this.element.removeEventListener('focus', this.onFocus);
        this.element.removeEventListener('blur', this.onBlur);
        document.body.removeEventListener('mouseleave', this.onMouseLeave);
        document.body.removeEventListener('mouseup', this.onMouseUp);
    };

    ReactInteract.prototype.onMouseEnter = function onMouseEnter (){
        this.setState({
            isHovered: true
        });
    };

    ReactInteract.prototype.onMouseLeave = function onMouseLeave () {
        if(this.state.isHovered){
            this.setState({
                isHovered: false
            });
        }
    };

    ReactInteract.prototype.onMouseDown = function onMouseDown (){
        this.setState({
            isPressed: true
        });
    };

    ReactInteract.prototype.onMouseUp = function onMouseUp (){
        if(this.state.isPressed){
            this.setState({
                isPressed: false
            });
        }
    };

    ReactInteract.prototype.onFocus = function onFocus (){
        this.setState({
            isFocused: true
        });
    };

    ReactInteract.prototype.onBlur = function onBlur (){
        if(this.state.isFocused){
            this.setState({
                isFocused: false
            });
        }
    };

    ReactInteract.prototype.render = function render () {
        var render = this.props.children;
        if(typeof render !== 'function'){
            console.warn('ReactInteract expects a function as a single child, but got ' + typeof render);
            return this.props.children || null;
        }
        return render(this.state, this.setState);
    };

    return ReactInteract;
}(React.Component));

module.exports = ReactInteract;
