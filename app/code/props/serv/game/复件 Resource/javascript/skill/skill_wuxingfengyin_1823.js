importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//五行封印
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 2.8);
    var SealTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            SealTime = 2300;
            break;
        }
        case 2: 
        {
            SealTime = 2300;
            break;
        } 
        case 3: 
        {
            SealTime = 2.6;
            break;
        } 
        case 4: 
        {
            SealTime = 2.8;
            break;
        } 
        case 5: 
        {
            SealTime = 3;
            break;
        }
        case 6: 
        {
            SealTime = 3.2;
            break;
        }
        case 7: 
        {
            SealTime = 3.3;
            break;
        } 
        case 8: 
        {
            SealTime = 3.4;
            break;
        }
        case 9: 
        {
            SealTime = 3.6;
            break;
        } 
        case 10: 
        {
            SealTime = 3.7;
            break;
        }
        case 11: 
        {
            SealTime = 3.8;
            break;
        }
        case 12: 
        {
            SealTime = 3.9;
            break;
        }
        case 13: 
        {
            SealTime = 4;
            break;
        }   
        default: ;
    }
    SealTime = SealTime * (1+0.01*LogicTool.ToInt(self.SkillAdd7*0.01));
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    var BuffCurse = fightsystem.GetBuff(target, 11823);
    if(BuffCurse != null)
    {
        SealTime = SealTime*0.5;
    }
    if(self.MP < MPCost)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    var InitBuff = fightsystem.GetBuff(target,8888);
    if(InitBuff == null)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    if(!(InitBuff.SaveData%10000/1000 < 1))
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    else
    {
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
            //检查重复状态
            var BuffSeal = fightsystem.GetBuff(target,11812);
            if(BuffSeal != null)
            {          
                fightsystem.RemoveBuff(target,11812,timer,fv);
            }
            fightsystem.AddBuff(target,11812,timer,fv,SealTime,0);
            InitBuff.SaveData += 1000;
        }       
        self.MP -= MPCost;
        fv.DecMP = MPCost;
        var BuffDrain = fightsystem.GetBuff(self, 11836);
        if(BuffDrain != null)
            fightsystem.RemoveBuff(self,11836,timer,fv); 
        return UserSkillReturn.SKILL_SUCCESS;
    }
}