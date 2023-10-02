/* eslint-disable react/prop-types */

import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../DarkMode/MoonIcon.jsx";
import { SunIcon } from "../DarkMode/SunIcon.jsx";

const DarkModeToggle = ({ darkMode, onToggleDarkMode }) => {
    const toggleDarkMode = () => {
        onToggleDarkMode(!darkMode)
    }

    return (
        <Switch
            onClick={toggleDarkMode}
            className=" mr-2 ml-auto"
            defaultSelected={darkMode}
            size="sm"
            color="primary"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
        />
    );
};

export default DarkModeToggle;
