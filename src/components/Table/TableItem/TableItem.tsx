import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonTheme, ITableItem, ButtonTitle, TableItemStatus, TableItemType } from "../../../types/types";
import Button from "../../Button/Button";
import { capitalizeFirstLetter, fetchTest } from "../../../helpers";
import "./TableItem.scss";

const TableItem: FC<ITableItem> = ({id, name, type, status, site }) => {
    const isDraft = status === TableItemStatus.DRAFT;
    const buttonTitle = isDraft ? ButtonTitle.FINALIZE : ButtonTitle.RESULTS;
    const buttonTheme = isDraft ? ButtonTheme.DARK : ButtonTheme.GREEN;
    const formattedType = type !== TableItemType.MVT ? capitalizeFirstLetter(type) : TableItemType.MVT;
    const formattedStatus = capitalizeFirstLetter(status);
    const navigate = useNavigate();

    const handleRedirect = () => {
        const query = isDraft ? "finalize" : "results";
        navigate(`/${query}/${id}`);
        fetchTest(id)
    };

    return (
        <li aria-label="Test table row" tabIndex={0} className={`table-row ${status}`}>
            <p className="table-row__item name">{name}</p>
            <p className="table-row__item type">{formattedType}</p>
            <p className="table-row__item status">{formattedStatus}</p>
            <p className="table-row__item site">{site}</p>
            <div className="table-row__item button">
                <Button title={buttonTitle} theme={buttonTheme} onClick={handleRedirect} />
            </div>
        </li>
    );
};

export default TableItem;
