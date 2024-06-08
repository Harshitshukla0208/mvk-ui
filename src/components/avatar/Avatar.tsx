import * as React from 'react';
import { FC } from 'react';
import '../styles/avatar.css';

interface AvatarProps {
    src?: string;
    alt?: string;
    size?: number;
    shape?: 'circle' | 'square';
    border?: boolean;
    borderColor?: string;
    defaultImage?: string;
}

const Avatar: FC<AvatarProps> = ({
    src,
    alt = 'Avatar',
    size = 50,
    shape = 'circle',
    border = false,
    borderColor = '#ccc',
    defaultImage = 'https://th.bing.com/th/id/R.bbeb701052fa7e41334a988439becdc2?rik=y%2b%2fAf0g9rGTS8Q&riu=http%3a%2f%2fudiwater.com%2fwp-content%2fuploads%2f2016%2f11%2fperson-flat1.png&ehk=ZGD1tDUyT95iNn3RZj0vYvtJecbqOxszzSWKUjOUQNo%3d&risl=&pid=ImgRaw&r=0' // Assign the imported default image
}) => {
    return (
        <div
            className={`avatar ${shape}`}
            style={{
                width: size,
                height: size,
                border: border ? `2px solid ${borderColor}` : 'none',
            }}
        >
            <img 
                src={src || defaultImage} 
                alt={alt} 
                className="avatar-image" 
                onError={(e) => {
                    (e.target as HTMLImageElement).src = defaultImage;
                }}
            />
        </div>
    );
};

export { Avatar };