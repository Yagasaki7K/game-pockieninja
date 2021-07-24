importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

function OnUser(fightsystem, self, target, skill, fv,timer)
{
    fightsystem.AddBuff(self,1000,timer,fv);

    //耗蓝
    fv.DecMP = skill.GetDecMP();
    return UserSkillReturn.SKILL_SUCCESS;
}