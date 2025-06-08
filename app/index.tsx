import { Image, Text, View } from "react-native";
import Colors from "../constant/Colors";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:Colors.White
      }}>
      
      {/* cho nay chen icon */}
      <Image source={require('./../assets/images/LDcode.png')}
        style={{
        width:'100%',
        height: 300,
        marginTop:70
      }}/>
        
        {/* <View style ={{ 
        position:'absolute',
        height: Dimensions.get('screen').height,
        backgroundColor:'black',
        width: '100%',
        opacity:0.5
      }}> */}
        
        {/* cho nay chen anh nen */}
        {/* <Image source={require('./../assets/images/favicon.png')}
          style={{
            width:150,
            height:150,
            marginTop:100
          }}/> */}
      <View style={{
          padding:25,
          backgroundColor:Colors.Black,
          height:'100%',
          borderTopLeftRadius:35,
          borderTopRightRadius:35
          }}>

        <Text style ={{
          fontSize: 30,
          fontWeight: 'bold',
          color:Colors.White,
          textAlign:'center'
        }}>Welcome to LDCode</Text>
          
        <Text style ={{
          paddingTop:50,
          fontSize:25,
          fontWeight: 'bold',
          color:Colors.White,
          textAlign:'center'
        }}>Please Click Start to begin </Text>
          
          
          </View>
        
      </View>
    // </View>
  );
}
