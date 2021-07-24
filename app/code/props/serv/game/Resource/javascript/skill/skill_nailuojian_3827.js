importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//奈落见
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 0.9);
    var DrainHP = 0;
    var DrainMP = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            DrainHP = 6;
            DrainMP = 6;
            break;
        }
        case 2: 
        {
            DrainHP = 6;
            DrainMP = 6;
            break;
        } 
        case 3: 
        {
            DrainHP = 10;
            DrainMP = 10;
            break;
        } 
        case 4: 
        {
            DrainHP = 45;
            DrainMP = 22;
            break;
        } 
        case 5: 
        {
            DrainHP = 52;
            DrainMP = 26;
            break;
        }
        case 6: 
        {
            DrainHP = 59;
            DrainMP = 29;
            break;
        }
        case 7: 
        {
            DrainHP = 66;
            DrainMP = 33;
            break;
        } 
        case 8: 
        {
            DrainHP = 73;
            DrainMP = 36;
            break;
        }
        case 9: 
        {
            DrainHP = 80;
            DrainMP = 40;
            break;
        } 
        case 10: 
        {
            DrainHP = 87;
            DrainMP = 43;
            break;
        }
        case 11: 
        {
            DrainHP = 94;
            DrainMP = 47;
            break;
        } 
        case 12: 
        {
            DrainHP = 101;
            DrainMP = 50;
            break;
        } 
        case 13: 
        {
            DrainHP = 108;
            DrainMP = 54;
            break;
        }   
        default: ;
    }
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    var BuffGhost = fightsystem.GetBuff(self, 11808);
    if(BuffGhost != null)
    {
        DrainHP = DrainHP*0.25;
    }
    if(self.MP < MPCost)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else 
    {
        var TargetBuffDrain = fightsystem.GetBuff(target,11836);
        if(TargetBuffDrain == null)
        {       
            fightsystem.AddBuff(target,11836,timer,fv,DrainHP,DrainMP);
            self.MP -= MPCost;
            fv.DecMP = MPCost;   
            var SelfBuffDrain = fightsystem.GetBuff(self, 11836);
            if(SelfBuffDrain != null)
                fightsystem.RemoveBuff(self,11836,timer,fv); 
            return UserSkillReturn.SKILL_SUCCESS;
        }
        else
        {            
            return UserSkillReturn.SKILL_LOSE;
        }
    }
}