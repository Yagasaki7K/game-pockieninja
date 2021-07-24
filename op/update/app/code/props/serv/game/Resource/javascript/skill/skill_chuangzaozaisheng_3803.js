importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//创造再生
function OnUser(fightsystem, self, target, skill, fv,timer)
{    
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 4);
    var Chance = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            Chance = 100;
            break;
        }
        case 2: 
        { 
            Chance = 100;
            break;
        } 
        case 3: 
        {
            Chance = 25;
            break;
        } 
        case 4: 
        {
            Chance = 27;
            break;
        } 
        case 5: 
        {
            Chance = 29;
            break;
        }
        case 6: 
        {
            Chance = 31;
            break;
        }
        case 7: 
        {
            Chance = 63.857;
            break;
        } 
        case 8: 
        {
            Chance = 66.534;
            break;
        }
        case 9: 
        {
            Chance = 69.013;
            break;
        } 
        case 10: 
        {
            Chance = 71.225;
            break;
        }
        case 11: 
        {
            Chance = 73.421;
            break;
        }
        case 12: 
        {
            Chance = 75.415;
            break;
        }
        case 13: 
        {
            Chance = 77.34;
            break;
        }   
        default: ;
    }
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    Chance -= Math.pow(timer/200,0.5)*12;
    if(!(LogicTool.RandInt(0, 99) < Chance))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    if(self.MP < MPCost)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else
    { 
        var RecoverBonus = 1+0.01*LogicTool.ToInt(self.SkillAdd9*0.01);
        var HPRecover = self.GetInitMaxHP()*0.25*RecoverBonus;
        var BuffGhost = fightsystem.GetBuff(self, 11808);
        if(BuffGhost != null)
        {
            HPRecover = HPRecover*0.3;
        }
        self.HP = HPRecover; 
        fv.IncHP = HPRecover;      
        self.MP -= MPCost;
        fv.DecMP = MPCost; 
        var BuffDrain = fightsystem.GetBuff(self, 11836);
        if(BuffDrain != null)
            fightsystem.RemoveBuff(self,11836,timer,fv); 
        return UserSkillReturn.SKILL_SUCCESS;
    }
}