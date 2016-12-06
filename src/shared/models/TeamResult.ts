
import { TeamVote } from "./TeamVote";

export class TeamResult {
    votes: TeamVote[] = [];

    get approved(): boolean {
        let approves: number = 0;
        let rejects: number = 0;
        for (let vote of this.votes) {
            if (vote === TeamVote.Reject) {
                rejects++;
            } else {
                approves++;
            }
        }

        return approves > rejects;
    }
}