importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//针刺
function OnUser(fightsystem, self, target, skill, fv,timer)
{
	
	var MPCost = 100;
	var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
	if(BuffVesselDestroy != null)
	{
		MPCost = MPCost * 2;
	}
	if(self.MP < MPCost)
	{		
		var skill = fightsystem.ChangeSkill(skill, 1, fv);		
		return fightsystem.UserSkill(self, target, skill, timer, fv);
	}
	else
	{
		var DamegeModify = 1;
		var DamageMul1 = 1 - target.Defense/(target.Defense + 1354);
		var DamageMul2 = 1 - (target.Defense - 1000)/(target.Defense + 354);
		
		if(target.Defense > 1000)
		{
			DamegeModify = DamageMul2/DamageMul1;
		}
		else
		{
			DamegeModify = 2 * DamageMul2/DamageMul1;
		}
		var BuffGhost = fightsystem.GetBuff(self, 11808);
		if(BuffGhost != null)
		{
			DamegeModify = DamegeModify * 0.3;
		}				
		//远程的干掉土流壁
		var BuffEarthWall = fightsystem.GetBuff(target,11824);
		if(BuffEarthWall != null)
		{
			fightsystem.RemoveBuff(target,11824,timer,fv);
		}
		var AttackDamage = fightsystem.GetDamage(self) * DamegeModify;
		fightsystem.Attack(self, target, AttackDamage, 0, fv, timer);
		self.MP -= MPCost;
		fv.DecMP = MPCost;
		var BuffDrain = fightsystem.GetBuff(self, 11836);
		if(BuffDrain != null)
		{
			fightsystem.RemoveBuff(self, 11836, timer, fv);
		}
		return UserSkillReturn.SKILL_SUCCESS;
	}       						
}