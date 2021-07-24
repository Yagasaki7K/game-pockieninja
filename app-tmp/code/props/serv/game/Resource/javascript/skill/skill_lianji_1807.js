importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//连击
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
        case 2: 
        {
            PhysicalDamage = 2.5;
            WeakTime = 800;
            break;
        } 
        case 3: 
        {
            WeakTime = 2.55;
            break;
        } 
        case 4: 
        {
            WeakTime = 2.74;
            break;
        } 
        case 5: 
        {
            WeakTime = 2.94;
            break;
        }
        case 6: 
        {
            WeakTime = 3.13;
            break;
        }
        case 7: 
        {
            WeakTime = 3.32;
            break;
        } 
        case 8: 
        {
            WeakTime = 3.52;
            break;
        }
        case 9: 
        {
            WeakTime = 3.71;
            break;
        } 
        case 10: 
        {
            WeakTime = 3.91;
            break;
        }
        case 11: 
        {
            WeakTime = 4.1;
            break;
        }
        case 12: 
        {
            WeakTime = 4.3;
            break;
        }
        case 13: 
        {
            WeakTime = 4.49;
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