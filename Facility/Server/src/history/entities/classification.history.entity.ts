import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Document } from 'mongoose';

export type ClassificationHİstoryDocument = ClassificationHistory & Document;

@Schema()
export class ClassificationHistory {
  @Prop({ type: Object })
  classification: object;

  @Prop({ type: Object })
  user: object;

  @Prop({ type: Object })
  requestInformation: object;
}

export const ClassificationHistorySchema = SchemaFactory.createForClass(ClassificationHistory);
ClassificationHistory;
