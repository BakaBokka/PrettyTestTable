import { FC } from "react";
import arrow from "../../images/arrow.svg";
import TableItem from "./TableItem/TableItem";
import { ITableItem } from "../../types/types";
import "./Table.scss";

interface TableProps {
    tableData: ITableItem[];
    onSort: (column: keyof ITableItem) => void;
}

const Table: FC<TableProps> = ({ tableData, onSort }) => {
    const renderTableItems = () => {
        return tableData?.map((item) => {
            return <TableItem key={item.id} id={item.id} name={item.name} type={item.type} status={item.status} site={item.site} />;
        });
    };

    return (
        <section className="table">
            <div className="table__wrap">
                <div className="table__header">
                    <p className="table__caption" onClick={() => onSort("name")}>
                        NAME
                        <img className="table__icon" src={arrow} alt="Arrow icon" />
                    </p>
                    <p className="table__caption" onClick={() => onSort("type")}>
                        TYPE
                        <img className="table__icon" src={arrow} alt="Arrow icon" />
                    </p>
                    <p className="table__caption" onClick={() => onSort("status")}>
                        STATUS
                        <img className="table__icon" src={arrow} alt="Arrow icon" />
                    </p>
                    <p className="table__caption" onClick={() => onSort("site")}>
                        SITE
                        <img className="table__icon" src={arrow} alt="Arrow icon" />
                    </p>
                    <p className="table__caption"></p>
                </div>
                <ul className="table__content">{renderTableItems()}</ul>
            </div>
        </section>
    );
};

export default Table;
