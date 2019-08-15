import React from 'react';

export function multiLine(text) {
    return text.split('\n').map((str, i) => <p key={i}>{str}</p>);
}

export const SectionTitle = ({ title }) => {
    return (
        <div className="section-title">
            <span className="icon icon-wave"></span>
            {title}
        </div>
    );
}

export const Filler = () => <div className="container"><SectionTitle title="No content"></SectionTitle></div>;