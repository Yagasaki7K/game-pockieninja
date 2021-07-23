importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//雾
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    fightsystem.AddBuff(target,1821,timer,fv);
    return UserSkillReturn.SKILL_SUCCESS;
}