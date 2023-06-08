// https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7
import React from 'react';
const Emoji = props => (
    <span
        className="pr-2 text-xl"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol} 
    </span>
);
export default Emoji;