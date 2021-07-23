importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//毒雾
function OnUser(fightsystem, self, target, skill, fv,timer)
{
	var InitBuff = fightsystem.GetBuff(target, 8888);
	if(InitBuff == null)
    {
        var r = LogicTool.RandInt(0, 99)
		if(r < 33)
		{
			var skill = fightsystem.ChangeSkill(skill, 1808, fv);
		}
		else if(r < 63)
		{
			var skill = fightsystem.ChangeSkill(skill, 6, fv);
		}
		else
		{
			var skill = fightsystem.ChangeSkill(skill, 1, fv);
		}
        return fightsystem.UserSkill(self, target, skill, timer, fv);
    }
	if(!(InitBuff.SaveData1%100000/10000 < 1))
    {
        var r = LogicTool.RandInt(0, 99)
		if(r < 33)
		{
			var skill = fightsystem.ChangeSkill(skill, 1808, fv);
		}
		else if(r < 63)
		{
			var skill = fightsystem.ChangeSkill(skill, 6, fv);
		}
		else
		{
			var skill = fightsystem.ChangeSkill(skill, 1, fv);
		}
        return fightsystem.UserSkill(self, target, skill, timer, fv);
    }
	else
	{
		var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
		var MPCost = LogicTool.ToInt(BaseMPCost * 4);
		var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
		if(BuffVesselDestroy != null)
		{
			MPCost = MPCost * 2;
		}
		if(self.MP < MPCost)
		{
			var r = LogicTool.RandInt(0, 99)
			if(r < 33)
			{
				var skill = fightsystem.ChangeSkill(skill, 1808, fv);
			}
			else if(r < 63)
			{
				var skill = fightsystem.ChangeSkill(skill, 6, fv);
			}
			else
			{
				var skill = fightsystem.ChangeSkill(skill, 1, fv);
			}
			return fightsystem.UserSkill(self, target, skill, timer, fv);
		}
		else
		{
			var DamegeModify = 0;
			switch(skill.GetLevel())
			{
				case 1: 
				{
					DamegeModify = 1;
					AttriDec = 50
					break;
				}       
				default: ;
			}
			var BuffGhost = fightsystem.GetBuff(self, 11808);
			if(BuffGhost != null)
			{
				DamegeModify = DamegeModify * 0.3;
			}
			var AttackDamage = fightsystem.GetDamage(self) * DamegeModify;
			fightsystem.Attack(self, target, AttackDamage, 0, fv, timer);
			InitBuff.SaveData1 += 10000;
			self.MP -= MPCost;
			fv.DecMP = MPCost;
			var BuffDrain = fightsystem.GetBuff(self, 11836);
			if(BuffDrain != null)
			{
				fightsystem.RemoveBuff(self, 11836, timer, fv);
			}
			
			var BuffPeg = fightsystem.GetBuff(target, 11840);
			if((fv.IsHit == 1)&&(BuffPeg == null))
			{
				//检查重复状态
				var BuffGhost = fightsystem.GetBuff(target, 11885);
				if(BuffGhost != null)
				{          
					fightsystem.RemoveBuff(target, 11885, timer, fv);
				}
				var GhostTime = 10000;
				var BuffCurse = fightsystem.GetBuff(target, 11823);
				if(BuffCurse != null)
				{
					GhostTime = GhostTime*0.5;
				}
				fightsystem.AddBuff(target, 11885, timer, fv, GhostTime, AttriDec);				
			}
			return UserSkillReturn.SKILL_SUCCESS;
        }       						
	}
}