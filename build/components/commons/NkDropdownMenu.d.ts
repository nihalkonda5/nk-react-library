export default function NkDropdownMenu({ id, menu, }: {
    id?: string;
    menu: {
        label: string;
        onClick(): void;
    }[];
}): JSX.Element;
