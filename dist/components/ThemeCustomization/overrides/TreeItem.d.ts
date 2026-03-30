export default function TreeItem(): {
    MuiTreeItem: {
        styleOverrides: {
            content: {
                padding: number;
            };
            iconContainer: {
                '& svg': {
                    fontSize: string;
                };
            };
        };
    };
};
