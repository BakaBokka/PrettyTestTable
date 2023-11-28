import  {FC} from "react";
import "./TableEmptyPlug.scss";
import Button from "../../Button/Button";
import { ButtonTitle } from "../../../types/types";

interface TableEmptyPlugProps {
    onClick: () => void;
}

const TableEmptyPlug:FC<TableEmptyPlugProps> = ({ onClick }) => {
    return (
        <div className="table-empty-plug">
            <h3 className="table-empty-plug__caption">Your search did not match any results.</h3>
            <Button title={ButtonTitle.RESET} onClick={onClick} />
        </div>
    );
};

export default TableEmptyPlug;
