import { colors } from "@utils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary_600,
  },
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    borderRadius: 50,
    backgroundColor: colors.primary_900,
  },
  buttons: {
    marginTop: 80,
  },
});

export default styles;
