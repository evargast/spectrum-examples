import {
    ActionButton,
    Button,
    Item,
    Menu,
    MenuTrigger,
    Provider,
} from "@adobe/react-spectrum";
import * as React from "react";
import { FC } from "react";

import LightestTheme from "../../styles/LightestTheme";

const App: FC = () => (
    <Provider theme={LightestTheme} colorScheme={"light"}>
        <MenuTrigger>
            <ActionButton>Edit</ActionButton>
            <Menu>
                <Item>Cut</Item>
                <Item>Copy</Item>
                <Item>Paste</Item>
            </Menu>
        </MenuTrigger>
        <div>
            <Button variant="cta"> Hello</Button>
        </div>
    </Provider>
);

export default App;
