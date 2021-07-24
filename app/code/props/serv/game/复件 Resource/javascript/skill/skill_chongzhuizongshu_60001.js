importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//虫追踪术
function OnUser(fightsystem, self, target, skill, fv,timer)
{
	var InitBuff = fightsystem.GetBuff(target, 11882);
	if(InitBuff == null)
	{
		var MPCost = 1;
		var HPCost = 500;
		var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
		if(BuffVesselDestroy != null)
		{
			MPCost = MPCost * 2;
		}
		if((self.MP < MPCost) || (self.HP < HPCost))
		{
			return UserSkillReturn.SKILL_LOSE;
		}
		else
		{
			fightsystem.AddBuff(target, 11882, timer, fv);
			self.MP -= MPCost;
			self.HP -= HPCost;
            fv.DecMP = MPCost;  
			fv.SelfLastDamage += HPCost;
			return UserSkillReturn.SKILL_SUCCESS;
		}
	}
	else
	{
		return UserSkillReturn.SKILL_LOSE;
	}
}