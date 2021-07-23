importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//神圣光环
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    fightsystem.AddBuff(self,11867,timer,fv);  
    return UserSkillReturn.SKILL_SUCCESS;  
}