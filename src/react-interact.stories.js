import React from 'react';
import Interact from './ReactInteract.jsx';

export default { title: 'react-interact' };

class ReactInteractStory extends React.Component{
    render(){
        return (
            <div>
                <Interact>
                    {
                        ({ isHovered, isPressed, isFocused }) => 
                            <div style={{ border: '1px solid #ddd', width: 300, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {
                                    isPressed ? 
                                        `I'm being pressed, now release the mouse`
                                    : (
                                        isHovered ? 
                                        `Now I'm being hovered, press your mouse down`
                                        : 'Hover me'
                                    )
                                }
                            </div>
                    }   
                </Interact>
                <Interact>
                    {
                        ({ isHovered, isPressed, isFocused }) => 
                            <input value={ isFocused ? `Now I'm focused` : `I'm an input, focus me` }/>
                    }   
                </Interact>
            </div>
        );
    }
}

export const reactInteract = () => <ReactInteractStory/>