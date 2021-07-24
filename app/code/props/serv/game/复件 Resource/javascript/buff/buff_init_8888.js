importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//记录状态免疫
function OnAdd(fightsystem, self, buff, fv, timer)
{    
    buff.SaveData = 0; 
    /* 记录有限次的buff
       个位：眩晕
       十位：冰冻
       百位：麻痹
       千位：五封
       万位：尸封
       十万：毒         */   
    buff.SaveData1 = 0;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    

}



