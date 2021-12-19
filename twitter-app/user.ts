import { UserProfile } from "./profile";
import { Tweet } from "./tweet";
import { ITweet } from "./ITweet";
import { BaseModel } from "./basemodel";
import { ApiService } from "./apiservice";
import { UserService } from "./userservice";

export class User extends BaseModel{
    name: string;
    profilePic: string;
    handle: string;
    profile: UserProfile;

    tweetsender : ITweet;

    add(){
        new UserService().add(new User());
    }

    tweet(){
        var tweet = new Tweet(); //
        tweet.body = "This is my tweet";
        this.tweetsender.postTweet();
    }
}