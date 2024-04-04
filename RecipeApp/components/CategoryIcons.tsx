import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';


const CategoryIcons: React.FC = () => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require('../assets/burger-icon2.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require('../assets/pizza-icon2.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require('../assets/pasta-icon2.png')} style={styles.icon} />
      </TouchableOpacity>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconContainer: {
    marginHorizontal: 25,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default CategoryIcons;
