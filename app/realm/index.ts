import {createRealmContext} from '@realm/react';
import {Target} from './models/Target';

export const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext({
    schemaVersion: 1,
    schema: [Target],
  });
