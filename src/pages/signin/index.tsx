import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import { styles } from './styles';
import { typography } from '@/theme/typography';
import { useAppFonts } from '@/hooks/useAppFonts';
import { COLORS } from '@/constants/colors';


export default function Signin() {
  const fontsLoaded = useAppFonts();

  if(!fontsLoaded){
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
          <View style={styles.containerIcon}>
              <Ionicons name="checkmark-done-outline" size={30} color={COLORS.primary} />
          </View>
          <View style={styles.containerText}>
            <Text style={[styles.text1, typography.title]}>Bem vindo</Text>
            <Text style={[styles.text2, typography.text]}>Continue sua jornada rumo à produtividade consciente.</Text>
          </View>
      </View>

      <View style={styles.box2}>/
        <Text style={[styles.textInput, typography.textMedium]}>Email</Text>
        <View style={styles.containerInput}>
          <Ionicons name="mail-outline" size={20} color={COLORS.primary} />
          <TextInput placeholder='Digite seu email' style={styles.input}/>
        </View>  

        <Text style={[styles.textInput, typography.textMedium]}>Senha</Text>
        <View style={styles.containerInput}>
          <Ionicons name="lock-closed-outline" size={20} color={COLORS.primary} />
          <TextInput placeholder='Digite sua senha' style={styles.input} />
        </View>
      </View>

      <View style={styles.box3}>
        
      </View>

      <StatusBar style="light" />
    </View>
  );
}

