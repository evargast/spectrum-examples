import {
    ActionButton,
    defaultTheme,
    Item,
    Menu,
    MenuTrigger,
    Provider,
} from "@adobe/react-spectrum";
import React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
    <Provider theme={defaultTheme} colorScheme={"light"}>
        <MenuTrigger>
            <ActionButton>Show menu</ActionButton>
            <Menu>
                <Item>Cut</Item>
                <Item>Copy</Item>
                <Item>Paste</Item>
            </Menu>
        </MenuTrigger>
    </Provider>,
    document.getElementById("root"),
);
