import {
    Content,
    Item,
    lightTheme,
    Picker,
    Provider,
    Text,
} from "@adobe/react-spectrum";
import { Tabs } from "@react-spectrum/tabs";
import React, { FC } from "react";

const TabsPicker: FC = () => {
    return (
        <Provider theme={lightTheme} colorScheme="light">
            <Tabs aria-label="History of Ancient Rome">
                <Item title="Founding of Rome" key="FoR">
                    <Content marginTop="size-250" marginStart="size-125">
                        <Text>
                            Arma virumque cano, Troiae qui primus ab oris.
                        </Text>
                    </Content>
                </Item>
                <Item title="Monarchy and Republic" key="MaR">
                    <Content marginTop="size-250" marginStart="size-125">
                        <Picker label="Choose frequency">
                            <Item key="rarely">Rarely</Item>
                            <Item key="sometimes">Sometimes</Item>
                            <Item key="always">Always</Item>
                        </Picker>
                    </Content>
                </Item>
                <Item title="Empire" key="Emp">
                    <Content marginTop="size-250" marginStart="size-125">
                        <Text>Alea jacta est.</Text>
                    </Content>
                </Item>
            </Tabs>
        </Provider>
    );
};

export default TabsPicker;
