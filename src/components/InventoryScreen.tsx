import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Pressable } from 'react-native';
import { MOCK_INVENTORY } from '../data/mockData';
// import Ionicons from 'react-native-vector-icons';


const InventoryScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(MOCK_INVENTORY);

  const handleSearch = (text: string) => {
    setSearch(text);
    if (text.trim() === '') {
      setData(MOCK_INVENTORY);
    } else {
      setData(
        MOCK_INVENTORY.filter(
          item =>
            item.make.toLowerCase().includes(text.toLowerCase()) ||
            item.model.toLowerCase().includes(text.toLowerCase()) ||
            item.vin.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  const renderHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={[styles.headerCell, { flex: 1.2 }]}>Year</Text>
      <Text style={[styles.headerCell, { flex: 2 }]}>Make</Text>
      <Text style={[styles.headerCell, { flex: 2 }]}>Model</Text>
      <Text style={[styles.headerCell, { flex: 2 }]}>VIN</Text>
      <Text style={[styles.headerCell, { flex: 1.5 }]}>Price</Text>
      <Text style={[styles.headerCell, { flex: 1.2 }]}>Status</Text>
    </View>
  );

  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('VehicleDetails', { vehicle: item })}>
      <View style={styles.tableRow}>
        <Text style={[styles.cell, { flex: 1.2 }]}>{item.year}</Text>
        <Text style={[styles.cell, { flex: 2 }]}>{item.make}</Text>
        <Text style={[styles.cell, { flex: 2 }]}>{item.model}</Text>
        <Text style={[styles.cell, { flex: 2 }]}>{item.vin}</Text>
        <Text style={[styles.cell, { flex: 1.5 }]}>${item.price}</Text>
        <Text style={[styles.cell, { flex: 1.2 }]}>{item.status}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Text style={styles.pageTitle}>Manage Inventory</Text>
        <Pressable style={styles.filterButton} onPress={() => {}}>
          {/* <Ionicons name="filter" size={24} color="#007bff" /> */}
        </Pressable>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by make, model, or VIN..."
        value={search}
        onChangeText={handleSearch}
        placeholderTextColor="#888"
      />
      <View style={styles.tableContainer}>
        {renderHeader()}
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },
  filterButton: {
    padding: 6,
    borderRadius: 6,
    backgroundColor: 'rgba(0,123,255,0.08)',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    color: '#222',
  },
  tableContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#e9ecef',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 2,
  },
  headerCell: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 15,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 2,
    alignItems: 'center',
  },
  cell: {
    fontSize: 14,
    color: '#222',
    textAlign: 'center',
  },
});

export default InventoryScreen; 