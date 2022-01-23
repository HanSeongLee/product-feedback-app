import React from "react";

const ClickAwayListener = ({ onClick, children }) => {
    return (
        <div style={{
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '100%'
        }}
             onClick={onClick}
        >
            {children}
        </div>
    );
};

export default ClickAwayListener;
