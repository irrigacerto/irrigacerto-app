import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import { Button } from "../../components/button";
import { Typography } from "../../components/typography";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../routes/types/StackNavigationProps";

export default function UseTerms() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
      }}
    >
      <WebView
        originWhitelist={["*"]}
        source={{
          uri: "https://docs.google.com/gview?embedded=true&url=https://ik.imagekit.io/irrigacerto/termos-de-uso.pdf",
        }}
      />
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          bg-color="positive"
          style={{
            width: 250,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Typography color="pure-white" size="normal" weight="regular">
            Concordo com os termos
          </Typography>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
