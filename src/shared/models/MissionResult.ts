
import { MissionVote } from "./MissionVote";

export class MissionResult {
    votes: MissionVote[] = [];

    get numberOfFailures(): number {
        let count: number = 0;
        for (let vote of this.votes) {
            if (vote === MissionVote.Fail) {
                count++;
            }
        }

        return count;
    }
}