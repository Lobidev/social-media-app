import { Text, View, StyleSheet } from "react-native";
import  ImageViewer  from "@/components/ImageViewer";
import Button from "@/components/Button";
import { mainLayout } from "../../styles/mainLayout";

const ImageUpload = require("../../../assets/images/test-Image.png");

export default function UploadPostScreen() {
  return (
    <View style={mainLayout.container}>
      <View style={mainLayout.imageContainer}>
       <ImageViewer imgSource={ImageUpload} />
      </View>      

      <View style={mainLayout.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
   
      
    </View>
  );
}