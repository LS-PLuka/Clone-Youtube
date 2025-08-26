import { View, Text, Image, StyleSheet } from "react-native";

export default function VideoCard({ thumbnail, titulo, canal, visualizacoes, avatar }) {
  return (
    <View style={estilos.cartao}>
      <Image source={{ uri: thumbnail }} style={estilos.thumbnail} />
      
      <View style={estilos.info}>
        <Image 
          source={avatar}
          style={estilos.avatar}
        />
        
        <View style={{ flex: 1 }}>
          <Text style={estilos.titulo}>{titulo}</Text>
          <Text style={estilos.meta}>{canal} • {visualizacoes}</Text>
        </View>
        
        <Text style={estilos.menu}>⋮</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  cartao: { 
    marginBottom: 15 
  },
  thumbnail: { 
    width: "100%", 
    height: 200, 
    backgroundColor: "#ccc" 
  },
  info: { 
    flexDirection: "row", 
    alignItems: "flex-start", 
    padding: 10, 
    gap: 10 
  },
  avatar: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: "#999" 
  },
  titulo: { 
    fontWeight: "bold", 
    fontSize: 14 
  },
  meta: { 
    color: "#555", 
    fontSize: 12, 
    marginTop: 2 
  },
  menu: { 
    fontSize: 20, 
    color: "#555", 
    paddingHorizontal: 6 
  }
});
