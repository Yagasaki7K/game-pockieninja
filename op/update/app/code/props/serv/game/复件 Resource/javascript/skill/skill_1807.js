importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//连击, 按体术等级决定连击数
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //SkillAdd5
    if(LogicTool.RandInt(0, 100) < 34) 
    {
        var damage = fightsystem.GetDamage(self)*2;
        fightsystem.Attack(self,target,damage,0,fv,timer);
        fv.AttackCount = 2;
    }
    else(LogicTool.RandInt(0, 100) < 33) 
    {
        var damage = fightsystem.GetDamage(self)*3;
        fightsystem.Attack(self,target,damage,0,fv,timer);
        fv.AttackCount = 3;
    }
    else
    {
        var damage = fightsystem.GetDamage(self)*4;
        fightsystem.Attack(self,target,damage,0,fv,timer);
        fv.AttackCount = 4;
    }
    return UserSkillReturn.SKILL_SUCCESS;
}