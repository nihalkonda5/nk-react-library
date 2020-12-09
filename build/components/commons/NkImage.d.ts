import React from 'react';
export default function NkImage({ src, alt, _style, errorSrc, height, width, circle, border, margin }: {
    src: string;
    alt?: string;
    _style?: React.CSSProperties;
    height?: number;
    width?: number;
    circle?: boolean;
    border?: boolean;
    margin?: number;
    errorSrc?: string;
}): JSX.Element;
