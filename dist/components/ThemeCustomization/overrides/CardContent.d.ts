export default function CardContent(): {
    MuiCardContent: {
        styleOverrides: {
            root: {
                padding: number;
                '&:last-child': {
                    paddingBottom: number;
                };
            };
        };
    };
};
