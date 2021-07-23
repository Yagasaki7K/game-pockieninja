importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    fightsystem.AddBuff(target,11874,timer,fv);  
    return UserSkillReturn.SKILL_LOSE;  
}