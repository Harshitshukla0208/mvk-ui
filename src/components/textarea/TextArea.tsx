import * as React from 'react';
import { TextareaHTMLAttributes, FC } from "react"
import './css/textarea.css';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

const TextArea: FC<TextAreaProps> = ({ label, ...props }) => {
    return (
        <div className="textarea-wrapper">
            {label && <label className="textarea-label">{label}</label>}
            <textarea className="styled-textarea" {...props}></textarea>
        </div>
    );
};

export {TextArea};
