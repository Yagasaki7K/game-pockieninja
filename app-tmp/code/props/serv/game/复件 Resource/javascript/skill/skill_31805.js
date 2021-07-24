importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//色诱术，行动前
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    fightsystem.AddBuff(target,1815,timer,fv);   //SkillAdd8影响buff等级    
    return UserSkillReturn.SKILL_SUCCESS;
}