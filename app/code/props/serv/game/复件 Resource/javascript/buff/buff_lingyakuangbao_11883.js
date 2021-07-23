importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//灵压狂暴
function OnAdd(fightsystem, self, buff, fv, timer)
{
    buff.LifeTime = 6000;
	fightsystem.ChangeAtk(self, self.MinAtkMul + buff.SaveData, self.MinAtkAdd, self.MaxAtkMul + buff.SaveData, self.MaxAtkAdd);
	self.CritMul *= buff.SaveData1;
	fightsystem.ChangeDefense(self, self.DefenseMul, self.DefenseAdd + 11352);	
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{   
	fightsystem.ChangeAtk(self, self.MinAtkMul - buff.SaveData, self.MinAtkAdd, self.MaxAtkMul - buff.SaveData, self.MaxAtkAdd);
	self.CritMul /= buff.SaveData1;
	fightsystem.ChangeDefense(self, self.DefenseMul, self.DefenseAdd - 11352);		
}