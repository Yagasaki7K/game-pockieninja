importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//吞吃
function OnUser(fightsystem, self, target, skill, fv,timer)
{
	var ClearBuff = fightsystem.GetRollBuff(self);
	if(ClearBuff != null)
	{	
		var MPCost = self.GetInitMaxMP()*0.15;
		if(self.MP < MPCost)
		{	
			var skill = fightsystem.ChangeSkill(skill,1,fv);
			return fightsystem.UserSkill(self,target,skill,timer,fv);
		}
		else
		{	
			fightsystem.RemoveBuff(self,ClearBuff.GetBuffId(),timer,fv);  
			self.MP -= MPCost;
			fv.DecMP = MPCost;
			return UserSkillReturn.SKILL_SUCCESS;
		}
	}
	else
	{	
		var skill = fightsystem.ChangeSkill(skill,1,fv);
		return fightsystem.UserSkill(self,target,skill,timer,fv);
	}	
}