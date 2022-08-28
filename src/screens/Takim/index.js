import {Image, View, StyleSheet, Text, TouchableOpacity,Dimensions} from "react-native";
export default function Takim(){
    return(
        <View style={styles.container}>
            <Image resizeMode={'contain'} style={{flex:1,width:null,height:null}} source={require('../../../assets/images/sahaV.png')}/>
            <TouchableOpacity style={[styles.card,styles.f1]} onPress={()=>{
            
            }}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardHeaderPositionTitle}>GF</Text>
                    <Text style={styles.cardHeaderHealthTitle}>100%</Text>
                </View>
                <Image resizeMode={'contain'} style={styles.cardImage} source={require('../../../assets/images/forma.png')}/>
                <View style={styles.cardFooter}><Text style={styles.cardFooterTitle}>1</Text></View>
            </TouchableOpacity>
            <View><Text style={{textAlign:'center',color:'white'}}>4-2-3-1</Text></View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#003740',
    },
    card:{
        backgroundColor:'darkred',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        borderWidth:2,
        width:65,
        height:90
    },
    cardHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        backgroundColor:'rgba(0,0,0,0.6)',
        borderRadius:10,
        paddingHorizontal:2
    },
    cardHeaderPositionTitle:{
        fontSize:11,
        color:'white',
        fontWeight:'bold'
    },
    cardHeaderHealthTitle:{
        fontSize:11,
        color:'green',
        fontWeight:'bold'
    },
    cardFooter:{
    
    },
    cardFooterTitle:{
        color:'white',
        fontWeight:'bold',
        fontSize:16
    },
    cardImage:{
        width:65,
        height:90
    },
    f1:{
        top:50,
        left:148,
    },
    f2:{
        top:120,
        left:10,
    },
    f3:{
        top:120,
        left:100,
    },
    f4:{
        top:120,
        left:180,
    },
    f5:{
        top:120,
        left:270,
    },
    f6:{
        top:50,
        left:140,
    },
    f7:{
        top:146,
        left:140,
    },
    f8:{
        top:40,
        left:200,
    },
    f9:{
        top:96,
        left:200,
    },
    f10:{
        top:150,
        left:200,
    },
    f11:{
        top:96,
        left:245,
    }
});