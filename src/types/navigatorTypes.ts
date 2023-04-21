import type {NativeStackScreenProps} from '@react-navigation/native-stack';
//defined main navigator's type to check route name and it's params
export type RootStackParamList = {
  Splash: undefined; //doesn't have params
  Characters: undefined;
};

export type ScreenProps = NativeStackScreenProps<RootStackParamList>;
