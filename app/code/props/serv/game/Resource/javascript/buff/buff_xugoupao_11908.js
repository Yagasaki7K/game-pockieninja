importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//虚狗炮迟缓
function OnAdd(fightsystem, self, buff, fv, timer)
{
    var SlowRate = 30;
    fightsystem.ChangeAtkTime(self,self.AtkTimeMul-SlowRate,self.AtkTimeAdd);
    buff.SaveData3 = SlowRate;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    fightsystem.ChangeAtkTime(self,self.AtkTimeMul+buff.SaveData3,self.AtkTimeAdd);
}