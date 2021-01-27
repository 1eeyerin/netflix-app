const validId = (name) => {
    if (!name || name.length < 2) {
        return "최소 2자 이상 입력해주세요.";
    }
    if (name.length > 20) {
        return "최대 20자까지 입력 가능합니다.";
    }
    return null;
};

const validPassword = (password) => {
    if (!password || password.length < 2) {
        return "최소 2자 이상 입력해주세요.";
    }
    if (password.length > 20) {
        return "최대 20자까지 입력 가능합니다.";
    }
    return null;
};

const validVerifyPassword = (password, verifyPassword) => {
    if (password !== verifyPassword){
        return "입력하신 비밀번호가 일치하지 않습니다.";
    }
    return null;
};

const validNickname = (name) => {
    if (!name || name.length < 2) {
        return "최소 2자 이상 입력해주세요.";
    }
    if (name.length > 20) {
        return "최대 20자까지 입력 가능합니다.";
    }
    return null;
};

function validate({name, value, state, error}){
    let newError = {};

    if(!name || name === "id") {
        newError.id = validId(value);
    }
    if(!name || name === "password") {
        newError.password = validPassword(value);
    }
    if(!name || name === "verifyPassword") {
        newError.verifyPassword = validVerifyPassword(state?.password, value);
    }
    if(!name || name === "nickname") {
        newError.nickname = validNickname(value);
    }

    return {...error, ...newError};
}


export default validate;