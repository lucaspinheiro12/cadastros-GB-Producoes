import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import ReactInputMask from "react-input-mask";

export const Mascara = (classname:string, type:HTMLInputTypeAttribute, onchange:ChangeEventHandler,value: string | ReadonlyArray<string> | number | undefined) =>{
    return(
        <ReactInputMask
        placeholder="123.123.123-12"
        mask="999.999.999-99"
        value={value}
        onChange={onchange}
        className={classname}
        type={type}
        required
        />
    );
};

export const MascaraData = (classname:string, type:HTMLInputTypeAttribute, onchange:ChangeEventHandler,value: string | ReadonlyArray<string> | number | undefined) =>{
    return(
        <ReactInputMask
        placeholder="MM/DD/AAAA"
        mask="99-99-9999"
        value = {value}
        onChange={onchange}
        className={classname}
        type={type}
        required
        />
    );
};

export const MascaraPis = (classname:string, type:HTMLInputTypeAttribute, onchange:ChangeEventHandler,value: string | ReadonlyArray<string> | number | undefined) =>{
    return(
        <ReactInputMask
        placeholder="123.12345.12-1"
        mask="999.99999.99-9"
        value={value}
        onChange={onchange}
        className={classname}
        type={type}
        required
        />
    );
};

export const MascaraTelefone = (classname:string, type:HTMLInputTypeAttribute, onchange:ChangeEventHandler,value: string | ReadonlyArray<string> | number | undefined) =>{
    return(
        <ReactInputMask
        placeholder="(dd) 98765-4321"
        mask="(99)99999-9999"
        value={value}
        onChange={onchange}
        className={classname}
        type={type}
        required
        />
    );
};
