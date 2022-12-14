// Dependencies
import React from 'react';
import { Modal, TouchableOpacity, View, Image} from 'react-native';

import { styles } from './styles';
import close from '../assets/icons/close.png'
interface Props{
    onDismiss:() => void,
    onShow:() => void,
    visible:boolean,
    children: JSX.Element | JSX.Element[],
    onClose:()=>void,
}


function ModalCustom({ onDismiss = () => null, onShow = () => null, visible, children, onClose }:Props) {
    

    return (
        <Modal
            animationType="fade"
            onDismiss={onDismiss}
            onShow={onShow}
            transparent
            visible={visible}
        >
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            onPress={onClose}
                        >
                            <Image source={close} style={styles.btnClose} />
                        </TouchableOpacity>
                    </View>

                    {children}
                </View>
            </View>
        </Modal>
    );
}

export default ModalCustom;