export default function NkDropdownMenu({ id, valueList, }: {
    id?: string;
    valueList: {
        label: string;
        onClick(): void;
    }[];
}): JSX.Element;
