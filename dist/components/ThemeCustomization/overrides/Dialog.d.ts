export default function Dialog(): {
    MuiDialog: {
        styleOverrides: {
            root: {
                '& .MuiDialog-container': {
                    alignItems: string;
                };
                '& .MuiBackdrop-root.MuiModal-backdrop': {
                    backgroundColor: string;
                };
                zIndex: number;
            };
        };
    };
};
