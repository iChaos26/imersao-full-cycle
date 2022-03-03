//--------------------------------------------
//Clean Architecture Layers(in order to develop)
//--------------------------------------------
//1 -> Entities(we are here)
//--------------------------------------------
//2 -> Use Cases
//--------------------------------------------
//3 -> Gateways  Presenters 

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { prototype } from "events";
import { Int32 } from 'mongodb';
import { Document, Schema as MongooseSchema} from 'mongoose'

export type TweetDocument = Tweet & Document;

@Schema()
export class TweetUser {
    @Prop({ type: MongooseSchema.Types.ObjectId})
    Id: string;
    @Prop()
    Name: string;
    @Prop()
    ScreenName: string;
    @Prop({type: MongooseSchema.Types.Mixed})
    Location: any;























}





export class Tweet {}
