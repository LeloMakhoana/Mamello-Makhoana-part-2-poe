import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Define the type for a menu item
type MenuItem = {
  name: string;
  description: string;
  course: string;
  price: string;
};

const HomeScreen = () => {
  // State typed as an array of MenuItem objects
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Menu</Text>
      <Text>Total Items: {menuItems.length}</Text>
      
      {/* FlatList will now render each menu item */}
      <FlatList
        data={menuItems} // Use menuItems array as the data source
        keyExtractor={(item) => item.name} // Ensure unique key extraction (use name or any unique identifier)
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>Course:{item.name} - {item.course}</Text>
            <Text>Description:{item.description}</Text>
            <Text>Price: ${item.price}</Text>
          </View>
        )}
      />

      {/* Button to navigate to Add Menu Item screen */}
      <Button
        title="Add Menu Item"
        onPress={() => navigation.navigate('Add Menu Item', { setMenuItems })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  menuItem: { marginBottom: 10 }
});

export default HomeScreen;


