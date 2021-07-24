importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//黑暗行之术
function OnAdd(fightsystem, self, buff, fv, timer)
{
    buff.LifeTime = buff.SaveData;
    var SlowRate = 50 * (1 + 0.01 * LogicTool.ToInt(buff.SaveData1 * 0.01));
	fightsystem.ChangeAtkTime(self,self.AtkTimeMul - SlowRate, self.AtkTimeAdd);
	fightsystem.ChangeHit(self,self.HitMulMul, self.HitMulAdd - 430);
	fightsystem.ChangeDodge(self,self.DodgeMulMul, self.DodgeMulAdd - 290);
	buff.SaveData1 = SlowRate;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    fightsystem.ChangeAtkTime(self,self.AtkTimeMul + buff.SaveData1, self.AtkTimeAdd);
	fightsystem.ChangeHit(self,self.HitMulMul, self.HitMulAdd + 430);
	fightsystem.ChangeDodge(self,self.DodgeMulMul, self.DodgeMulAdd + 290);
}