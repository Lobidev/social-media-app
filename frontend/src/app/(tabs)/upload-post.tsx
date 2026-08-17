import { View } from "react-native";
import  ImageViewer  from "@/components/ImageViewer";
import Button from "@/components/Button";
import { mainLayout } from "../../styles/mainLayout";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import Iconbutton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList"
import EmojiSticker from "@/components/EmojiSticker";
const PlaceholderImage = require("../../../assets/images/test-Image.png");

export default function UploadPostScreen() {
  // Auswabl des Bildes aus der Galerie
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(undefined);


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    } else{
      alert("You didn't select any image.");
    }
  };

    const onReset = () => {
      setShowAppOptions(false);
    };

    const onModalClose = () => {
       setIsModalVisible(false);
    }

    const onAddSticker = () => {
       setIsModalVisible(true);
    };

    const onSaveImageAsync = async () => {

    };


return (
    <View style={mainLayout.container}>
      <View style={mainLayout.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View style={mainLayout.optionsContainer}>
          <View style={mainLayout.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={mainLayout.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}