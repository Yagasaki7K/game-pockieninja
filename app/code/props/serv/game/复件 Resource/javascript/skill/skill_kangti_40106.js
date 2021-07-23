importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    fightsystem.AddBuff(self,11875,timer,fv);  
    return UserSkillReturn.SKILL_LOSE;  
}