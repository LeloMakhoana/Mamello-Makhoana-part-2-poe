import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, } from 'react-native';
import { useRoute } from '@react-navigation/native';

// Define the type for a menu item
type MenuItem = {
  name: string;
  description: string;
  course: string;
  price: string;
};

// Define the type for the route parameters
type RouteParams = {
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

const AddMenuItemScreen = () => {
  const route = useRoute();
  const { setMenuItems } = route.params as RouteParams;  // Explicitly cast params type

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const addMenuItem = () => {
    const newItem: MenuItem = { name, description, course, price };
    setMenuItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Dish Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput placeholder="Course" value={course} onChangeText={setCourse} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" />
      <Button title="Add Item" onPress={addMenuItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default AddMenuItemScreen;

