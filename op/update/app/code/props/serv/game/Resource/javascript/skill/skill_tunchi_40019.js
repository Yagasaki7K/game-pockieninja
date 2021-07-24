importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//宠物触发
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 1);
	var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
	
	var ClearBuff = fightsystem.GetRollBuff(target);	
	if((ClearBuff != null) && (ClearBuff.GetOverlying() == 0))
	{			
		if(self.MP < MPCost || ClearBuff.GetBuffId() == 8888)
		{	
			return UserSkillReturn.SKILL_LOSE;
		}
		else
		{	
			fightsystem.RemoveBuff(target,ClearBuff.GetBuffId(),timer,fv);  
			self.MP -= MPCost;
			fv.DecMP = MPCost;
			return UserSkillReturn.SKILL_SUCCESS;
		}
	}
	else
	{	
		return UserSkillReturn.SKILL_LOSE;
	}		
}