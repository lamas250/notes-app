import { colors } from "@utils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 5,
    width: "100%",
  },
  noteView: {
    padding: 10,
    height: "auto",
  },
  textTitle: {
    fontSize: 18,
  },
  textSub: {
    fontSize: 16,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  insideModalView: {
    height: 200,
    width: "90%",
    padding: 30,
    color: colors.header,
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary_900,
  },
  modalButtonsView: {
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    padding: 9,
    margin: 10,
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  modalText: {
    color: colors.title,
  },
});

export default styles;
