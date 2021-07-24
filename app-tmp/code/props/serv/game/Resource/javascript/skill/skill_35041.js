importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//复活
function OnUser(fightsystem, self, target, skill, fv,timer)
{         
    self.HP = 100;
    fv.IncHP = 100;
    return UserSkillReturn.SKILL_SUCCESS;
}