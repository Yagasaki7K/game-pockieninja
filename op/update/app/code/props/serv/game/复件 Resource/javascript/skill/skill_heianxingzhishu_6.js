importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//黑暗行之术
function OnUser(fightsystem, self, target, skill, fv,timer)
{
	var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
	var MPCost = LogicTool.ToInt(BaseMPCost * 1);
	var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
	if(BuffVesselDestroy != null)
	{
		MPCost = MPCost * 2;
	}
	var BuffSlow = fightsystem.GetBuff(target, 11886);
	var InitBuff = fightsystem.GetBuff(self,8888);   
	if((self.MP < MPCost) || (BuffSlow != null))
	{
		var r = LogicTool.RandInt(0, 99)
		if(r < 33)
		{
			var skill = fightsystem.ChangeSkill(skill, 1808, fv);
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
			if(BuffSlow != null)
			{          
				fightsystem.RemoveBuff(target, 11886, timer, fv);
			}
			var SlowTime = 800;				
			fightsystem.AddBuff(target, 11886, timer, fv, SlowTime, 0);		
			var DelayTime = target.AtkTime * 0.5;
            fightsystem.ChangeNextAtkTime(target, DelayTime);
		}
		return UserSkillReturn.SKILL_SUCCESS;
	}       						
}