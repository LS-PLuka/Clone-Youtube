import { ScrollView, Text, StyleSheet } from "react-native";

export default function Categories({ items }) {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={estilos.container}
    >
      {items.map((item, indice) => (
        <Text key={indice} style={estilos.item}>{item}</Text>
      ))}
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff"
  },
  item: {
    marginRight: 10,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#f0f0f0"
  }
});
