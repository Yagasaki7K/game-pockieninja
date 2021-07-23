importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//雾
function OnAdd(fightsystem, self, buff, fv, timer)
{
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    //buff.SaveData表示先发的概率
    buff.SaveData = 100 - 100/(Math.pow(timer/200,0.5)*0.03+1);
    self.PriorityMul = buff.SaveData;
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    self.PriorityMul = 0;
}