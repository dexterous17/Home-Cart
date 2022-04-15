import React from 'react';
import useCollapse from 'react-collapsed';
import './Expandable.css'
const Expandble = (props) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? `${props.name}` : `${props.name}`}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    );
};

export default Expandble;