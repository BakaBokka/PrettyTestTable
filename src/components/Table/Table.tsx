import { FC, useState } from "react";
import arrow from "../../images/arrow.svg";
import TableItem from "./TableItem/TableItem";
import { ITableItem, SortDirections, TableColumnCaption } from "../../types/types";
import "./Table.scss";

interface TableProps {
    tableData: ITableItem[];
    sortDirection: SortDirections;
    onSort: (column: keyof ITableItem) => void;
}

const Table: FC<TableProps> = ({ tableData, onSort, sortDirection }) => {
    const [sortedColumn, setSortedColumn] = useState<TableColumnCaption>();
    const renderTableItems = () => {
        return tableData?.map((item) => {
            return <TableItem key={item.id} id={item.id} name={item.name} type={item.type} status={item.status} site={item.site} />;
        });
    };

    const onClick = (column: keyof ITableItem) => {
        onSort(column);
        setSortedColumn(column.toUpperCase() as TableColumnCaption)
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLParagraphElement>, column: keyof ITableItem) => {
        if (e?.code === "Enter") {
            onSort(column);
            setSortedColumn(column.toUpperCase() as TableColumnCaption)
        }
    };

    const isSorted = (column: TableColumnCaption) => sortedColumn === column ? "sorted" : "";

    return (
        <section aria-label="Table of tests" className="table">
            <div className="table__wrap">
                <div aria-label="Table header" className="table__header">
                    <p aria-label="Table column caption" tabIndex={0} className="table__caption" onClick={() => onClick("name")} onKeyDown={(e) => onKeyPress(e, "name")}>
                       {TableColumnCaption.NAME}
                        <img className={`table__icon ${isSorted(TableColumnCaption.NAME)} ${sortDirection}`} src={arrow} alt="Arrow icon" />
                    </p>
                    <p aria-label="Table column caption" tabIndex={0} className="table__caption" onClick={() => onClick("type")} onKeyDown={(e) => onKeyPress(e, "type")}>
                        {TableColumnCaption.TYPE}
                        <img className={`table__icon ${isSorted(TableColumnCaption.TYPE)} ${sortDirection}`} src={arrow} alt="Arrow icon" />
                    </p>
                    <p aria-label="Table column caption" tabIndex={0} className="table__caption" onClick={() => onClick("status")} onKeyDown={(e) => onKeyPress(e, "status")}>
                        {TableColumnCaption.STATUS}
                        <img className={`table__icon ${isSorted(TableColumnCaption.STATUS)} ${sortDirection}`} src={arrow} alt="Arrow icon" />
                    </p>
                    <p aria-label="Table column caption" tabIndex={0} className="table__caption" onClick={() => onClick("site")} onKeyDown={(e) => onKeyPress(e, "site")}>
                        {TableColumnCaption.SITE}
                        <img className={`table__icon ${isSorted(TableColumnCaption.SITE)} ${sortDirection}`} src={arrow} alt="Arrow icon" />
                    </p>
                    <p className="table__caption"></p>
                </div>
                <ul className="table__content">{renderTableItems()}</ul>
            </div>
        </section>
    );
};

export default Table;
