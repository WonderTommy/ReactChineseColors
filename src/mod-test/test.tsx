import { FunctionComponent } from "react";
import * as styled from "./styles";

interface ITest {
    value: number;
}

export const Test: FunctionComponent<ITest> = ({ value }) => {
    return (
        <styled.TestStyledDiv>
            <styled.TestStyledP>{`${value}`}</styled.TestStyledP>
        </styled.TestStyledDiv>
    );
};
