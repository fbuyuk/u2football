import {StyleSheet, Image, View, Text, TouchableOpacity,ImageBackground} from "react-native";
import {useEffect, useState} from "react";
import {masteries} from "../../data/masteries";

export default function Defans({navigation}) {
    let [kp,setKp]=useState(30);

    useEffect(()=>{

    },[kp])
    return (
        <ImageBackground source={require('../../../assets/images/kabiliyetler/bg.png')} resizeMode="cover"  style={styles.container}>
            {masteries.tree.Hucum.map((slot,index)=>{
                return(
                    <View key={index} style={styles.row}>
                        {slot.map((rune)=>{
                            return(
                                <TouchableOpacity key={rune.masteryId} style={styles.kabiliyet} onPress={()=>{}}>
                                    <Image
                                        source={require('../../../assets/images/kabiliyetler/106.png')}
                                        style={styles.kabiliyetImage}
                                    />
                                    <Text style={{position:'absolute',color:'white',fontSize:16,bottom:0,right:0}}>0/{masteries.data[rune.masteryId].ranks}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                )
            })}
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c0a01",
        justifyContent: "center",
        paddingHorizontal: 50,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "transparent",
        marginVertical:12
    },
    kabiliyet: {
        borderWidth: 2,
        borderColor:'gray',
        marginHorizontal: 12,
        backgroundColor: "transparent",
        overflow:'hidden',
    },
    kabiliyetImage:{
        width:64,
        height:64,
    },
    kabiliyetGrayScale:{
        position:'absolute',
        width:64,height:64,
        opacity:0.8,
        tintColor:'#aaa'
    }
});
