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
    },
    Profile_button: {
        backgroundColor: "#D5DEE3",
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 20,
        marginTop: 20,
      },
      Profile_buttonText: {
        fontSize: 16,
      },
      ChangePass_password: {
        padding: 5,
        borderWidth: 1,
        borderColor: "#94cbf4",
        borderRadius: 5,
        width: 250,
        height: 45,
        marginBottom: 20,
        fontSize: 100,
        color: "#94cbf4",
        paddingRight: 45,
      },
      ChangePass_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: -50,
        paddingHorizontal: 20,
      },
      ChangePass_box: {
        borderRadius: 15,
        borderColor: "#D5DEE3",
        backgroundColor: "#D5DEE3",
        paddingHorizontal: 30,
        paddingBottom: 50,
        paddingTop: 30,
        alignItems: "center",
      },
      ChangePass_T: {
        height: "100%",
        aspectRatio: 1,
        position: "absolute",
        right: 0,
        width: 40,
        padding: 4,
        margin: 7,
      },
      ChangePass_Text: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
      },
      ChangePass_bottom: {
        width: 200,
        height: 60,
        backgroundColor: "#4287D4",
        borderRadius: 20,
        borderColor: "#4287D4",
        justifyContent: "center",
        marginTop: 50,    
        alignItems: "center",
        
      },




});

export default styles;
