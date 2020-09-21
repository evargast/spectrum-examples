import {
    ActionButton,
    Button,
    ButtonGroup,
    Content,
    Dialog,
    DialogTrigger,
    Divider,
    Header,
    Heading,
    Item,
    Menu,
    MenuTrigger,
    Text,
} from "@adobe/react-spectrum";
import React, { FC, ReactText, useState } from "react";

const MenuDialog: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onMenuAction = (key: ReactText) => {
        if (key === "dialog") {
            setIsOpen(true);
        }
    };

    return (
        <>
            <MenuTrigger>
                <ActionButton>Edit</ActionButton>
                <Menu onAction={onMenuAction}>
                    <Item key="cut">Cut</Item>
                    <Item key="copy">Copy</Item>
                    <Item key="paste">Paste</Item>
                    <Item key="dialog">Dialog</Item>
                </Menu>
            </MenuTrigger>
            {/* Dialog outside the Menu so it can stay mounted after
             the Menu disappears after click */}
            <CustomDialog isOpen={isOpen} close={() => setIsOpen(false)} />
        </>
    );
};

const CustomDialog: FC<{ isOpen: boolean; close: VoidFunction }> = ({
    isOpen,
    close,
}) => {
    return (
        <DialogTrigger isOpen={isOpen}>
            <>{/* Empty fragment instead of trigger */}</>
            <Dialog>
                <Heading>Internet Speed Test</Heading>
                <Header>Connection status: Connected</Header>
                <Divider />
                <Content>
                    <Text>Start speed test?</Text>
                </Content>
                <ButtonGroup>
                    <Button variant="secondary" onPress={close}>
                        Cancel
                    </Button>
                    <Button variant="cta" onPress={close}>
                        Confirm
                    </Button>
                </ButtonGroup>
            </Dialog>
        </DialogTrigger>
    );
};

export default MenuDialog;
