importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//挑衅
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //已经中了，就不放了
    if(fightsystem.FindBuff(target,1203))
    {
        var script_skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,script_skill,timer,fv);
    }
    else
    {
        fightsystem.AddBuff(target,1203,timer,fv);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}