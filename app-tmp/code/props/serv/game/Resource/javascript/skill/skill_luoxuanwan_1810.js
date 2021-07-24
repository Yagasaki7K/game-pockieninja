importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);


//螺旋丸
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 1.4);
    var WindDamage = 0;
    var BackWindDamage = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            WindDamage = 1.8;
            BackWindDamage = 0.3;
            break;
        }
        case 2: 
        {
            WindDamage = 1.8;
            BackWindDamage = 0.3;
            break;
        } 
        case 3: 
        {
            WindDamage = 2.29;
            BackWindDamage = 0.57;
            break;
        } 
        case 4: 
        {
            WindDamage = 2.42;
            BackWindDamage = 0.6;
            break;
        } 
        case 5: 
        {
            WindDamage = 2.56;
            BackWindDamage = 0.64;
            break;
        }
        case 6: 
        {
            WindDamage = 2.7;
            BackWindDamage = 0.67;
            break;
        }
        case 7: 
        {
            WindDamage = 2.83;
            BackWindDamage = 0.7;
            break;
        } 
        case 8: 
        {
            WindDamage = 2.97;
            BackWindDamage = 0.74;
            break;
        }
        case 9: 
        {
            WindDamage = 3.11;
            BackWindDamage = 0.77;
            break;
        } 
        case 10: 
        {
            WindDamage = 3.24;
            BackWindDamage = 0.81;
            break;
        }
        case 11: 
        {
            WindDamage = 3.38;
            BackWindDamage = 0.84;
            break;
        } 
        case 12: 
        {
            WindDamage = 3.52;
            BackWindDamage = 0.88;
            break;
        } 
        case 13: 
        {
            WindDamage = 3.65;
            BackWindDamage = 0.91;
            break;
        }    
        default: ;
    }
    WindDamage = WindDamage * (1+0.01*LogicTool.ToInt(self.SkillAdd4*0.01));
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    var BuffSeal = fightsystem.GetBuff(self, 11812);
    if(BuffSeal != null)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    if(self.MP < MPCost)
    {    
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    else
    {
        var IsMelt = 0;
        var BuffSunSet = fightsystem.GetBuff(self, 11822);
        if(BuffSunSet != null)
        {
            if(LogicTool.RandInt(0, 99) < BuffSunSet.SaveData)
            {
                IsMelt = 1;
            }
        }
        var AttackDamage = fightsystem.GetDamage(self)*WindDamage*(1+IsMelt);
        var BackDamage = 0;
        var BuffWarmBlooded = fightsystem.GetBuff(self,11814);
        if(BuffWarmBlooded != null)
        {
            BackDamage = AttackDamage*0.2;
        }
        BackDamage += AttackDamage*BackWindDamage;
        fightsystem.Attack(self,target,AttackDamage,BackDamage,fv,timer);
        self.MP -= MPCost;
        fv.DecMP = MPCost;
        if(IsMelt != 0)
            fv.IsNeglectDef = 1;
        var BuffDrain = fightsystem.GetBuff(self, 11836);
        if(BuffDrain != null)
            fightsystem.RemoveBuff(self,11836,timer,fv);  
        return UserSkillReturn.SKILL_SUCCESS;
    }
}