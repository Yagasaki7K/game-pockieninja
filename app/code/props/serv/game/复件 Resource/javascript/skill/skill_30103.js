importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//career1包扎
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    self.HP += 50;
    fv.IncHP = 50;
    return UserSkillReturn.SKILL_SUCCESS;
}