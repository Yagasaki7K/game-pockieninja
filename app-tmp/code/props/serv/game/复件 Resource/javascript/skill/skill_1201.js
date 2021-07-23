importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//无视对方30%的防御
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_m = target.Defence;
    target.Defence = target.Defence*0.7;
    var damage = fightsystem.GetDamage(self);
    var selfdamage = 0;
    fightsystem.Attack(self,target,damage,selfdamage,fv,timer);
    target.Defence = script_m;
    return UserSkillReturn.SKILL_SUCCESS;
}