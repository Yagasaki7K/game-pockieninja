importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//牺牲命中率附加很高的伤害
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_m = self.HitMul;
    self.HitMul = self.HitMul-20;
    var damage = fightsystem.GetDamage(self)*2;
    var selfdamage = 0;
    fightsystem.Attack(self,target,damage,selfdamage,fv,timer);
    self.HitMul = script_m;
    return UserSkillReturn.SKILL_SUCCESS;
}