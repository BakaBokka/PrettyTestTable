import { useState, useCallback, useEffect } from "react";
import Page from "./components/Page/Page";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import { ITableItem, PageTitle, Test, Site, SortDirections } from "./types/types";
import useRequestData from "./hooks/useRequestData";
import { createSortFunction, fetchSites, fetchTests, removeUrlPrefix } from "./helpers";
import TableEmptyPlug from "./components/Table/TableEmptyPlug/TableEmptyPlug";
import { Route, Routes } from "react-router-dom";
import TestInfo from "./components/TestInfo/TestInfo";
import "./App.scss";

function App() {
    const [data, setData] = useState<ITableItem[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [reload, setReload] = useState<boolean>(false);
    const [sortDirection, setSortDirection] = useState(SortDirections.ASC);
    const [tests, testsLoading] = useRequestData<Test>(fetchTests, reload);
    const [sites, sitesLoading] = useRequestData<Site>(fetchSites, reload);
    const isLoading = testsLoading || sitesLoading;
    const noData = data.length === 0;

    const assembleData = useCallback(() => {
        const sitesById = Object.fromEntries(sites.map((el) => [el.id, el]));
        const result: ITableItem[] = tests.map(({ siteId, ...other }) => ({ ...other, site: removeUrlPrefix(sitesById[siteId]?.url) }));
        setTableData(result);
        setReload(false);
    }, [tests, sites]);

    useEffect(() => {
        assembleData();
    }, [assembleData]);

    const setTableData = (data: ITableItem[]) => {
        setData(data);
    };

    const handleSearch = useCallback(
        (value: string) => {
            setSearchValue(value);
            const filteredData = data.filter((item) => item.name.includes(value));
            setTableData(filteredData);

            if (!value) {
                handleReloadData();
            }
        },
        [data]
    );

    const handleReloadData = () => {
        setReload(true);
        setSearchValue("");
    };

    const handleSort = useCallback(
        (column: keyof ITableItem) => {
            const direction = sortDirection === SortDirections.ASC ? SortDirections.DESC : SortDirections.ASC;
            setSortDirection(direction);
            const sortedData = data.sort(createSortFunction<ITableItem>(column, direction));
            setTableData(sortedData);
        },
        [data, sortDirection]
    );

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Page title={PageTitle.DASHBOARD}>
                            <>
                                <Search resultsQuantity={data.length} searchValue={searchValue} onSearch={handleSearch} />
                                {!noData && !isLoading && <Table tableData={data} onSort={handleSort} sortDirection={sortDirection} />}
                                {noData && !isLoading && <TableEmptyPlug onClick={handleReloadData} />}
                                {isLoading && <span>Loading...</span>}
                            </>
                        </Page>
                    }
                />
                <Route path="/results/:testId" element={<Page title={PageTitle.RESULTS} subtitle="Order basket redesing" children={<TestInfo />} />} />
                <Route path="/finalize/:testId" element={<Page title={PageTitle.FINALIZE} subtitle="Spring promotion" children={<TestInfo />} />} />
            </Routes>
        </div>
    );
}

export default App;
