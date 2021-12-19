import { UserProfile } from "./profile";
import { Tweet } from "./tweet";
import { ITweet } from "./ITweet";

export class User{
    id: number;
    name: string;
    profilePic: string;
    handle: string;
    profile: UserProfile;

    tweetsender : ITweet;

    tweet(){
        var tweet = new Tweet(); //
        tweet.body = "This is my tweet";
        this.tweetsender.postTweet();
    }
}