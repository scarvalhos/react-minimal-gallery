import React from 'react';
interface CommonProps {
    children: React.ReactNode;
    className?: string;
    style?: object;
}
interface MainImageProps extends Partial<CommonProps> {
    src?: string;
    hover?: 'true' | 'false';
    ref: any;
    draggable: boolean;
    onClick: () => void;
    onMouseLeave: () => void;
}
interface ThumbnailProps extends Partial<CommonProps> {
    onClick?: (e: unknown) => unknown;
    onMouseOver?: (e: unknown) => unknown;
    onMouseLeave?: (e: unknown) => unknown;
}
export declare const Container: React.FC<CommonProps>;
export declare const MainImageContainer: React.FC<CommonProps>;
export declare const MainImage: React.FC<MainImageProps>;
export declare const ThumbnailsContainer: React.FC<CommonProps>;
export declare const ThumbnailsContent: React.FC<CommonProps>;
export declare const Thumbnail: React.FC<Partial<ThumbnailProps>>;
export {};
