importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//毒雾，中毒
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    fightsystem.AddBuff(target,1811,timer,fv);
    return UserSkillReturn.SKILL_SUCCESS;
}