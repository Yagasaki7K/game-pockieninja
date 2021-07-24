importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //回血
    self.HP += 100;
    fv.IncHP = 100;
    fv.SelfLastDamage = -100;
    return UserSkillReturn.SKILL_SUCCESS;
}
