importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//宠物元素精通
function OnUser(fightsystem, self, target, skill, fv,timer)
{
	var Buff1 = fightsystem.GetBuff(self, 11905);
	if(Buff1 != null)
	{
		return UserSkillReturn.SKILL_LOSE;
	}
	else
	{
    fightsystem.AddBuff(self,11905,timer,fv);
    return UserSkillReturn.SKILL_SUCCESS;
	}
}