importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//日落
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    fightsystem.AddBuff(self,1822,timer,fv);
    return UserSkillReturn.SKILL_SUCCESS;
}