import { useSelector } from "react-redux";
import { IStateType } from "../store";

export const useValueSelector = () => useSelector((state: IStateType) => state.value);

