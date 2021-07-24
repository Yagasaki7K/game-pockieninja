importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//尾兽鞭挞
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var PhysicalDamage = 0;
    var WeakTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            PhysicalDamage = 2.5;
            WeakTime = 800;
            break;
        }
        default: ;
    }
    var BuffGhost = fightsystem.GetBuff(self, 11808);
    if(BuffGhost != null)
    {
        PhysicalDamage = PhysicalDamage*0.3;
    }
    var AttackCount = 0;
    if(LogicTool.RandInt(0, 99) < 50)
    {
        PhysicalDamage = PhysicalDamage*0.8;
        AttackCount = 5;
    }
    else
    {
        PhysicalDamage = PhysicalDamage*1.2;
        AttackCount = 9;
    }
    var AttackDamage = fightsystem.GetDamage(self)*PhysicalDamage;
    fightsystem.Attack(self,target,AttackDamage,0,fv,timer);
    fv.AttackCount = AttackCount;
    fightsystem.AddBuff(self,11833,timer,fv,WeakTime,0);
    return UserSkillReturn.SKILL_SUCCESS;
}