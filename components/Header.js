import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={estilos.container}>
      <Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" }}
        style={estilos.logo}
        resizeMode="contain"
      />

      <View style={estilos.icones}>
        <View style={estilos.botao}>
          <Ionicons name="tv-outline" size={24} color="black" />
        </View>
        
        <View style={estilos.botao}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
        
        <View style={estilos.botao}>
          <Ionicons name="search-outline" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff"
  },
  logo: {
    width: 120,
    height: 35
  },
  icones: {
    flexDirection: "row"
  },
  botao: {
    marginLeft: 15
  }
});
