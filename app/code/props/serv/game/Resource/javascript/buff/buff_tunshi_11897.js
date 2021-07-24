importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//吞噬，60秒清除，直到被治疗清除（减少攻击力20%，持续8秒）
function OnAdd(fightsystem, self, buff, fv, timer)
{
	var AtkDestroy = 20;
	var MaxAtkDestroy = self.MaxAtkAdd*AtkDestroy*0.01;
	var MinAtkDestroy = self.MinAtkAdd*AtkDestroy*0.01;
	fightsystem.ChangeAtk(self,self.MinAtkMul,self.MinAtkAdd-MinAtkDestroy,self.MinAtkMul,self.MaxAtkAdd-MaxAtkDestroy);
}

function OnActivation(fightsystem, self, buff, fv, timer)
{  
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
}