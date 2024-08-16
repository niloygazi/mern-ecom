class validationHelper {
    static IsEmail(value) {
        let EmailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return EmailRegx.test(value);
    }

    static IsMobile(value) {
        let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
        return MobileRegx.test(value);
    }

    static IsNumber(value) {
        let OnlyNumberRegx = /^\d+(\.\d+)?$/;
        return OnlyNumberRegx.test(value);
    }

    static Islater(value) {
        let onlyLetterRegex = /^[A-Za-z\'\s\.\,\-\!\@\#\$\%\^\&\*\(\)\[\]\{\}\:\;\"\<\>\?\/\+\=\_\\\|`\~]+$/
        return onlyLetterRegex.test(value)
    }

    static IsNull(value) {
        return value == null;
    }

    static IsEmpty(value) {
        return value.length === 0;
    }
}

export default validationHelper