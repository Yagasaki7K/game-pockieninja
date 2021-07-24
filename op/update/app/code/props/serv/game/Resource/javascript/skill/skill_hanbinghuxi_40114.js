importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    fightsystem.AddBuff(self,11879,timer,fv,35,0);  
    return UserSkillReturn.SKILL_LOSE;  
}