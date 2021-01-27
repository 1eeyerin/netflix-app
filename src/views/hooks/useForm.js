import {useCallback} from "react";
import validate from "../../utils/validate";

function useForm(state, setState, error, setError) {

    const onChange = useCallback((e) => {
        let {name, value} = e.target;
        const updateInfo = {...state, [name] : value};
        setState(updateInfo);

        const result = validate({name, value, state, error});
        setError(result);

    }, [state, error]);


    const handleSubmit = useCallback((e) => {
        const result = validate({state, error});
        setError(result);
    }, []);

    return [onChange, handleSubmit];
}


export default useForm;