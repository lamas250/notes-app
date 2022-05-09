import React, { useEffect, useState } from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import AddNoteSVG from "../../../assets/add-note.svg";
import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "./styles";
import { NoteCard, Text } from "@components";
import { colors } from "@utils";
import { MainRouteParams } from "src/routes/main.routes";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@services/firebase";

type HomeProps = {
  navigation: StackNavigationProp<MainRouteParams, "Home">;
};

export default function Home({ navigation }: HomeProps) {
  const [registers, setRegisters] = useState("");

  const queryRegisters = async () => {
    const q = query(
      collection(db, "registers"),
      where("userId", "==", "HD9A5X8ExhVbaz3wXPg1YdKV4LI2")
      // where("userId", "==", userObj.id)
    );
    return onSnapshot(q, (query) => {
      const list: any = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setRegisters(list);
    });
  };

  useEffect(() => {
    queryRegisters();
  }, []);

  function renderNote(item) {
    if (item.category === "note") {
      return <NoteCard data={item} />;
    }

    return <NoteCard data={item} />;
  }

  return (
    <View style={styles.container}>
      {registers && registers.length > 0 ? (
        <>
          <FlatList
            data={registers}
            contentContainerStyle={{
              padding: 24,
            }}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => renderNote(item.item)}
          />
        </>
      ) : (
        <>
          <AddNoteSVG width={300} height={300} />
          <Text style={{ color: colors.title }}>Create your first note!</Text>
        </>
      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("NewNote")}
      >
        <Ionicons name="add-outline" size={35} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
