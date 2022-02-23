export const convertToStr = (value: string | string[]) => {
    if (Array.isArray(value)) {
        return value[0];
    }

    return value;
}

export const getValueStr = (value: string | string[]) =>{
    const str = convertToStr(value);
    return !str || str.toLowerCase() === 'all' ? null : str;
}

export const getValueNumber = (value: string | string[]) =>{
    const str = convertToStr(value);
    const number = parseInt(str);
    return isNaN(number) ? null : number;
}