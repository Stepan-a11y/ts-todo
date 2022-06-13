import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../store/actions/todoActions";

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(TodoActions, dispatch);
};