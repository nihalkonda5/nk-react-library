import React from 'react';
export default function NkImage({ src, alt, style, errorSrc, height, width, circle, border, margin }: {
    src: string;
    alt?: string;
    style?: React.CSSProperties;
    height?: number;
    width?: number;
    circle?: boolean;
    border?: boolean;
    margin?: number;
    errorSrc?: string;
}): JSX.Element;
