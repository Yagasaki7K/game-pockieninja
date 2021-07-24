importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//日落, 按时间提高伤害
function OnAdd(fightsystem, self, buff, fv, timer)
{
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    //buff.SaveData表示熔解的概率
    buff.SaveData = Math.pow(timer/200,0.5)*3;
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
}