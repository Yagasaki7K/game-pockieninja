importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//八卦掌
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_damage = 78;        
    fightsystem.Attack(self,target,script_damage,0,fv,timer);
    return UserSkillReturn.SKILL_SUCCESS;
}