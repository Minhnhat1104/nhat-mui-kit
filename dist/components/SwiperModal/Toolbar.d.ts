import { default as React, RefObject } from 'react';
import { SwiperRef } from 'swiper/react';

interface ToolbarProps {
    swiperRef: RefObject<SwiperRef>;
    onClose: () => void;
    current: number;
    total: number;
    currentImage: {
        id: string;
        name: string;
        url: string;
    };
}
declare const _default: React.ForwardRefExoticComponent<ToolbarProps & React.RefAttributes<unknown>>;
export default _default;
