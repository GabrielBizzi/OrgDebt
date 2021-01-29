import React from 'react';
import './styles.css';

interface PageListProps {
    name: string;
    value: string;
    avatar: string;
}

const PageList: React.FunctionComponent<PageListProps> = (props) => {
    return (
        <div className="item">
            <img src={props.avatar} alt=""/>
            <div className="info-item">
                <h3>{props.name}</h3>
                <p>{props.value}</p>
            </div>
        </div>
    );
}

export default PageList;