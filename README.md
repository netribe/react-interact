# react-interact
Easy user interaction (mouse hover, mouse press, focus) for react components.

# Installation
`npm i @netribe/react-interact --save`

# Usage


```jsx
import React from 'react';
import Interact from '@netribe/react-interact';

export default () => 
    <div>
        <Interact>
            { ({ isHovered, isPressed, isFocused })  => 
                <input 
                    style={{ 
                        background: isHovered 
                            ? '#ddd'
                            : isPressed 
                                ? '#fff' 
                                : '#eee', 
                        border: `1px solid ${isFocused ? 'blue' : 'transparent'}` 
                    }}
                />
            }
        </Interact>
    </div>
;
```
`@netribe/react-interact` expects a function as a single child.
this function should return the element to render and will run whenever the hover/pressed/focused state changes on this element.
it recieves one argument, an object with 'isHovered', 'isPressed' and 'isFocused' boolean values.

Note that `isFocused` will only work on focusable elements (usually inputs)

## Development

```
git clone https://github.com/netribe/react-interact.git
```

compiled with rollup, install it globally if it's missing:
```
npm install --global rollup
```

Compile
```
cd react-interact
rollup -c
```
