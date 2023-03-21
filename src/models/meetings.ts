import { DataTypes, Model } from 'denodb';

export class Meeting extends Model {
  static table = 'meetings';
  static timestamps = true;

  static fields = {
    meetingId: { primaryKey: true, type: DataTypes.UUID },
    title: { length: 256, type: DataTypes.STRING},
    start_at: DataTypes.TIMESTAMP,
  };
}
