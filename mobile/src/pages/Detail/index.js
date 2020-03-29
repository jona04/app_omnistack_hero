import React from 'react';
import {View,Image,Text,TouchableOpacity,Linking} from 'react-native';
import {Feather} from '@expo/vector-icons'
import {useNavigation,useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';


import styles from './styles';
import logoImg from '../../assets/logo.png';


export default function Detail(){
    const route = useRoute();
    const navigation = useNavigation();

    const incident = route.params.incident;
    const message = `Ola ${incident.name}, estou encontrato em contato para pois quero ajudar com o valor de ${
        Intl.NumberFormat('pt-BR',{
            style:'currency',
            currency:'BRL'
        }).format(incident.value)
    }.`;
    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Heroi do caso: ${incident.title}`,
            recipients: ['jonatas.iw@gmail.com'],
            body: message,
        });
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=5586999719767&text=${message}`)
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>
        <View style={styles.incident}>

            <Text style={styles.incidentProperty, {marginTop:0}}>Ong:</Text>
    <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

            <Text style={styles.incidentProperty}>Caso:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Valor:</Text>
            <Text style={styles.incidentValue}>
                {
                    Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency:'BRL'
                    }).format(incident.value)
                }
            </Text>
            
            

        </View>

        <View style={styles.contactBox}>
            <Text style={styles.heroTitle}>Slave o dia!</Text>
            <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

            <Text style={styles.heroDescription}>Entre me contato</Text>

            <View style={styles.actions}>
                
                <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                    <Text style={styles.actionText}>WhatsApp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action} onPress={sendMail}>
                    <Text style={styles.actionText}>E-email</Text>
                </TouchableOpacity>


            </View>
        </View>

        </View>
    );
}