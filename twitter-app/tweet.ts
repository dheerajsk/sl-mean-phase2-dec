import { ApiService } from "./apiservice";
import { BaseModel } from "./basemodel";


export class Tweet extends BaseModel{
    tweeterID: number;
    body: string;
    hearts: number;
    replies: Tweet[];
    noOfRetweets: number;
    timeStamp: Date;
    add(){
        new ApiService<Tweet>().add(new Tweet());
    }
}

// Class
// 1. Model
// 2. Service
// 3. Controller

// What are the db tables and classes you will create if you are asked to create Uber?
