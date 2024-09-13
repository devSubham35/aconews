export const CustomStyle = () => ({
    indicatorSeparator: (styles) => ({
        ...styles,
        display: "none",
    }),

    control: (provided, state) => ({
        ...provided,
        backgroundColor: 'white',
        border: "2px solid #F2F2F2",
        boxShadow: "none",
        borderRadius: "12px",
        ":active": {
            color: "#ff4000",
        },
        ":hover": {
            borderColor: "#F2F2F2",
        },
        cursor: "pointer",
        paddingLeft: "5px",
        "@media (max-width: 640px)": { // Mobile (sm)
            fontSize: 10,
            height: 20,
        },
        "@media (min-width: 641px) and (max-width: 768px)": { // Tablet (md)
            fontSize: 15,
            height: 62,
        },
        "@media (min-width: 769px)": { // Desktop (lg and above)
            fontSize: 16,
            height: 58,
        },
    }),

    menu: (base, provided) => ({
        ...base,
        background: 'white',
        borderRadius: "8px",
        borderColor: "#efefef",
        border: "1px solid #f2f2f2",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
    }),

    menuList: (provided, state) => ({
        ...provided,
        paddingTop: 0,
        paddingBottom: 0,
        "::-webkit-scrollbar": {
            width: "4px",
            height: "0px",
            borderRadius: "10px",
        },
        "::-webkit-scrollbar-track": {
            background: "#f1f1f100",
            marginTop: "5px",
            marginBottom: "5px",
        },
        "::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(128, 128, 128, 0.4)",
            borderRadius: "8px",
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: "#555",
        },
    }),

    option: (base, { data, isDisabled, isFocused, isSelected }) => ({
        ...base,
        backgroundColor: isSelected ? "#1d4ed81a" : "transparent",
        color: isSelected ? "#1d4ed8" : "",
        cursor: "pointer",
        ":hover": {
            backgroundColor: isSelected ? "" : "#1d4ed81a",
            color: isSelected ? "" : "#1d4ed8",
        },
        ":active": {
            backgroundColor: isSelected ? "" : "#ff40001a",
            color: isSelected ? "" : "#ff4000",
        },
    }),
});
