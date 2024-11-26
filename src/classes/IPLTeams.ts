abstract class IPLTeams{

    noOfPlayers:Number=11;
    noOfTeams:Number=10;
    abstract noOfBatters:Number;
    abstract noOfBowlers:Number;
    abstract noOfAllrounders:Number;
    abstract noOfOvers:Number;

    abstract gamePlay():void;

    teamContains=()=>{
        console.log("batters,bowlers,All-rounders");
    }


    constructor(){
        console.log("IPLTeams constructor")
    }

}
export default IPLTeams;