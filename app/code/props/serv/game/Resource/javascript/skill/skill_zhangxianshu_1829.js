importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//掌仙术
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 1.2);
    var HPRecover = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            HPRecover = 11;
            break;
        }
        case 2: 
        {
            HPRecover = 11;
            break;
        } 
        case 3: 
        {
            HPRecover = 13;
            break;
        } 
        case 4: 
        {
            HPRecover = 14;
            break;
        } 
        case 5: 
        {
            HPRecover = 15;
            break;
        }
        case 6: 
        {
            HPRecover = 96;
            break;
        }
        case 7: 
        {
            HPRecover = 107;
            break;
        } 
        case 8: 
        {
            HPRecover = 119;
            break;
        }
        case 9: 
        {
            HPRecover = 130;
            break;
        } 
        case 10: 
        {
            HPRecover = 142;
            break;
        }
        case 11: 
        {
            HPRecover = 154;
            break;
        }
        case 12: 
        {
            HPRecover = 164;
            break;
        }
        case 13: 
        {
            HPRecover = 176;
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
        HPRecover = HPRecover*0.3;
    }
    var InitBuff = fightsystem.GetBuff(self,8888);
    if(InitBuff == null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    if(!(InitBuff.SaveData1%10 < 3))
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    if(self.MP < MPCost)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else if(self.HP == self.GetInitMaxHP())
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else
    { 
        HPRecover = HPRecover * (1+0.01*LogicTool.ToInt(self.SkillAdd9*0.01));
        HPRecover = HPRecover*0.01*(self.MaxHP - self.HP);
        if(self.HP + HPRecover > self.GetInitMaxHP())
            HPRecover = self.GetInitMaxHP() - self.HP;
        self.HP += LogicTool.ToInt(HPRecover);
        fv.IncHP = HPRecover;
        self.MP -= MPCost;
        fv.DecMP = MPCost;
        var BuffPoison = fightsystem.GetBuff(self, 11811);
        if(BuffPoison != null)
            fightsystem.RemoveBuff(self,11811,timer,fv); 
        var BuffDrain = fightsystem.GetBuff(self, 11836);
        if(BuffDrain != null)
            fightsystem.RemoveBuff(self,11836,timer,fv);
        InitBuff.SaveData1 += 1;
        return UserSkillReturn.SKILL_SUCCESS;
    }
}