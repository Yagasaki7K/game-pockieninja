importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//宠物格挡
function OnUser(fightsystem, self, target, skill, fv,timer)
{   
    fightsystem.AddBuff(self,40006,timer,fv);
    return UserSkillReturn.SKILL_LOSE;
}