importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//傀儡
function OnUser(fightsystem, self, target, skill, fv,timer)
{  
    var MPCost = 0; //不耗蓝技能
    var PhysicalDamage = 0;
    var CurseTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            MPCost = 0;
            PhysicalDamage = 0.6;
            CurseTime = 0;
            break;
        }
        case 2: 
        {
            MPCost = 0;
            PhysicalDamage = 0.6;
            CurseTime = 0;
            break;
        } 
        case 3: 
        {
            MPCost = 7;
            PhysicalDamage = 0.54;
            CurseTime = 0;
            break;
        } 
        case 4: 
        {
            MPCost = 9;
            PhysicalDamage = 0.57;
            CurseTime = 0;
            break;
        } 
        case 5: 
        {
            MPCost = 10;
            PhysicalDamage = 0.6;
            CurseTime = 0;
            break;
        }
        case 6: 
        {
            MPCost = 12;
            PhysicalDamage = 0.63;
            CurseTime = 0;
            break;
        }
        case 7: 
        {
            MPCost = 14;
            PhysicalDamage = 0.66;
            CurseTime = 0;
            break;
        } 
        case 8: 
        {
            MPCost = 15;
            PhysicalDamage = 0.69;
            CurseTime = 0;
            break;
        }
        case 9: 
        {
            MPCost = 17;
            PhysicalDamage = 0.72;
            CurseTime = 0;
            break;
        } 
        case 10: 
        {
            MPCost = 18;
            PhysicalDamage = 0.75;
            CurseTime = 0;
            break;
        }
        case 11: 
        {
            MPCost = 20;
            PhysicalDamage = 0.78;
            CurseTime = 0;
            break;
        }
        case 12: 
        {
            MPCost = 22;
            PhysicalDamage = 0.81;
            CurseTime = 0;
            break;
        }
        case 13: 
        {
            MPCost = 23;
            PhysicalDamage = 0.84;
            CurseTime = 0;
            break;
        }   
        default: ;
    }
    var InitBuff = fightsystem.GetBuff(target,8888);
    if(InitBuff == null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else 
    {
        var BuffPeg = fightsystem.GetBuff(target,11840);  
        var AttackDamage = fightsystem.GetDamage(self)*PhysicalDamage;
        fightsystem.Attack(self,target,AttackDamage,0,fv,timer); 
        if((fv.IsHit == 1)&&(BuffPeg == null))
        {
            if(InitBuff.SaveData%1000000/100000 < 1)
            {
                fightsystem.AddBuff(target,11811,timer,fv);
                InitBuff.SaveData += 100000;
            }
        }
        return UserSkillReturn.SKILL_SUCCESS;
    }
}