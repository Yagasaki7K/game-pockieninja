importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//career1格挡
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    fightsystem.AddBuff(self,1705,timer,fv);
    return UserSkillReturn.SKILL_SUCCESS;
}