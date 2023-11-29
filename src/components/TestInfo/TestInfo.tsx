import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Test } from "../../types/types";
import { fetchTest } from "../../helpers";
import "./TestInfo.scss";

const TestInfo = () => {
    const [testData, setTestData] = useState<Test>();
    const [loading, setLoading] = useState<boolean>(false);
    const location = useLocation();
    const testId = +location.pathname.replace(/^\D+/g, "");

    const getTest = () => {
        setLoading(true);
        fetchTest(testId).then((res) => {
            setLoading(false);
            setTestData(res);
        });
    };

    useEffect(() => {
        getTest();
    }, [testId]);

    return loading ? (
        <span>Loading...</span>
    ) : (
        <ul className="test-info">
            <li className="test-info__row">{`Name:  ${testData?.name}`}</li>
            <li className="test-info__row">{`Type:  ${testData?.type}`}</li>
            <li className="test-info__row">{`Status:  ${testData?.status}`}</li>
            <li className="test-info__row">{`SiteId:  ${testData?.siteId}`}</li>
        </ul>
    );
};

export default TestInfo;
