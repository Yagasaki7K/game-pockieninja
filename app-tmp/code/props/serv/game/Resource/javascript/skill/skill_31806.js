importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//土墙
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    fightsystem.AddBuff(target,1824,timer,fv);
    return UserSkillReturn.SKILL_LOSE;
}