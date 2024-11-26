import IPLTeams from "./IPLTeams";

class ODITeams extends IPLTeams{
    noOfOvers: Number=50;
    noOfBatters: Number=4;
    noOfBowlers: Number=4;
    noOfAllrounders: Number=3;
    gamePlay(): void {
        console.log(`Game between India Vs Pakistan`)
    }

    constructor(){
        super();
        console.log(`ODI constructor`)
    }

}
export default ODITeams;