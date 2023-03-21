import { DataTypes, Model } from 'denodb';

export class Theme extends Model {
  static table = 'themes'
  static timestamps = true;

  static fields = {
    themeId: { primaryKey: true, type: DataTypes.UUID },
    title: { length: 256, type: DataTypes.STRING},
    description: { length: 256, type: DataTypes.STRING},
    url: DataTypes.STRING,
    time: DataTypes.INTEGER,
  };
}
