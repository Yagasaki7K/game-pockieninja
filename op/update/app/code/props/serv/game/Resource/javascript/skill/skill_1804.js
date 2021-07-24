importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//挑衅
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //已经中了激怒，就不放了
    if(fightsystem.FindBuff(target,1803))  //以后还有其他封印类技能需要做冲突
    {
        var script_skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,script_skill,timer,fv);
    }
    else
    {
        fightsystem.AddBuff(target,1803,timer,fv);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}