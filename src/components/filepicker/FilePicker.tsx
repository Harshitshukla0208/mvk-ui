import * as React from 'react';
import { FC, useState } from 'react';
import './css/filepicker.css';

interface FilePickerProps {
    onFileSelect: (files: FileList | null) => void;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    width?: string;
    height?: string;
}

const FilePicker: FC<FilePickerProps> = ({
    onFileSelect,
    textColor = "#000",
    backgroundColor = "#fff",
    borderColor = "#ccc",
    width = "100%",
    height = "200px",
}) => {
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setFileName(files[0].name);
            onFileSelect(files);
        } else {
            setFileName(null);
            onFileSelect(null);
        }
    };

    return (
        <div 
            className="file-picker" 
            style={{ 
                '--text-color': textColor,
                '--background-color': backgroundColor,
                '--border-color': borderColor,
                '--width': width,
                '--height': height
            } as React.CSSProperties}
        >
            <input 
                type="file" 
                className="file-input" 
                onChange={handleFileChange}
            />
            <div className="file-dropzone">
                <span className="material-symbols-outlined file-icon">
                    upload_file
                </span>
                <p>{fileName || "Drag and drop a file here or click to select a file"}</p>
            </div>
        </div>
    );
};

export { FilePicker };
