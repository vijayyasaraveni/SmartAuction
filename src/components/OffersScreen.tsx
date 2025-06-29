import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MOCK_OFFERS } from '../data/mockData';

const OffersScreen = ({ route }: any) => {
  const { vehicle } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Offers for {vehicle.make} {vehicle.model}</Text>
      {MOCK_OFFERS.map(offer => (
        <View key={offer.id} style={styles.offerBox}>
          <Text>Offer amount: ${offer.amount}</Text>
          <View style={styles.offerActions}>
            <Button title="Decline" onPress={() => {}} />
            <Button title="Counter" onPress={() => {}} />
            <Button title="Accept Offer" onPress={() => {}} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  offerBox: { padding: 15, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 15 },
  offerActions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
});

export default OffersScreen; 