importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//毒雾
function OnAdd(fightsystem, self, buff, fv, timer)
{
    buff.LifeTime = buff.SaveData;
	fightsystem.ChangeDefense(self, self.DefenseMul - buff.SaveData1, self.DefenseAdd);
	self.Pierce -= 430;
	self.Parry -= 290;
	self.Tough -= 410;	
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    fightsystem.ChangeDefense(self, self.DefenseMul + buff.SaveData1, self.DefenseAdd);
	self.Pierce += 430;
	self.Parry += 290;
	self.Tough += 410;	
}