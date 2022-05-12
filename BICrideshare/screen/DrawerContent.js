import React from "react";
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Text, Drawer, TouchableRipple, Switch } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView { ... props}>

            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem icon={(color, size) => (
                        <Icon name="account-off" color={color} size={size}/>
                    )}
                    label="Sign Out"
                    onPress={() => {}}>
                </DrawerItem>
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    DrawerContent: {
        flex: 1,
    },
    UserInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#8a2be2',
        borderTopWidth: 1,
    },
    perference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});