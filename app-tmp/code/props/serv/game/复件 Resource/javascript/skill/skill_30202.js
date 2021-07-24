importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//career2浴血
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    if(self.HP*10 < self.MaxHP*7)
    {
        fightsystem.AddBuff(target,1702,timer,fv);
        return UserSkillReturn.SKILL_SUCCESS;
    }
    return UserSkillReturn.SKILL_LOSE;
}