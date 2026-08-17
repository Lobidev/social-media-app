import { View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { mainLayout } from '../styles/mainLayout';
type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void; 
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          mainLayout.buttonContainer,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}>
        <Pressable
          style={[mainLayout.button, { backgroundColor: '#fff' }]}
          onPress={onPress}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={mainLayout.buttonIcon} />
          <Text style={[mainLayout.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={mainLayout.buttonContainer}>
      <Pressable style={mainLayout.button} onPress={onPress}>
        <Text style={mainLayout.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

