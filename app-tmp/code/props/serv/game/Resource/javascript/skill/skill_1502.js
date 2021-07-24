importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//大招1，50%几率直接杀死
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    if(LogicTool.RandInt(0,100) < 50)
    {        
        var damage = target.HP;
        fightsystem.Damage(target,damage);
        fv.Damage = damage;
        fv.TargetLastDamage = damage;
    }
    else
    {
        var damage = 40;
        fightsystem.Attack(self,target,damage,0,fv,timer);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}