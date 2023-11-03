import React from 'react';
import {Button} from 'react-native';
import {Target} from '../realm/models/Target';
import {useRealm} from '../realm';

export function GenerateDataButton() {
  const realm = useRealm();

  function onGenerateData() {
    realm.write(() => {
      [...Array(10).keys()].forEach(element => {
        realm.create(
          Target,
          Target.generate({
            description: `House ${element}`,
            type: 'House',
          }),
        );
      });

      [...Array(10).keys()].forEach(element => {
        realm.create(
          Target,
          Target.generate({
            description: `Flat ${element}`,
            type: 'Flat',
          }),
        );
      });
    });
  }

  return <Button title="Generate sample data" onPress={onGenerateData} />;
}
