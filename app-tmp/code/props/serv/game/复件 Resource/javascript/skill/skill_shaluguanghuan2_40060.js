importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//杀戮光环
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    fightsystem.AddBuff(self,11855,timer,fv);  
    return UserSkillReturn.SKILL_SUCCESS;  
}