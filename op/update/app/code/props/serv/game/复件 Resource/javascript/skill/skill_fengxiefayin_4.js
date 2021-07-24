importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//封邪法印
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var InitBuff = fightsystem.GetBuff(target, 8888);
	if(InitBuff == null)
    {       	
		var skill = fightsystem.ChangeSkill(skill, 5, fv);		
        return fightsystem.UserSkill(self, target, skill, timer, fv);
    }
	if(!(InitBuff.SaveData%100000/10000 < 1))
    {
        var skill = fightsystem.ChangeSkill(skill, 5, fv);		
        return fightsystem.UserSkill(self, target, skill, timer, fv);
    }
	else
	{
		var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
		var MPCost = LogicTool.ToInt(BaseMPCost * 3.1);
		var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
		if(BuffVesselDestroy != null)
		{
			MPCost = MPCost * 2;
		}
		if(self.MP < MPCost)
		{
			var skill = fightsystem.ChangeSkill(skill, 5, fv);		
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
					AtkMulDec = 70;
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
			InitBuff.SaveData += 10000;
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
				var BuffGhost = fightsystem.GetBuff(target, 11884);
				if(BuffGhost != null)
				{          
					fightsystem.RemoveBuff(target, 11884, timer, fv);
				}
				var GhostTime = 18000;
				var BuffCurse = fightsystem.GetBuff(target, 11823);
				if(BuffCurse != null)
				{
					GhostTime = GhostTime * 0.5;
				}
				fightsystem.AddBuff(target, 11884, timer, fv, GhostTime, AtkMulDec);				
			}
			return UserSkillReturn.SKILL_SUCCESS;
        }       						
	}
}