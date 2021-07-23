importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//特殊反击
function OnUser(fightsystem, self, target, skill, fv,timer)
{  
    var damage = fightsystem.GetDamage(self)*1.1+6; //SkillAdd4
    fightsystem.Attack(self,target,damage,0,fv,timer);
    return UserSkillReturn.SKILL_SUCCESS;
}