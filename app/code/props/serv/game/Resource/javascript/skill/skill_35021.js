importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//特殊反击，不会触发普通反击
function OnUser(fightsystem, self, target, skill, fv,timer)
{  
    var damage = fightsystem.GetDamage(self);
    fightsystem.Attack(self,target,damage,0,fv,timer);
    fightsystem.AddBuff(self,1214,timer,fv);
    return UserSkillReturn.SKILL_SUCCESS;
}