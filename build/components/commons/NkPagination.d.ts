export default function MyPagination({ totalPageCount, selectedPage, pageSelected }: {
    totalPageCount: number;
    selectedPage: number;
    pageSelected(pageNumber: number): any;
}): JSX.Element;
