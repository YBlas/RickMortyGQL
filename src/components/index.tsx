import { useQuery } from "@apollo/client";
import { FC } from "react";
import { GET_PAGES } from "../queries";
import { IndexProps, pagesType } from "../types";
import "../styles/Index.css";
import styled from "@emotion/styled";

const ThisPage = styled.pre`
    font-size: large;
    border-radius: 40%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`


const Index: FC<IndexProps> = ({ page, changePage }) => {

    const { data, loading, error, refetch } =
        useQuery<pagesType>(GET_PAGES);

    const NextPageIndicator = (IN: number) => {
        if (IN < data!.characters.info.pages) {
            return <pre onClick={() => { changePage(page + 1) }}>{page + 1}</pre>
        }
    }

    const PreviousPageIndicator = (IN: number) => {
        if (IN > 1) {
            return <pre onClick={() => { changePage(page - 1) }}>{page - 1}</pre>
        }
    }

    const LastPageIndicator = (IN: number) => {
        if (IN < data!.characters.info.pages) {
            return (
                <div className="LastPageIndicator">
                    <pre>...</pre>
                    <pre onClick={() => { changePage(data!.characters.info.pages) }}>{data?.characters.info.pages}</pre>
                </div>
            )
        }
    }

    const FirstPageIndicator = (IN: number) => {
        if (IN > 2) {
            return (
                <div className="FirstPageIndicator">
                    <pre onClick={() => { changePage(1) }}>{1}</pre>
                    <pre>...</pre>
                </div>
            )
        }
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (data) {
        return (
            <div className="Index">
                <button onClick={() => {
                    if (page > 1) changePage(page - 1);
                }} >Prev</button>

                {FirstPageIndicator(page)}
                {PreviousPageIndicator(page)}
                <ThisPage onClick={() => { changePage(page) }}>{page}</ThisPage>
                {NextPageIndicator(page)}
                {LastPageIndicator(page)}

                <button onClick={() => {
                    if (page < data!.characters.info.pages) changePage(page + 1);
                }}>Next</button>
            </div>
        );
    }

    else return <h1>Error</h1>
}

export default Index;