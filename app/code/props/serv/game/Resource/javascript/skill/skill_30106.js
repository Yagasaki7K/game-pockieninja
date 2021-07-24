importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//career1 C-2
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_sR = self.ReboundAttach;
    var script_sV = self.VampiricHP;
    var script_tR = target.ReboundAttach;
    var script_tV = target.VampiricHP;
    self.ReboundAttach = 0;
    target.ReboundAttach = 0;
    self.VampiricHP = 0;
    target.VampiricHP = 0;
    var damage = fightsystem.GetDamage(self)*1.7;
    fightsystem.Attack(self,target,damage,0,fv,timer);
    fightsystem.Attack(target,self,damage,0,fv,timer);
    self.ReboundAttach = script_sR;
    target.ReboundAttach = script_tR;
    self.VampiricHP = script_sV;
    target.VampiricHP = script_tV;
    return UserSkillReturn.SKILL_SUCCESS;
}