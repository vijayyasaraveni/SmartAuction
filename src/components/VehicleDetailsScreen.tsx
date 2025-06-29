import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const VehicleDetailsScreen = ({ route, navigation }: any) => {
  const { vehicle } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{vehicle.year} {vehicle.make} {vehicle.model}</Text>
      <Image source={{ uri: 'https://via.placeholder.com/300x200' }} style={styles.image} />
      <Text>VIN: {vehicle.vin}</Text>
      <Text>Price: ${vehicle.price}</Text>
      <Button title="Edit Listing" onPress={() => {}} />
      <Button title="Open Offers" onPress={() => navigation.navigate('Offers', { vehicle })} />
      <Text style={{ marginTop: 20 }}>Seller Comments: Example comment about this vehicle.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  image: { width: '100%', height: 200, marginBottom: 20 },
});

export default VehicleDetailsScreen; 