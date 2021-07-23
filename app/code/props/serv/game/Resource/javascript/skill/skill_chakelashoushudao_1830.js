importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//查克拉手术刀
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost);
    var MPBurn = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            MPBurn = 15;
            break;
        }
        case 2: 
        { 
            MPBurn = 15;
            break;
        } 
        case 3: 
        {
            MPBurn = 17;
            break;
        } 
        case 4: 
        {
            MPBurn = 18;
            break;
        } 
        case 5: 
        {
            MPBurn = 19;
            break;
        }
        case 6: 
        {
            MPBurn = 20;
            break;
        }
        case 7: 
        {
            MPBurn = 42;
            break;
        } 
        case 8: 
        {
            MPBurn = 47;
            break;
        }
        case 9: 
        {
            MPBurn = 52;
            break;
        } 
        case 10: 
        {
            MPBurn = 56;
            break;
        }
        case 11: 
        {
            MPBurn = 61;
            break;
        } 
        case 12: 
        {
            MPBurn = 65;
            break;
        } 
        case 13: 
        {
            MPBurn = 70;
            break;
        }    
        default: ;
    }
    var BuffGhost = fightsystem.GetBuff(self, 11808);
    if(BuffGhost != null)
    {
        MPBurn = MPBurn*0.3;
    }
    var BuffSelfVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffSelfVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    if(self.MP < MPCost)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    else 
    {
        var BuffTargetVesselDestroy = fightsystem.GetBuff(target, 11839);
        if(BuffTargetVesselDestroy != null)
        {
            MPBurn = MPBurn*2;
        }
        MPBurn = MPBurn*0.01*self.MaxMP;
        if(MPBurn > target.MP)
        {
            MPBurn = target.MP;
        }
        var BuffPeg = fightsystem.GetBuff(target,11840); 
        var AttackDamage = fightsystem.GetDamage(self);
        var BackDamage = 0;
        var BuffWarmBlooded = fightsystem.GetBuff(self,11814);
        if(BuffWarmBlooded != null)
        {
            BackDamage = AttackDamage*0.2;
        }
        fightsystem.Attack(self,target,AttackDamage,BackDamage,fv,timer);        
        if((fv.IsHit == 1)&&(BuffPeg == null))
        {
            target.MP -= LogicTool.ToInt(MPBurn);
            fv.TargetDecMP = MPBurn;
        }
        self.MP -= MPCost;
        fv.DecMP = MPCost; 
        var BuffDrain = fightsystem.GetBuff(self, 11836);
        if(BuffDrain != null)
        {
            fightsystem.RemoveBuff(self,11836,timer,fv);
        }
        return UserSkillReturn.SKILL_SUCCESS;
    }
}


    