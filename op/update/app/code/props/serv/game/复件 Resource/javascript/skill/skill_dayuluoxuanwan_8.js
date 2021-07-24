importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//大玉螺旋丸
function OnUser(fightsystem, self, target, skill, fv,timer)
{
	var InitBuff = fightsystem.GetBuff(target, 11882);
	var BuffSeal = fightsystem.GetBuff(self, 11812);
    if((InitBuff == null) || (BuffSeal != null))
    {
        var r = LogicTool.RandInt(0, 99)
		if(r < 50)
		{
			var skill = fightsystem.ChangeSkill(skill, 2, fv);
		}
		else
		{
			var skill = fightsystem.ChangeSkill(skill, 1, fv);
		}		
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
	else
	{		
		var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
		var MPCost = LogicTool.ToInt(BaseMPCost * 1.4);
		var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
		if(BuffVesselDestroy != null)
		{
			MPCost = MPCost * 2;
		}
		if(self.MP < MPCost)
		{		
			var r = LogicTool.RandInt(0, 99)
			if(r < 50)
			{
				var skill = fightsystem.ChangeSkill(skill, 2, fv);
			}
			else
			{
				var skill = fightsystem.ChangeSkill(skill, 1, fv);
			}		
			return fightsystem.UserSkill(self,target,skill,timer,fv);
		}
		else
		{
			var DamegeModify = 0;
			switch(skill.GetLevel())
			{
				case 1: 
				{
					DamegeModify = LogicTool.RandInt(2000, 3000);
					break;
				}       
				default: ;
			}
			var BuffGhost = fightsystem.GetBuff(self, 11808);
			if(BuffGhost != null)
			{
				DamegeModify = DamegeModify * 0.3;
			}
			
			var AttackDamage = fightsystem.GetDamage(self) + DamegeModify;
			fightsystem.Attack(self, target, AttackDamage, 0.1 * AttackDamage, fv, timer);
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
}