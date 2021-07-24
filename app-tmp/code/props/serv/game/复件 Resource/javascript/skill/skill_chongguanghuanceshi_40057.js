importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//宠物光环测试
function OnUser(fightsystem, self, target, skill, fv,timer)
{  
    fightsystem.AddBuff(self,11852,timer,fv);
    return UserSkillReturn.SKILL_SUCCESS;       
}