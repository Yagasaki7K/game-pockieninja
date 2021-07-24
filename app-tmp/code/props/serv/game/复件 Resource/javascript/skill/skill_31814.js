importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//酒
function OnUser(fightsystem, self, target, skill, fv,timer)
{ 
    fightsystem.AddBuff(target,1806,timer,fv);
    return UserSkillReturn.SKILL_SUCCESS;
}