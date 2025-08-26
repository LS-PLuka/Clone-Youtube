import { ScrollView, View, StyleSheet } from "react-native";

import Header from "./components/Header";
import Categories from "./components/Categories";
import VideoCard from "./components/VideoCard";

export default function App() {
  const listaCategorias = ["Tudo", "Música", "Jogos", "Ao vivo", "Filmes", "Esportes"];
  
  const listaVideos = [
    {
      thumbnail: "https://i.ytimg.com/vi/YY_hf0FOIcU/maxresdefault.jpg",
      titulo: "CURSO DE SPRING para INICIANTES",
      canal: "Fernanda Kipper | Dev",
      visualizacoes: "147 mil visualizações",
      avatar: "https://yt3.googleusercontent.com/yKEHzyY0ji7NEwlIrCjByCkzbhLDvZZY5ElSixb9g3Vhk2nFqKjjKsZ9BiwYPbOh_M_tZGjx=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/3WiCkHDcPso/maxresdefault.jpg",
      titulo: "Curso de Java e Kotlin - Variáveis",
      canal: "Stack Mobile",
      visualizacoes: "3,4 mil visualizações",
      avatar: "https://yt3.googleusercontent.com/ytc/AIdro_mSJjrCIJFa8HM2Zimmssl2jYV6ZN6jj2ed9n5J2bqXkQ=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      thumbnail: "https://i.ytimg.com/vi/SqU9v_V32RA/maxresdefault.jpg",
      titulo: "CURSO GRATIS SPRING BOOT PARA INICIANTES | 2025",
      canal: "Matheus Leandro Ferreira",
      visualizacoes: "24 mil visualizações",
      avatar: "https://yt3.googleusercontent.com/UB1fl8S3W4cmkVRuifDQQyGhvrdh9wpFf5HBQoLrc5uM_ALG7oR3DxEWa4orDRDHHct5FJGu=s900-c-k-c0x00ffffff-no-rj"
    }
  ];

  return (
    <ScrollView style={estilos.container}>
      <Header />
      
      <Categories items={listaCategorias} />
      
      <View>
        {listaVideos.map((video, indice) => (
          <VideoCard key={indice} {...video} />
        ))}
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: { 
    backgroundColor: "#fff" 
  }
});
