import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';

export default function App() {
  const [shoppingItem, setShoppingItem] = useState('');
  const [shoppingList, setShoppingList] = useState([]);


  function createShoppingList() {
    const listItem = shoppingItem
    setShoppingList([...shoppingList, `${listItem}`])
    setShoppingItem('');
  }

  function clearShoppingList() {
    setShoppingList([]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <Text style={{fontSize: 20}}>Create a shoppinglist</Text>

        <TextInput style={styles.input} value={shoppingItem} onChangeText={shoppingItem => setShoppingItem(shoppingItem)}/>
      </View>

      <View style={styles.button}>
        <Button
          title="ADD"
          onPress={createShoppingList}
        />
        <Button
          title="CLEAR"
          onPress={clearShoppingList}
        />
        </View>
      <View style={styles.flistcontainer}>
      <FlatList
        data={shoppingList}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={((item, index) => index.toString())}
      />
      </View>
        
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#8c92ac',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  input : {
    fontSize: 22,
    width:200  , 
    borderColor: '#bf5700', 
    borderWidth: 1,
    padding: 20,
  },
  button: { 
    flex: 2,
    width: 180,
    flexDirection: "row", 
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 10,
  },
  flistcontainer: {
    flex: 2,
    fontSize: 20,
  }

})
;