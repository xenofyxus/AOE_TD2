class GameManager{

    constructor(team){
        this.team = team;
        score = 0;
        gold = 120;
        wood = 60;
        totalLife = 20;
        this.towerBarContent = {tower1 : tower1
                            ,tower2 : tower2
                            ,tower3 : tower3
                            ,tower4 : tower4}
        
    }

    buildTower(tower, x, y){
        gold -= tower2.cost.gold;
        wood -= tower2.cost.gold;
        towerGrid[x,y] = tower
    }


}