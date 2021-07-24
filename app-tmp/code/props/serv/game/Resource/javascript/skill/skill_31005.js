importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //回蓝
    self.MP += 100;
    fv.IncMP = 100;
    fv.DecMP = -100 + fv.DecMP;
    return UserSkillReturn.SKILL_SUCCESS;
}