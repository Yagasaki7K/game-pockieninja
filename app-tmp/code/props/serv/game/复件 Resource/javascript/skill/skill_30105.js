importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//career1针刺
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    fightsystem.AddBuff(self,1703,timer,fv);
    return UserSkillReturn.SKILL_SUCCESS;
}