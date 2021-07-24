importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //虫玉，吸血
    var script_vampire = self.VampiricHP;
    self.VampiricHP = 100;
    var script_damage = 22;   //SkillAdd6
    fightsystem.Attack(self,target,script_damage,0,fv,timer);
    self.VampiricHP = script_vampire;
    return UserSkillReturn.SKILL_SUCCESS;
}