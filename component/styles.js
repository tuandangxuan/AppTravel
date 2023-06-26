import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    home_Container:{
        flex:1,
        padding:5,
        marginTop: 20,
    },
    home_Greet: {
        color: "red",
        margin:10,
        marginBottom: 10,
        fontSize:20
          
    },
    home_Search:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        height:40,
        marginBottom: 10,
    },
    home_Tours:{
        marginTop: 20,
        height:400
    },
    home_Tour :{
        flexDirection:'row',
        borderBottomWidth:1,
        height:140
        
    },
    home_ImageTuor:{
        width:120,
        height:120, 
        borderRadius: 10,
    },
    home_FontSizeMoTa:{
        fontSize:12,
    }




});

export default styles;
