import { mainLayout } from "../styles/mainLayout";
import { Image } from "expo-image";

/* 
Variable für die Props des ImageViewer Components, die bei übergabe 
des Bildes an das Component übergeben werden.
*/
type Props = {
    imgSource: string;
};

export default function ImageViewer({ imgSource }: Props) {
    return (
        <Image source={ imgSource } style={mainLayout.image} />
    );
}