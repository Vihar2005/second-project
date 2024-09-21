import React, { useState } from "react";

const SelectAll = () => {
    const [options, setOptions] = useState([
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
    ]);

    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);

        if (selectAll) {
            setOptions(options.map((option) => ({ ...option, selected: true })));
        } else {
            setOptions(options.map((option) => ({ ...option, selected: false })));
        }
    };

    const handleOptionChange = (event) => {
        const { value } = event.target;

        setOptions(
            options.map((option) => {
                if (option.value === value) {
                    return { ...option, selected: !option.selected };
                } else {
                    return option;
                }
            })
        );
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
            />
            Select All
            <ul>
                {options.map((option) => (
                    <li key={option.value}>
                        <input
                            type="checkbox"
                            checked={option.selected}
                            onChange={handleOptionChange}
                            value={option.value}
                        />
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectAll;