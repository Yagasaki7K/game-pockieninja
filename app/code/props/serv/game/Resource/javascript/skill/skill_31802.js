importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//阴愈伤灭，恢复红
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_HP = 13; //SkillAdd9
    self.HP += script_HP;
    fv.IncHP = script_HP;
    return UserSkillReturn.SKILL_SUCCESS;
}