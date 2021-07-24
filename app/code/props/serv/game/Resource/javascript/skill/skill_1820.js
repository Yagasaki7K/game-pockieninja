importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//早厥之舞，无法闪避
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_td = target.DodgeMul;
    var script_sh = self.HitMul;
    target.DodgeMul = 0;
    self.HitMul = 0;
    var script_damage = 35;
    fightsystem.Attack(self,target,script_damage,0,fv,timer);
    target.DodgeMul = script_td;
    self.HitMul = script_sh;
    return UserSkillReturn.SKILL_SUCCESS;  
}