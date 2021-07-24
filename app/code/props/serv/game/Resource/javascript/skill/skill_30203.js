importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//复活
function OnUser(fightsystem, self, target, skill, fv,timer)
{         
    self.HP = self.MaxHP/5;
    fv.IncHP = self.HP;
    return UserSkillReturn.SKILL_SUCCESS;
}