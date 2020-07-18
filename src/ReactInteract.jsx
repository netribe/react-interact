import React from 'react';
import ReactDom from 'react-dom';

export default class ReactInteract extends React.Component {
    constructor(props) {
        super(props);
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
        ].map(f => this[f] = this[f].bind(this))
    }
    
    componentDidMount() {
        let element = this.element = ReactDom.findDOMNode(this);
        element.addEventListener('mouseenter', this.onMouseEnter);
        element.addEventListener('mouseleave', this.onMouseLeave);
        element.addEventListener('mousedown', this.onMouseDown);
        element.addEventListener('focus', this.onFocus);
        element.addEventListener('blur', this.onBlur);
        document.body.addEventListener('mouseleave', this.onMouseLeave);
        document.body.addEventListener('mouseup', this.onMouseUp);
    }

    componentWillUnmount() {
        this.element.removeEventListener('mouseenter', this.onMouseEnter);
        this.element.removeEventListener('mouseleave', this.onMouseLeave);
        this.element.removeEventListener('mousedown', this.onMouseDown);
        this.element.removeEventListener('focus', this.onFocus);
        this.element.removeEventListener('blur', this.onBlur);
        document.body.removeEventListener('mouseleave', this.onMouseLeave);
        document.body.removeEventListener('mouseup', this.onMouseUp);
    }

    onMouseEnter(){
        this.setState({
            isHovered: true
        });
    }

    onMouseLeave() {
        if(this.state.isHovered){
            this.setState({
                isHovered: false
            });
        }
    }

    onMouseDown(){
        this.setState({
            isPressed: true
        });
    }

    onMouseUp(){
        if(this.state.isPressed){
            this.setState({
                isPressed: false
            });
        }
    }

    onFocus(){
        this.setState({
            isFocused: true
        });
    }

    onBlur(){
        if(this.state.isFocused){
            this.setState({
                isFocused: false
            });
        }
    }

    render() {
        let render = this.props.children;
        if(typeof render !== 'function'){
            console.warn('ReactInteract expects a function as a single child, but got ' + typeof render);
            return this.props.children || null;
        }
        return render(this.state, this.setState);
    }
}