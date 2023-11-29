import React, {FC} from "react";
import { useLocation } from 'react-router-dom';
import BackButton from "../BackButton/BackButton";
import "./Page.scss";
interface PageProps {
    title: string;
    subtitle?: string;
    children?: React.ReactElement;
}

const Page: FC<PageProps> = ({ title, subtitle, children }) => {
    const location = useLocation();
    const isNotMainPage  = location.pathname !== "/";

    return (
        <section className="page">
            <h2 aria-label="Page title" className="page__title">{title}</h2>
           {!!subtitle && <h3 aria-label="Page subtitle" className="page__subtitle">{subtitle}</h3>}
            <div className="page__content">{children}</div>
           {isNotMainPage && <BackButton/>}
        </section>
    );
};


export default Page;