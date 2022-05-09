import React, { useState } from "react";
import { View, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { doc, deleteDoc } from "firebase/firestore";
import Text from "../text";
import { db } from "@services/firebase";
import styles from "./styles";
import { colors } from "@utils";

const NoteCard = ({ data }) => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const editNote = (data) => {
    navigation.navigate("NewNote", {
      note: data,
    });
  };

  const deleteNote = async (data) => {
    await deleteDoc(doc(db, "registers", data.id));
    setIsOpen(false);
  };

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <View style={styles.modalView}>
          <View style={styles.insideModalView}>
            <Text style={[styles.modalText, { fontSize: 22 }]}>
              Do you wish delete this note?
            </Text>
            <View style={styles.modalButtonsView}>
              <TouchableOpacity
                color={"#E96379"}
                onPress={() => deleteNote(data)}
                style={[styles.button, { backgroundColor: "#E96379" }]}
              >
                <Text style={[styles.textTitle, styles.modalText]}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsOpen(false)}
                style={[styles.button, { backgroundColor: colors.primary_600 }]}
              >
                <Text style={[styles.textTitle, styles.modalText]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => editNote(data)}
        onLongPress={() => setIsOpen(true)}
        style={[styles.container, { backgroundColor: data.color }]}
      >
        <View style={styles.noteView}>
          <Text style={styles.textTitle}>{data.title}</Text>
          <Text style={styles.textSub}>{data.description}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
export default NoteCard;
