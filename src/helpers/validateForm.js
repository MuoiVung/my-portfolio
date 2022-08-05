const phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const isEmpty = (value) => {
    return value.trim().length === 0;
};

export const isFormInvalid = (content, setSubmitMessage, defaultSubmitMessage) => {
    if (isEmpty(content.name)) {
        setSubmitMessage({ status: "error", message: "* Name can not be empty!" });
        return true;
    }

    if (isEmpty(content.phone)) {
        setSubmitMessage({
            status: "error",
            message: "* Phone can not be empty!",
        });
        return true;
    }

    if (!phonePattern.test(content.phone)) {
        setSubmitMessage({
            status: "error",
            message: "* Please put a valid phone number!"
        });
        return true;
    }

    if (isEmpty(content.email)) {
        setSubmitMessage({
            status: "error",
            message: "* Email can not be empty!",
        });
        return true;
    }

    if (!emailPattern.test(content.email)) {
        setSubmitMessage({
            status: "error",
            message: "* Please put a valid email!"
        });
        return true;
    }

    if (isEmpty(content.message)) {
        setSubmitMessage({
            status: "error",
            message: "* Message can not be empty!",
        });
        return true;
    }

    setSubmitMessage(defaultSubmitMessage);
    return false;
};

export const resetFormRef = (...args) => {
    args.forEach(input => input.current.value = "");
};
