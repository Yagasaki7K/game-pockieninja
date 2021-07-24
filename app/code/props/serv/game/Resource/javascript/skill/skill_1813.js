importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//烈风掌，减防
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_damage = 12;        
    fightsystem.Attack(self,target,script_damage,0,fv,timer);
    if(fv.IsHit == 1)
    {
        fightsystem.AddBuff(target,1807,timer,fv);   //SkillAdd4影响buff等级    
    }
    return UserSkillReturn.SKILL_SUCCESS;
}