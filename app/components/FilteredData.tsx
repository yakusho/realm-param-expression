import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useQuery} from '../realm';
import {Target} from '../realm/models/Target';

enum TargetTypes {
  HOUSE = 'House',
  FLAT = 'Flat',
}

export function FilteredData() {
  const data = useQuery(Target, query =>
    query.filtered('type in $0', Object.values(TargetTypes)),
  );

  if (data) {
    return (
      <ScrollView style={styles.container}>
        {data.map(target => (
          <Text key={target._id.toHexString()}>
            {target._id.toHexString()} - {target.description}
          </Text>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 200,
  },
});
