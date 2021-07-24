importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//针刺，全场反弹
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    fightsystem.AddBuff(self,1817,timer,fv);      
    return UserSkillReturn.SKILL_SUCCESS;
}