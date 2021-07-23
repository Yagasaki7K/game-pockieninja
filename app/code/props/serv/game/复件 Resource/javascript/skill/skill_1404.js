importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//法力燃烧
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //只有在对方有蓝的前提下发动
    if(target.MP == 0)
    {
        skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    else if(target.MP <= 100)
    {
        //转换到其他技能
    }
    

    return UserSkillReturn.SKILL_SUCCESS;
}