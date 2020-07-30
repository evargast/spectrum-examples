import { defaultTheme } from "@adobe/react-spectrum";
import { Theme } from "@react-types/provider";

import lightest from "./spectrum-lightest.css";

const LightestTheme: Theme = {
    ...defaultTheme,
    light: lightest,
};

export default LightestTheme;
