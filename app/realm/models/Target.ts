import Realm, {BSON} from 'realm';

type GenerateTarget = {
  description: string;
  type: string;
};

export class Target extends Realm.Object {
  _id!: BSON.ObjectId;
  description!: string;
  type!: string;

  static generate({description, type}: GenerateTarget) {
    return {
      _id: new Realm.BSON.ObjectId(),
      description,
      type,
    };
  }

  static schema = {
    name: 'Target',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      description: 'string',
      type: 'string',
    },
  };
}
