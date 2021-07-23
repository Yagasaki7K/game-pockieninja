importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//雷云风暴
function OnUser(fightsystem, self, target, skill, fv,timer)
{
	var CapHP = 18;
    if(LogicTool.RandInt(1, 100) < 30)
    {
      fightsystem.AddBuff(self,11831,timer,fv,LogicTool.ToInt(CapHP*self.MaxHP*0.01),0);
      fightsystem.AddBuff(self,11909,timer,fv);
      return UserSkillReturn.SKILL_SUCCESS;	
    }
	else
	{
		return UserSkillReturn.SKILL_LOSE;
	}
}