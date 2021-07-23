importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//career2血刀
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //fightsystem.AddBuff(self,加攻buff,timer,fv);
    return UserSkillReturn.SKILL_SUCCESS;
}