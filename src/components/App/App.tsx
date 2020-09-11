import {
    ActionButton,
    defaultTheme,
    Item,
    Menu,
    MenuTrigger,
    Provider,
} from "@adobe/react-spectrum";
import * as React from "react";
import { FC } from "react";

const App: FC = () => (
    <Provider theme={defaultTheme} colorScheme={"light"}>
        <MenuTrigger>
            <ActionButton>Show menu</ActionButton>
            <Menu>
                <Item>Cut</Item>
                <Item>Copy</Item>
                <Item>Paste</Item>
            </Menu>
        </MenuTrigger>
    </Provider>
);

export default App;
