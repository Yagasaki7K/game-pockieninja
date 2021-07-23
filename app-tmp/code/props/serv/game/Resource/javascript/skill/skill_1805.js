importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//恢复x%的蓝
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //回蓝
    var script_MP = self.MaxMP * 0.3;
    self.MP += script_MP;
    fv.IncMP = script_MP;
    return UserSkillReturn.SKILL_SUCCESS;
}