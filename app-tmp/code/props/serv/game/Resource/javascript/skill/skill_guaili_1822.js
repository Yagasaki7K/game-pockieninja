importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//重击，打晕
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var PhysicalDamage = 0;
    var BonusDamage = 0;
    var DizzyTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            PhysicalDamage = 1;
            BonusDamage = 7;
            DizzyTime = 600;
            break;
        }
        case 2: 
        {
            PhysicalDamage = 1;
            BonusDamage = 7;
            DizzyTime = 600;
            break;
        } 
        case 3: 
        {
            DizzyTime = 1.8;
            break;
        } 
        case 4: 
        {
            DizzyTime = 1.9;
            break;
        } 
        case 5: 
        {
            DizzyTime = 2;
            break;
        }
        case 6: 
        {
            DizzyTime = 2.1;
            break;
        }
        case 7: 
        {
            DizzyTime = 2.2;
            break;
        } 
        case 8: 
        {
            DizzyTime = 2.3;
            break;
        }
        case 9: 
        {
            DizzyTime = 2.4;
            break;
        } 
        case 10: 
        {
            DizzyTime = 2.5;
            break;
        }
        case 11: 
        {
            DizzyTime = 2.6;
            break;
        }   
        case 12: 
        {
            DizzyTime = 2.7;
            break;
        }   
        case 13: 
        {
            DizzyTime = 2.8;
            break;
        }      
        default: ;
    }
    BonusDamage = BonusDamage * (1+0.01*LogicTool.ToInt(self.SkillAdd5*0.01));
    DizzyTime = DizzyTime * (1+0.01*LogicTool.ToInt(self.SkillAdd5*0.01));
    var BuffGhost = fightsystem.GetBuff(self, 11808);
    if(BuffGhost != null)
    {
        PhysicalDamage = PhysicalDamage*0.3;
        BonusDamage = BonusDamage*0.3;
    }
    var InitBuff = fightsystem.GetBuff(target,8888);
    if(InitBuff == null)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    if(!(InitBuff.SaveData%10 < 3))
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    var BuffPeg = fightsystem.GetBuff(target,11840);   
    var AttackDamage = fightsystem.GetDamage(self)*PhysicalDamage + BonusDamage*0.01*target.MaxHP;
    fightsystem.Attack(self,target,AttackDamage,0,fv,timer);
    if((fv.IsHit == 1)&&(BuffPeg == null))
    {       
        //检查重复状态
        var BuffDizzy = fightsystem.GetBuff(target,11813);
        if(BuffDizzy != null)
        {          
            fightsystem.RemoveBuff(target,11813,timer,fv);
        }
        fightsystem.AddBuff(target,11813,timer,fv,DizzyTime,0);
        InitBuff.SaveData += 1;
    }
    return UserSkillReturn.SKILL_SUCCESS;
}