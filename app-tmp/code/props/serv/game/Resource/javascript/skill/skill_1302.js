importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//连击 50%*2 50%*3
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    if(LogicTool.RandInt(0, 100) < 50)
    {
        var damage = fightsystem.GetDamage(self)*2;
        fightsystem.Attack(self,target,damage,0,fv,timer);
        fv.AttackCount = 2;
    }
    else
    {
        var damage = fightsystem.GetDamage(self)*3;
        fightsystem.Attack(self,target,damage,0,fv,timer);
        fv.AttackCount = 3;
    }
    return UserSkillReturn.SKILL_SUCCESS;
}