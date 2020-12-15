import React from 'react';
export default function NkDropdownMenu({ id, valueList, }: {
    id?: string;
    valueList: {
        label: string;
        onClick(event: React.MouseEvent): void;
    }[];
}): JSX.Element;
