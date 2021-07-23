importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//连击
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var damage = fightsystem.GetDamage(self)*1.5;
    fightsystem.Attack(self,target,damage,0,fv,timer);
    return UserSkillReturn.SKILL_SUCCESS;
}