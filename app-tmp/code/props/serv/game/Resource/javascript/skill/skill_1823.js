importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//五行封印，封印技能
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_damage = 8;        
    fightsystem.Attack(self,target,script_damage,0,fv,timer);
    if(fv.IsHit == 1)
    {
        fightsystem.AddBuff(target,1812,timer,fv);   //SkillAdd7影响buff等级    
    }
    return UserSkillReturn.SKILL_SUCCESS;
}