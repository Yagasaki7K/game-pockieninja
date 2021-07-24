importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//career1挑衅
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //没中才放
    if(!fightsystem.FindBuff(target,1701))
    {
        fightsystem.AddBuff(target,1701,timer,fv);
        return UserSkillReturn.SKILL_SUCCESS;
    }
    return UserSkillReturn.SKILL_LOSE;   
}