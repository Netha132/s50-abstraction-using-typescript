import IPLTeams from "./IPLTeams";

class Team extends IPLTeams{
    noOfOvers: Number=20;
    noOfBatters: Number=4;
    noOfBowlers: Number=4;
    noOfAllrounders: Number=3;
    gamePlay(): void {
        console.log(`Game between two Teams`);
    }


}
export default Team;